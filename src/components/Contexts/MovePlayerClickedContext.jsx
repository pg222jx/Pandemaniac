import React,{ useState, createContext } from 'react';

export const MovePlayerClickedContext = createContext()

export const MovePlayerClickedProvider = props => {

    const [clicked, setClicked] = useState(false)

    return (
        <MovePlayerClickedContext.Provider value={[clicked, setClicked]}>
            {props.children}
        </MovePlayerClickedContext.Provider>
    );
}

