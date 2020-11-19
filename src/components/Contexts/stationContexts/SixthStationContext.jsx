import React,{ useState, createContext } from 'react';

export const SixthStationContext = createContext()

export const SixthStationProvider = props => {

    const [style, setStyle] = useState({bottom: undefined, left: undefined, visibility: 'hidden'})

    return (
        <SixthStationContext.Provider value={[style, setStyle]}>
            {props.children}
        </SixthStationContext.Provider>
    );
}

