import React, { useState, createContext } from 'react';

export const ShownVirusesContext = createContext()

export const ShownVirusesProvider = props => {

    const [shownViruses, setShownViruses] = useState([])

    return (
        <ShownVirusesContext.Provider value={[shownViruses, setShownViruses]}>
            {props.children}
        </ShownVirusesContext.Provider>
    )
}

