import React from 'react';
import styled from 'styled-components';
import NavigationItem from './NavigationItem';
import { ROUTES } from 'services/routes';

const StyledNavigation = styled.div`
    width: 80%;
    display: flex;
    margin-bottom: 16px;
`;

export const Navigation = () => {
    return (
        <StyledNavigation>
            <NavigationItem title={'Stack'} url={ROUTES.STACK} />
            <NavigationItem title={'Stack (Array)'} url={ROUTES.STACK_ARRAY} />
            <NavigationItem title={'Queue'} url={ROUTES.QUEUE} />
            <NavigationItem title={'Linked List'} url={ROUTES.LINKED_LIST} />
            <NavigationItem title={'Hash Map'} url={ROUTES.HASH_MAP} />
            <NavigationItem
                title={'Binary Search Tree'}
                url={ROUTES.BINARY_SEARCH_TREE}
            />
        </StyledNavigation>
    );
};
