import React,{ useState, createContext } from 'react';

export const FifthStationContext = createContext()

export const FifthStationProvider = props => {

    const [style, setStyle] = useState({bottom: undefined, left: undefined, visibility: 'hidden'})

    return (
        <FifthStationContext.Provider value={[style, setStyle]}>
            {props.children}
        </FifthStationContext.Provider>
    );
}

