import React from 'react';
import styled from 'styled-components';

const StyledCodeArea = styled.div`
    background: #e2e2e2;
    width: 1200px;
    min-height: 200px;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;

export const Index = ({ onChange }) => {
    return (
        <StyledCodeArea
            contentEditable={true}
            onInput={(e) => console.log(e.currentTarget.textContent)}
        >
            text
        </StyledCodeArea>
    );
};
