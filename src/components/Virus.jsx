/**
 * Representing the virus.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useContext } from 'react'
import virusImage from '../images/virus.png'
import { RemoveVirusContext } from './Contexts/RemoveVirusContext'
import { ActionsContext } from './Contexts/ActionsContext'
import { PlayerRegionContext } from './Contexts/PlayerRegionContext' 

const Virus = (props) => {
    
    const [removeVirusClicked, setRemoveVirusClicked] = useContext(RemoveVirusContext)
    const [amount, setAmount] = useContext(ActionsContext)
    const [region, setRegion] = useContext(PlayerRegionContext)// eslint-disable-line no-unused-vars

    const style = {bottom: props.bottom, left: props.left, visibility: props.visibility}
    const virusId = props.virusid
    const virusRegion = virusId.slice(0, 2)
    
    /**
     * Checks so the player is in same position as the virus it wants to remove.
     */
    const checkPlayerPosition = () => {
        if (virusRegion === region) {
            checkIfClicked()
        }
    }
    /**
     * Removes virus if the "remove virus" button is clicked and actions is not 0.
     */
    const checkIfClicked = () => {
        if(amount === 0) {
            props.information.textContent = 'No more actions. Click "Done with turn".'
            return
        }
        if (removeVirusClicked === true && amount > 0 ) {
            props.remove(virusId)
            setRemoveVirusClicked(false)
            setAmount(amount -1)
        }
    }

    return (
        <img src={virusImage} alt="Virus" className="virus" style={style} virusid={virusId} onClick={() => {checkPlayerPosition()}}/>
    )
}

export default Virus
