import React,{ useState, createContext } from 'react';

export const FourthStationContext = createContext()

export const FourthStationProvider = props => {

    const [style, setStyle] = useState({bottom: undefined, left: undefined, visibility: 'hidden'})

    return (
        <FourthStationContext.Provider value={[style, setStyle]}>
            {props.children}
        </FourthStationContext.Provider>
    );
}

