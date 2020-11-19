import React, { useState, createContext } from 'react'

export const ShownStationsContext = createContext()

export const ShownStationsProvider = props => {

    const [shownStations, setShownStations] = useState([])

    return (
        <ShownStationsContext.Provider value={[shownStations, setShownStations]}>
            {props.children}
        </ShownStationsContext.Provider>
    )
}

