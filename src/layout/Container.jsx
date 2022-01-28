import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
`;

const Container = ({ children }) => {
    return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
