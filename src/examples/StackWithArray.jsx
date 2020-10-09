import React, { useState } from 'react';
import { StackWithArray } from '../data-structures/Stack';
import Input from '../components/Input';
import Container from '../layout/Container';
import Code from '../layout/Code';
import Button from '../components/Button';
import Tools from '../layout/Tools';
import Visualizer from '../layout/Visualizer';
import ToolsRow from '../layout/ToolsRow';
import { recursiveTreeToArray } from '../helpers/arrays';
import PageTitle from '../layout/PageTitle';
import styled from 'styled-components';

const StackArrayExample = () => {
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
            <PageTitle>Stack with Array</PageTitle>
            <Tools>
                <ToolsRow>
                    <Input value={item} onChange={setItem} autoFocus={true} />
                </ToolsRow>
                <ToolsRow>
                    <Button onClick={handlePush}>Push</Button>
                    <Button danger={true} onClick={handlePop}>
                        Pop
                    </Button>
                </ToolsRow>
            </Tools>
            <Visualizer items={stack.print()} />
            <Code>{stack}</Code>
            <code></code>
        </Container>
    );
};

export default StackArrayExample;
