import React from 'react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Switch from '@mui/material/Switch';
import './darkMode.css';


const DarkMode = ({ theme, setTheme }) => {
    const toggleTheme = () =>{
        setTheme((curr) => (curr === "light" ? "dark" : "light"));
    }

    return (
    
        <div className='header__nightMode'>
            <Switch color="default" sx={{ fontSize: 50 }}
                onChange={toggleTheme} 
                checked={theme === "dark"}
            />
            <Brightness4Icon sx={{ fontSize: 50 }}/>
        </div>
    )
}

export default DarkMode;