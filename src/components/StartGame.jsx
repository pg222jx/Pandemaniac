/**
 * Representing the 'Start Game' button.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useState, useContext } from 'react'
import { PlayerPositionContext } from './Contexts/PlayerPositionContext'
import { PlayerRegionContext } from './Contexts/PlayerRegionContext'

const StartGame = (props) => {
    const [buttonVisibility, setButtonVisibility] = useState('visible')
    const [position, setPosition] = useContext(PlayerPositionContext)// eslint-disable-line no-unused-vars
    const [playerRegion, setPlayerRegion] = useContext(PlayerRegionContext)// eslint-disable-line no-unused-vars

    /**
     * Starts the game.
     */
    const start = () => {
        props.timer()
        setButtonVisibility('hidden')
        randomizeContinent()
    }
 
     /**
      * Gets a random continent.
      */
    const randomizeContinent = () => { 
         const continents = [1, 2, 3, 4, 5, 6]
         const randomContinent = continents[Math.floor(Math.random() * continents.length)];
         setPlayerPosition(randomContinent)
     }
 
     /**
      * Sets the coordinate for the player according to continent.
      * 
      * @param {number} - Representing a continent.
      */
     const setPlayerPosition = (continent) => {
        if (continent === 1) {
            setPlayerRegion('NA')
            setPosition({bottom: '350px', left: '150px'})
        } else if (continent === 2) {
            setPlayerRegion('SA')
            setPosition({bottom: '110px', left: '235px'})
        } else if (continent === 3) {
            setPlayerRegion('AF')
            setPosition({bottom: '200px', left: '530px'})
        } else if (continent === 4) {
            setPlayerRegion('EU')
            setPosition({bottom: '390px', left: '490px'})
        } else if (continent === 5) {
            setPlayerRegion('AS')
            setPosition({bottom: '365px', left: '700px'})
        } else if (continent === 6) {
            setPlayerRegion('AU')
            setPosition({bottom: '100px', left: '860px'})
        } 
     }

    return (
        <React.Fragment>
        <div className="startButton" style={{visibility: buttonVisibility}} onClick={() => start()}>
            <button>Start Game!</button>
        </div>
        </React.Fragment>
    )
}
 
export default StartGame