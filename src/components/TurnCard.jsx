/**
 * The action card.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useContext } from 'react'
import { TimerContext } from './Contexts/TimerContext'
import { MovePlayerClickedContext } from './Contexts/MovePlayerClickedContext'
import { RenderStationClickedContext } from './Contexts/RenderStationClickedContext'
import { RemoveVirusContext } from './Contexts/RemoveVirusContext'
import { ActionsContext } from './Contexts/ActionsContext'
import { TurnsContext } from './Contexts/TurnsContext'
import Infection from './Infection'

const TurnCard = (props) => {

    const [time, setTime] = useContext(TimerContext)// eslint-disable-line no-unused-vars
    const [movePlayerClicked, setMovePlayerClicked] = useContext(MovePlayerClickedContext) // eslint-disable-line no-unused-vars
    const [renderStationClicked, setRenderStationClicked] = useContext(RenderStationClickedContext) // eslint-disable-line no-unused-vars
    const [removeVirusClicked, setRemoveVirusClicked] = useContext(RemoveVirusContext) // eslint-disable-line no-unused-vars
    const [amount, setAmount] = useContext(ActionsContext) // eslint-disable-line no-unused-vars
    const [turns, setTurns] = useContext(TurnsContext) // eslint-disable-line no-unused-vars

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
     * Sets the clicked button to true and the others to false.
     * 
     * @param {string} str The string to check.
     */
    const setClick = (str) => {
        // Setting others to false to make sure you cant do two things at same time
        if (str === 'player') {
            setMovePlayerClicked(true)
            setRenderStationClicked(false)
            setRemoveVirusClicked(false)
        } else if (str === 'station') {
            setRenderStationClicked(true)
            setMovePlayerClicked(false)
            setRemoveVirusClicked(false)
        } else if (str === 'virus') {
            setRemoveVirusClicked(true)
            setRenderStationClicked(false)
            setMovePlayerClicked(false)
        } 
    }

    return ( 
        <div className="turnCard">
            <div className="TurnsDone">
                <h4>Turns done:</h4>
                <p>{turns}</p>
                <hr/>
            </div>
            <div className="timerContainer">
                <h4>Time spent:</h4>
                <p data-testid="TimeSpent-test" className="TimeSpent">{convertTime()}</p>
                <hr/>
            </div>
            <div className="turnContainer">
                <h4 className="ActionsLeft">Actions left: {amount}</h4>
                <hr/>
                <h4>What's your next move?</h4>
                <button data-testid="value" className="Turn" id="move" onClick={() => setClick('player')}>Move one step</button>
                <button className="Turn" onClick={() => setClick('station')}>Build a science centre</button>
                <button className="Turn" id="remove" onClick={() => setClick('virus')}>Remove virus</button>
                <Infection information={props.information} spawnRandomVirus={props.spawnRandomVirus} onWin={props.onWin}/>
            </div>
        </div>
     )
}
 
export default TurnCard
