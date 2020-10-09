import React from 'react';
import StackExample from './examples/Stack';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import StackArrayExample from './examples/StackWithArray';
import { ROUTES } from './services/routes';

const AppWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const App = () => {
    return (
        <AppWrapper>
            <Router>
                <ul>
                    <li>
                        <Link to={ROUTES.STACK}>Stack</Link>
                    </li>
                    <li>
                        <Link to={ROUTES.STACK_ARRAY}>Stacks (Array)</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path={ROUTES.STACK}>
                        <StackExample />
                    </Route>
                    <Route path={ROUTES.STACK_ARRAY}>
                        <StackArrayExample />
                    </Route>
                </Switch>
            </Router>
        </AppWrapper>
    );
};

export default App;
