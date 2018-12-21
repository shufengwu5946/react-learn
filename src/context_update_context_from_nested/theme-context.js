import React from 'react';
export const themes = {
    light: {
        text: 'black',
        background: 'yellow',
    },
    dark: {
        text: 'white',
        background: 'green',
    },
};

export const ThemeContext = React.createContext(
    {
        theme: themes.dark,
        handleClick: () => { }
    }
);