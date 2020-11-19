import React,{ useState, createContext } from 'react';

export const PlayerPositionContext = createContext()

export const PlayerPositionProvider = props => {

    const [position, setPosition] = useState({bottom: undefined, left: undefined})

    return (
        <PlayerPositionContext.Provider value={[position, setPosition]}>
            {props.children}
        </PlayerPositionContext.Provider>
    )
}

