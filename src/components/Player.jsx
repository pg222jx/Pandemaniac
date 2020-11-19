/**
 * Representing the player.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useContext } from 'react'
import { PlayerPositionContext } from './Contexts/PlayerPositionContext'
import player from '../images/player.png'

const Player = () => {
    const [position, setPosition] = useContext(PlayerPositionContext)// eslint-disable-line no-unused-vars

    return (
        <img src={player} alt="The player" className="player" style={ position }/>
    )
}
 
export default Player
