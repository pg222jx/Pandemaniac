import React,{ useState, createContext } from 'react';

export const ThirdStationContext = createContext()

export const ThirdStationProvider = props => {

    const [style, setStyle] = useState({bottom: undefined, left: undefined, visibility: 'hidden'})

    return (
        <ThirdStationContext.Provider value={[style, setStyle]}>
            {props.children}
        </ThirdStationContext.Provider>
    );
}

