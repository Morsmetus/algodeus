import React from 'react';
import StackExample from './examples/Stack';
import styled from 'styled-components';
import StackArrayExample from './examples/StackWithArray';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const App = () => {
    return (
        <AppWrapper>
            <StackExample />
            <StackArrayExample />
        </AppWrapper>
    );
};

export default App;
