import React,{ useState, createContext } from 'react';

export const FirstStationContext = createContext()

export const FirstStationProvider = props => {

    const [style, setStyle] = useState({bottom: undefined, left: undefined, visibility: 'hidden'})

    return (
        <FirstStationContext.Provider value={[style, setStyle]}>
            {props.children}
        </FirstStationContext.Provider>
    );
}

