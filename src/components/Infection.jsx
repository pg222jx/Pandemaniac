/**
 * Representing the infection phase.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useContext } from 'react'
import { ActionsContext } from './Contexts/ActionsContext'
import { ShownStationsContext } from './Contexts/ShownStationsContext'
import { TurnsContext } from './Contexts/TurnsContext'


const Infection = (props) => {
const [actions, setActions] = useContext(ActionsContext) 
const [shownStations, setShownStations] = useContext(ShownStationsContext) // eslint-disable-line no-unused-vars
const [turnsAmount, setTurnsAmount] = useContext(TurnsContext)

const chancePerStation = 5

/**
 * Checks amount of stations rendered and calculates the risk of a virus spawning.
 */
const  infect = async () => {
    const amountOfStations = shownStations.length
    const randomNr = [Math.floor(Math.random() * 100)]
    let chance;

    if (actions < 2) {
        if (await amountOfStations === 6) {
            props.onWin()
        } else {
            if (await amountOfStations === 5) {
                chance = 40
            } else {
                chance = amountOfStations * chancePerStation
            }
    
            if (chance < randomNr) {
                props.spawnRandomVirus()            
            } else {
                props.information.textContent = 'No continent was infected this turn!'
            }
            
            setActions(2)
            setTurnsAmount(turnsAmount + 1)
        }
    }
}

    return ( 
        <button className="Turn" id="done" onClick={() => {infect()}}>Done with turn!</button>
     )
}
 
export default Infection
