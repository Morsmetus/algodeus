import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/variables';

const Core = () => {
    return (
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    );
};

ReactDOM.render(<Core />, document.getElementById('root'));
