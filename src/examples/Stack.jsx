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
import { Stack } from 'data-structures/Stack';

export const StackExample = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }
    const forceUpdate = useForceUpdate();

    const [stack] = useState(new Stack());
    const [item, setItem] = useState('');

    const handlePush = () => {
        if (item.length < 1) return;
        stack.push(item);
        setItem('');
        forceUpdate();
    };

    const handlePop = () => {
        stack.pop();
        setItem('');
        forceUpdate();
    };

    return (
        <Container>
            <PageTitle>Stack</PageTitle>
            <Tools>
                <ToolsRow>
                    <Input value={item} onChange={setItem} autoFocus={true} />
                </ToolsRow>
                <ToolsRow>
                    <ToolsItem>
                        <Button onClick={handlePush}>Push</Button>
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
            <Visualizer items={recursiveTreeToArray(stack.top)} />
            <Code>{stack}</Code>
        </Container>
    );
};
