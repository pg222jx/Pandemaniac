import React,{ useState, createContext } from 'react';

export const RemoveVirusContext = createContext()

export const RemoveVirusProvider = props => {

    const [clicked, setClicked] = useState(false)

    return (
        <RemoveVirusContext.Provider value={[clicked, setClicked]}>
            {props.children}
        </RemoveVirusContext.Provider>
    );
}

