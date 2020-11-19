import React,{ useState, createContext } from 'react';

export const PlayerRegionContext = createContext()

export const PlayerRegionProvider = props => {

    const [region, setRegion] = useState('')

    return (
        <PlayerRegionContext.Provider value={[region, setRegion]}>
            {props.children}
        </PlayerRegionContext.Provider>
    )
}

