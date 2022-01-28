import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 35px;
    border: none;
    border-radius: 8px;
    width: 100%;
    outline: none;
`;

export const Input = ({ value, onChange, autoFocus }) => {
    return (
        <StyledInput
            value={value}
            onChange={(e) => onChange(e.target.value)}
            autoFocus={autoFocus}
        />
    );
};
