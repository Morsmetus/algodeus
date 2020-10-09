import React from 'react';
import StackExample from './examples/Stack';
import styled from 'styled-components';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const App = () => {
    return (
        <AppWrapper>
            <StackExample />
        </AppWrapper>
    );
};

export default App;
