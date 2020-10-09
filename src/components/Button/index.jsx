import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    height: 35px;
    border: none;
    color: white;
    background: ${(props) => (props.danger ? '#ff5722' : '#4caf50')};
    border-radius: 8px;
    width: 120px;
    font-family: monospace;
    cursor: pointer;
    outline: none;
    &:active {
        opacity: 0.8;
    }
`;

const Button = ({ text, children, onClick, danger }) => {
    return (
        <StyledButton danger={danger} onClick={onClick}>
            {text ? text : children}
        </StyledButton>
    );
};

export default Button;
