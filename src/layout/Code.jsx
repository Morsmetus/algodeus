import React from 'react';
import styled from 'styled-components';

const StyledCode = styled.div`
    background: ${(props) => props.theme.colors.backgroundGray};
    min-height: 200px;
    padding: 8px 16px;
    border-radius: 8px;
    border: 2px dotted #e2e2e2;
    cursor: pointer;
`;

const Code = ({ children }) => {
    return (
        <StyledCode>
            <pre>{JSON.stringify(children, undefined, 4)}</pre>
        </StyledCode>
    );
};

export default Code;
