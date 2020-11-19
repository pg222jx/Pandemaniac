import React,{ useState, createContext } from 'react';

export const ActionsContext = createContext()

export const ActionsProvider = props => {

    const [amount, setAmount] = useState(2)

    return (
        <ActionsContext.Provider value={[amount, setAmount]}>
            {props.children}
        </ActionsContext.Provider>
    )
}

