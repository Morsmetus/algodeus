import React from 'react';
import styled from 'styled-components';

const StyledToolsRow = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

export const ToolsRow = ({ children }) => {
    return <StyledToolsRow>{children}</StyledToolsRow>;
};
