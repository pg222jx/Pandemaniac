/**
 * Representing the map.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */

import React, { useContext }from 'react';
import worldMap from '../images/map.png'
import { PlayerPositionContext } from './Contexts/PlayerPositionContext'
import { ActionsContext } from './Contexts/ActionsContext'
import { FirstStationContext } from './Contexts/stationContexts/FirstStationContext'
import { SecondStationContext } from './Contexts/stationContexts/SecondStationContext'
import { ThirdStationContext } from './Contexts/stationContexts/ThirdStationContext'
import { FourthStationContext } from './Contexts/stationContexts/FourthStationContext'
import { FifthStationContext } from './Contexts/stationContexts/FifthStationContext'
import { SixthStationContext } from './Contexts/stationContexts/SixthStationContext'
import { MovePlayerClickedContext } from './Contexts/MovePlayerClickedContext'
import { RenderStationClickedContext } from './Contexts/RenderStationClickedContext'
import { PlayerRegionContext } from './Contexts/PlayerRegionContext'
import { ShownVirusesContext } from './Contexts/ShownVirusesContext'
import { ShownStationsContext } from './Contexts/ShownStationsContext'


const Map = (props) => {
    const [position, setPosition] = useContext(PlayerPositionContext)// eslint-disable-line no-unused-vars
    const [playerRegion, setPlayerRegion] = useContext(PlayerRegionContext)
    const [shownViruses, setShownViruses] = useContext(ShownVirusesContext)// eslint-disable-line no-unused-vars
    const [shownStations, setShownStations] = useContext(ShownStationsContext)

    const [actionAmount, setActionAmount] = useContext(ActionsContext)

    const [firstStationPosition, setFirstStationPosition] = useContext(FirstStationContext)// eslint-disable-line no-unused-vars
    const [secondStationPosition, setSecondStationPosition] = useContext(SecondStationContext)// eslint-disable-line no-unused-vars
    const [thirdStationPosition, setThirdStationPosition] = useContext(ThirdStationContext)// eslint-disable-line no-unused-vars
    const [fourthStationPosition, setFourthStationPosition] = useContext(FourthStationContext)// eslint-disable-line no-unused-vars
    const [fifthStationPosition, setFifthStationPosition] = useContext(FifthStationContext)// eslint-disable-line no-unused-vars
    const [sixthStationPosition, setSixthStationPosition] = useContext(SixthStationContext)// eslint-disable-line no-unused-vars
    

    const [movePlayerClicked, setMovePlayerClicked] = useContext(MovePlayerClickedContext)
    const [renderStationClicked, setRenderStationClicked] = useContext(RenderStationClickedContext)

    /**
    * Checks if the clicked region is a neihgbour of the players position.
    * 
    * @returns {boolean} - True if neighbour otherwise false.
    */
    const isNeighbour = (region1) => {
        switch (region1) {
            case 'NA':
                if(playerRegion === 'SA' || playerRegion === 'EU' || playerRegion === 'AS') {
                    return true
                } else {
                    return false
                }
            case 'SA':
                if(playerRegion === 'NA' || playerRegion === 'AF' || playerRegion === 'AU') {
                    return true
                } else {
                    return false
                }
            case 'EU':
                if(playerRegion === 'NA' || playerRegion === 'AF' || playerRegion === 'AS') {
                    return true
                } else {
                    return false
                }
            case 'AF': 
                if(playerRegion === 'SA' || playerRegion === 'EU' || playerRegion === 'AS') {
                    return true
                } else {
                    return false
                }
            case 'AS':
                if(playerRegion === 'EU' || playerRegion === 'AU' || playerRegion === 'AF' || playerRegion === 'NA') {
                    return true
                } else {
                    return false
                }
            case 'AU':
                if(playerRegion === 'AS' || playerRegion === 'SA') {
                    return true
                } else {
                    return false
                }
            default:
                console.log('Region not known')
            }
    }

    /**
    * Sets position of player.
    * 
    * @returns {object} - The position of the player on the screen.
    */
    const moveToPosition = (region) => {
        switch (region) {
            case 'NA':
                return {bottom: '350px', left: '150px'}
            case 'SA':
                return {bottom: '110px', left: '235px'}
            case 'EU':
                return {bottom: '390px', left: '490px'}
            case 'AF': 
                return {bottom: '200px', left: '530px'}
            case 'AS':
                return {bottom: '365px', left: '700px'}
            case 'AU':
                return {bottom: '100px', left: '860px'}
            default:
                console.log('Region not known')
        }
    }

    /**
    * Checks if region has a rendered virus.
    * 
    * @returns {boolean} - True if region has virus otherwise false.
    */
    const regionHasVirus = (region) => {
        switch (region) {
            case 'NA':
                if (shownViruses.includes('NA 1') || shownViruses.includes('NA 2') || shownViruses.includes('NA 3')) {
                    return true 
                } else {
                    return false
                }
            case 'SA':
                if (shownViruses.includes('SA 1') || shownViruses.includes('SA 2') || shownViruses.includes('SA 3')) {
                    return true 
               } else {
                    return false
               }
            case 'EU':
                if (shownViruses.includes('EU 1') || shownViruses.includes('EU 2') || shownViruses.includes('EU 3')) {
                    return true 
               } else {
                    return false
               }
            case 'AF':
                if (shownViruses.includes('AF 1') || shownViruses.includes('AF 2') || shownViruses.includes('AF 3')) {
                    return true 
               } else {
                    return false
               }
            case 'AS':
                if (shownViruses.includes('AS 1') || shownViruses.includes('AS 2') || shownViruses.includes('AS 3')) {
                    return true 
               } else {
                   return false
               }
            case 'AU':
                if (shownViruses.includes('AU 1') || shownViruses.includes('AU 2') || shownViruses.includes('AU 3')) {
                    return true 
               } else {
                    return false
               }
            default:
                console.log('Error: No region found.')
        }
    } 

    /**
    * Sets position of station on the screen.
    */
    const renderStation = (region) => {
        switch (region) {
            case 'NA':
                setFirstStationPosition({bottom: '380px', left: '120px'})
                break
            case 'SA':
                setSecondStationPosition({bottom: '150px', left: '245px'})
                break
            case 'EU':
                setFourthStationPosition({bottom: '395px', left: '535px'})
                break
            case 'AF': 
            setThirdStationPosition({bottom: '250px', left: '500px'})
            break
            case 'AS':
                setFifthStationPosition({bottom: '385px', left: '735px'})
                break
            case 'AU':
                setSixthStationPosition({bottom: '100px', left: '890px'})
                break
            default:
                console.log('Region not known')
        }
    }

    /**
     * Game logic for all clicks on map.
     * 
     * @param {String} continent A string represanting the clicked continent.
     */
    const continentEvent = (continent) => {
        if (actionAmount === 0) {
            props.information.textContent = 'No more actions. Click "Done with turn".'
            return
        }

        if (movePlayerClicked) {
            if (isNeighbour(continent)) {
                setActionAmount(actionAmount - 1)
                setMovePlayerClicked(false)
                setPlayerRegion(continent)
                setPosition(moveToPosition(continent))
                props.information.textContent = 'Player moved to ' + getContinent(continent)
            } else {
                props.information.textContent = 'Player can only move to an adjacent continent.'
            }
        } else if (renderStationClicked && actionAmount === 2)
            if(playerRegion === continent && !shownStations.includes(continent)) {
                if(regionHasVirus(continent)) { return }
                setActionAmount(actionAmount - 2)
                setShownStations([...shownStations, continent])
                renderStation(continent)
                setRenderStationClicked(false)
                props.information.textContent = 'You built a science centre in ' + getContinent(continent) + '.'
                const p = document.createElement('p')
                p.setAttribute('class', 'stationInformation')
                p.textContent = 'It cost 2 actions.'
                props.information.appendChild(p)
        }
    }

    /**
    * Takes region code and converts to full continent string.
    * 
    * @returns {string} - The continent.
    */
    const getContinent = (continent) => {
        switch (continent) {
            case 'NA':
                return 'North America'
            case 'SA':
                return 'South America'
            case 'EU':
                return 'Europe'
            case 'AF':
                return 'Africa'
            case 'AS':
                return 'Asia'
            case 'AU':
                return 'Australia'
            default:
        }
    }

    return (
        <React.Fragment>
        <img src={worldMap} alt="World map" className="worldMap" useMap="#mapImage"/>
        <map name="mapImage">
            <area href="#" alt="North America" shape="rect" coords="20,20, 400,240" onClick={() => continentEvent('NA')}/>
            <area href="#" alt="South America" shape="rect" coords="155,255, 350,520" onClick={() => continentEvent('SA')}/>
            <area href="#" alt="Europe" shape="rect" coords="435,20, 630,140" onClick={() => continentEvent('EU')}/> 
            <area href="#" alt="Asia" shape="rect" coords="640,20, 950,200" onClick={() => continentEvent('AS')}/> 
            <area href="#" alt="Africa" shape="rect" coords="435,170, 580,450" onClick={() => continentEvent('AF')}/> 
            <area href="#" alt="Australia" shape="rect" coords="800,300, 1100,480" onClick={() => continentEvent('AU')}/> 
        </map>
    </React.Fragment>  
    )
}

export default Map
