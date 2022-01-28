import React, { useState } from 'react';
import { Stack } from 'data-structures/Stack';
import Input from 'components/Input';
import Container from 'layout/Container';
import Code from 'layout/Code';
import Button from 'components/Button';
import styled from 'styled-components';

const StyledActionContent = styled.div`
    width: 80%;
`;

const StyledCreateArea = styled.div`
    background: #f7f7f7;
    width: 80%;
    margin-bottom: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    justify-content: center;
    display: flex;
`;

const StyledInputArea = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

const StyledAction = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

export const LinkedListExample = () => {
    const [stack, setStack] = useState(new Stack());
    const [item, setItem] = useState('');

    function useForceUpdate() {
        const [value, setValue] = useState(0);
        return () => setValue((value) => ++value);
    }

    const forceUpdate = useForceUpdate();

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
            <StyledCreateArea>
                <StyledActionContent>
                    <StyledInputArea>
                        <Input
                            value={item}
                            onChange={(e) => setItem(e.target.value)}
                            autoFocus={true}
                        />
                    </StyledInputArea>
                    <StyledAction>
                        <Button onClick={handlePush}>Add</Button>
                        <Button danger={true} onClick={handlePop}>
                            Remove
                        </Button>
                    </StyledAction>
                </StyledActionContent>
            </StyledCreateArea>
            <Code>{JSON.stringify(stack, undefined, 4)}</Code>
        </Container>
    );
};
