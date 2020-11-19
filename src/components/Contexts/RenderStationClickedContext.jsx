import React,{ useState, createContext } from 'react';

export const RenderStationClickedContext = createContext()

export const RenderStationClickedProvider = props => {

    const [clicked, setClicked] = useState(false)

    return (
        <RenderStationClickedContext.Provider value={[clicked, setClicked]}>
            {props.children}
        </RenderStationClickedContext.Provider>
    );
}

