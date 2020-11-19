import React,{ useState, createContext } from 'react';

export const SecondStationContext = createContext()

export const SecondStationProvider = props => {

    const [style, setStyle] = useState({bottom: undefined, left: undefined, visibility: 'hidden'})

    return (
        <SecondStationContext.Provider value={[style, setStyle]}>
            {props.children}
        </SecondStationContext.Provider>
    );
}

