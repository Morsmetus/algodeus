import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ROUTES } from 'services/routes';
import Navigation from 'components/Navigation';
import {
    LinkedListExample,
    QueueExample,
    StackExample,
    StackArrayExample,
} from 'examples';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    return (
        <AppWrapper>
            <BrowserRouter>
                <Navigation />
                <Routes>
                    <Route index element={<StackExample />} />
                    <Route path={ROUTES.STACK} element={<StackExample />} />
                    <Route
                        path={ROUTES.STACK_ARRAY}
                        element={<StackArrayExample />}
                    />
                    <Route path={ROUTES.QUEUE} element={<QueueExample />} />
                    <Route
                        path={ROUTES.LINKED_LIST}
                        element={<LinkedListExample />}
                    />
                </Routes>
            </BrowserRouter>
        </AppWrapper>
    );
};

export default App;
