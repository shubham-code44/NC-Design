import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes/Router';
import ScrollToTop from "./Components/scroll-to-top";
import ThemeProvider from "./theme";


function App() {
    return (
        <ThemeProvider>
        <BrowserRouter>
            <ScrollToTop/>
                <Routes/>
        </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
