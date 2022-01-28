import React from 'react';
import styled from 'styled-components';

const StyledPageTitle = styled.div`
    font-size: 24px;
    margin-bottom: 16px;
    font-family: monospace;
`;

const PageTitle = ({ children }) => {
    return <StyledPageTitle>{children}</StyledPageTitle>;
};

export default PageTitle;
