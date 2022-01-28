import React from 'react';
import styled from 'styled-components';

const StyledTools = styled.div`
    background: ${(props) => props.theme.colors.backgroundGray};
    margin-bottom: 16px;
    padding: 8px 16px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

const Tools = ({ children }) => {
    return <StyledTools>{children}</StyledTools>;
};

export default Tools;
