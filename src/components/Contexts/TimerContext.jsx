import React,{ useState, createContext } from 'react';

export const TimerContext = createContext()

export const TimerProvider = props => {

    let [time, setTime] = useState(0)

    return (
        <TimerContext.Provider value={[time, setTime]}>
            {props.children}
        </TimerContext.Provider>
    )
}

