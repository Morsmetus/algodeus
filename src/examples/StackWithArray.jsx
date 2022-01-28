import React, { useState } from 'react';
import { StackWithArray } from 'data-structures/Stack';
import Input from 'components/Input';
import Container from 'layout/Container';
import Code from 'layout/Code';
import Button from 'components/Button';
import Tools from 'layout/Tools';
import Visualizer from 'layout/Visualizer';
import ToolsRow from 'layout/ToolsRow';
import PageTitle from 'layout/PageTitle';
import ToolsItem from 'layout/ToolsItem';

export const StackArrayExample = () => {
    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }

    const forceUpdate = useForceUpdate();

    const [stack, setStack] = useState(new StackWithArray());
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
            <PageTitle>Stack (Array)</PageTitle>
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
            <Visualizer items={stack.print()} />
            <Code>{stack}</Code>
        </Container>
    );
};
