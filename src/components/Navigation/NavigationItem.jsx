import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${(props) => props.theme.colors.dark};
`;

const StyledNavigationItem = styled.div`
    margin: 0 16px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    font-family: monospace;
`;

const NavigationItem = ({ title, url }) => {
    return (
        <StyledLink to={url}>
            <StyledNavigationItem>{title}</StyledNavigationItem>
        </StyledLink>
    );
};

export default NavigationItem;
