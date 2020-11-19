import React,{ useState, createContext } from 'react';

export const TurnsContext = createContext()

export const TurnsProvider = props => {

    const [amount, setAmount] = useState(0)

    return (
        <TurnsContext.Provider value={[amount, setAmount]}>
            {props.children}
        </TurnsContext.Provider>
    )
}

