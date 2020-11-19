/**
 * 6 science centers.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useContext } from 'react'
import station from '../images/station.png'
import { FirstStationContext } from './Contexts/stationContexts/FirstStationContext'
import { SecondStationContext } from './Contexts/stationContexts/SecondStationContext'
import { ThirdStationContext } from './Contexts/stationContexts/ThirdStationContext'
import { FourthStationContext } from './Contexts/stationContexts/FourthStationContext'
import { FifthStationContext } from './Contexts/stationContexts/FifthStationContext'
import { SixthStationContext } from './Contexts/stationContexts/SixthStationContext'

const Player = () => {
    const [firstPosition, setFirstPosition] = useContext(FirstStationContext)// eslint-disable-line no-unused-vars
    const [secondPosition, setSecondPosition] = useContext(SecondStationContext)// eslint-disable-line no-unused-vars
    const [thirdPosition, setthirdPosition] = useContext(ThirdStationContext)// eslint-disable-line no-unused-vars
    const [fourthPosition, setFourthPosition] = useContext(FourthStationContext)// eslint-disable-line no-unused-vars
    const [fifthPosition, setFifthPosition] = useContext(FifthStationContext)// eslint-disable-line no-unused-vars
    const [sixthPosition, setsixthPosition] = useContext(SixthStationContext)// eslint-disable-line no-unused-vars

    return (
        <React.Fragment>
            <img src={station} alt="Science station for North America" id="firstStation" className="station" style={ firstPosition }/>
            <img src={station} alt="Science station for South America" id="secondStation" className="station" style={ secondPosition }/>
            <img src={station} alt="Science station for Africa" id="thirdStation" className="station" style={ thirdPosition }/>
            <img src={station} alt="Science station for Europe" id="fourthStation" className="station" style={ fourthPosition }/>
            <img src={station} alt="Science station for Asia" id="firthStation" className="station" style={ fifthPosition }/>
            <img src={station} alt="Science station for Australia" id="sixthStation" className="station" style={ sixthPosition }/>
        </React.Fragment>
    )
}
 
export default Player
