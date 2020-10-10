import React from 'react';
import styled from 'styled-components';

const StyledToolsRow = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

const ToolsRow = ({ children }) => {
    return <StyledToolsRow>{children}</StyledToolsRow>;
};

export default ToolsRow;
