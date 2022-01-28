import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 35px;
    border: none;
    color: white;
    background: ${(props) =>
        props.danger ? props.theme.colors.danger : props.theme.colors.success};
    border-radius: 8px;
    width: 120px;
    font-family: monospace;
    cursor: pointer;
    outline: none;
    &:active {
        opacity: 0.8;
    }
    &:disabled {
        background: ${(props) => props.theme.colors.gray};
    }
`;

export const Button = ({ text, children, onClick, danger, disabled }) => {
    return (
        <StyledButton danger={danger} onClick={onClick} disabled={disabled}>
            {text ? text : children}
        </StyledButton>
    );
};
