import React, { useState } from 'react';
import { Input, Button } from 'components';
import {
    Visualizer,
    Code,
    Container,
    Tools,
    PageTitle,
    ToolsItem,
    ToolsRow,
} from 'layout';
import { recursiveTreeToArray } from 'helpers/arrays';
import { LinkedList } from 'data-structures/LinkedList';

export const LinkedListExample = () => {
    const [linkedList] = useState(new LinkedList());
    const [item, setItem] = useState('');

    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }

    const forceUpdate = useForceUpdate();

    const onAppend = () => {
        if (item.length < 1) return;
        linkedList.append(item);
        setItem('');
        forceUpdate();
    };

    const handlePop = () => {
        linkedList.pop();
        setItem('');
        forceUpdate();
    };

    return (
        <Container>
            <PageTitle>Linked List</PageTitle>
            <Tools>
                <ToolsRow>
                    <Input value={item} onChange={setItem} autoFocus={true} />
                </ToolsRow>
                <ToolsRow>
                    <ToolsItem>
                        <Button onClick={onAppend}>Append</Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button danger={true} onClick={handlePop}>
                            Pop
                        </Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button disabled>Peek</Button>
                    </ToolsItem>
                </ToolsRow>
            </Tools>
            <Visualizer items={recursiveTreeToArray(linkedList.head)} />
            <Code>{linkedList}</Code>
        </Container>
    );
};
