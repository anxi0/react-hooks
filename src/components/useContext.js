import React, { createContext, useContext } from 'react'

const Theme = createContext({color:'red',back:'black'});

const Context = () =>{
    const theme = useContext(Theme);
    const style = {
        width: '30px',
        height: '30px',
        color: theme.color,
        background: theme.back,
    }
    return(
        <div style={style}><h1>hi</h1></div>
    );
}

export default Context;