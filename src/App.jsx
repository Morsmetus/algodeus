import React from 'react';
import StackExample from './examples/Stack';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StackArrayExample from './examples/StackWithArray';
import { ROUTES } from './services/routes';
import Navigation from './components/Navigation';
import QueueExample from './examples/Queue';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const App = () => {
    return (
        <AppWrapper>
            <Router>
                <Navigation />
                <Switch>
                    <Route path={ROUTES.STACK}>
                        <StackExample />
                    </Route>
                    <Route path={ROUTES.STACK_ARRAY}>
                        <StackArrayExample />
                    </Route>
                    <Route path={ROUTES.QUEUE}>
                        <QueueExample />
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
};

export default App;
