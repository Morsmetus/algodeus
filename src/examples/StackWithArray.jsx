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
import { StackWithArray } from 'data-structures/Stack';

export const StackArrayExample = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }

    const forceUpdate = useForceUpdate();

    const [stack, setStack] = useState(new StackWithArray());
    const [item, setItem] = useState('');

    const onPush = () => {
        if (item.length < 1) return;
        stack.push(item);
        setItem('');
        forceUpdate();
    };

    const onPop = () => {
        stack.pop();
        setItem('');
        forceUpdate();
    };

    return (
        <Container>
            <PageTitle>Stack (Array)</PageTitle>
            <Tools>
                <ToolsRow>
                    <Input value={item} onChange={setItem} autoFocus={true} />
                </ToolsRow>
                <ToolsRow>
                    <ToolsItem>
                        <Button onClick={onPush}>Push</Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button danger={true} onClick={onPop}>
                            Pop
                        </Button>
                    </ToolsItem>
                    <ToolsItem>
                        <Button disabled>Peek</Button>
                    </ToolsItem>
                </ToolsRow>
            </Tools>
            <Visualizer items={stack.print()} />
            <Code>{stack}</Code>
        </Container>
    );
};
