import React from 'react';
import styled from 'styled-components';

const StyledToolsItem = styled.div`
    margin-right: 8px;
`;

export const ToolsItem = ({ children }) => {
    return <StyledToolsItem>{children}</StyledToolsItem>;
};
