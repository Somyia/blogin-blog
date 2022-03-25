import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import theme from "./Themes/theme";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login/Login'
import Blogs from './Components/Blogs/Blogs'

function App() {

    return (
        <MuiThemeProvider theme={theme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="login" element={<Login />} />
                    <Route path="blogs" element={<Blogs />} />
                </Routes>
            </BrowserRouter>
        </MuiThemeProvider>
    )

}

export default App;
