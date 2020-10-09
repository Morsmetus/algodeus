import React from 'react';
import styled from 'styled-components';

const StyledToolsItem = styled.div``;

const ToolsItem = ({ children }) => {
    return <StyledToolsItem>{children}</StyledToolsItem>;
};

export default ToolsItem;
