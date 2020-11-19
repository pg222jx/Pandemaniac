/**
 * Representing the 'Start Game' button.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useEffect, useContext } from 'react'
import HighscoreForm from './HighscoreForm'
import { TurnsContext } from './Contexts/TurnsContext'
import { TimerContext } from './Contexts/TimerContext'


const GameOver = (props) => {
    const [turns, setTurns] = useContext(TurnsContext)// eslint-disable-line no-unused-vars
    const [time, setTime] = useContext(TimerContext)// eslint-disable-line no-unused-vars

    /**
    * Converts number to minutes and seconds.
    * 
    * @returns {string} - Representing the time in minutes and seconds.
    */
    const convertTime = () => {
        const totalSeconds = time
        const minutes = Math.floor(totalSeconds/60)
        const seconds = totalSeconds - minutes * 60
        return minutes + ':' + seconds
    }

    /**
    * Refreshes the page on Try Again.
    */
    const refreshPage = () => {
        window.location.reload(false)
    }

    /**
    * UseEffect hook to stop timer and hide Game components on render. 
    */
    useEffect(() => {
        props.onRender()
        props.stopTimer()
    })

    return (
        <React.Fragment>
        <div className="playerWon">
            <h3>Congratulations!</h3>
            <p>You have now built a science centre in every continent and</p>
            <p>therefore saved the world in {turns} turns and with the time: {convertTime()}!</p>
            <HighscoreForm/>
            <button className="tryAgain" onClick={refreshPage}>Try again?</button>
            </div>
        </React.Fragment>
    )
}
 
export default GameOver