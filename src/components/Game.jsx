/**
 * Representing the game.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */

import React, { useState, useContext } from 'react'

import Navbar from './Navbar'
import Map from './Map'
import TurnCard from './TurnCard'
import Player from './Player'
import StartGame from './StartGame'
import GameOver from './GameOver'
import PlayerWon from './PlayerWon'
import Virus from './Virus'
import Stations from './Stations'
import { TimerContext } from './Contexts/TimerContext'
import { PlayerPositionProvider } from './Contexts/PlayerPositionContext'
import { MovePlayerClickedProvider } from './Contexts/MovePlayerClickedContext'
import { RenderStationClickedProvider } from './Contexts/RenderStationClickedContext'
import { ActionsProvider } from './Contexts/ActionsContext'
import { TurnsProvider } from './Contexts/TurnsContext'
import { RemoveVirusProvider } from './Contexts/RemoveVirusContext'
import { ShownVirusesContext } from './Contexts/ShownVirusesContext'
import { ShownStationsContext } from './Contexts/ShownStationsContext'
import { PlayerRegionProvider } from './Contexts/PlayerRegionContext'

function Game() {
  const [startGameVisibility, setStartGameVisibility] = useState('hidden')

  const [time, setTime] = useContext(TimerContext)// eslint-disable-line no-unused-vars

  const [gameOver, setGameOver] = useState([])
  const [won, setWon] = useState([])

  const [timerId, setTimerId] = useState()

  const [virus1, setVirus1] = useState('hidden')
  const [virus2, setVirus2] = useState('hidden')
  const [virus3, setVirus3] = useState('hidden')
  const [virus4, setVirus4] = useState('hidden')
  const [virus5, setVirus5] = useState('hidden')
  const [virus6, setVirus6] = useState('hidden')
  const [virus7, setVirus7] = useState('hidden')
  const [virus8, setVirus8] = useState('hidden')
  const [virus9, setVirus9] = useState('hidden')
  const [virus10, setVirus10] = useState('hidden')
  const [virus11, setVirus11] = useState('hidden')
  const [virus12, setVirus12] = useState('hidden')
  const [virus13, setVirus13] = useState('hidden')
  const [virus14, setVirus14] = useState('hidden')
  const [virus15, setVirus15] = useState('hidden')
  const [virus16, setVirus16] = useState('hidden')
  const [virus17, setVirus17] = useState('hidden')
  const [virus18, setVirus18] = useState('hidden')

  const viruses = [
  {id: 'NA 1', continent: 'North America', style: {bottom: '390px', left: '120px', visibility: virus1}},
  {id: 'NA 2', continent: 'North America', style: {bottom: '410px', left: '140px', visibility: virus2}},
  {id: 'NA 3', continent: 'North America', style: {bottom: '390px', left: '140px', visibility: virus3}},
  {id: 'SA 1', continent: 'South America', style: {bottom: '160px', left: '245px', visibility: virus4}},
  {id: 'SA 2', continent: 'South America', style: {bottom: '180px', left: '265px', visibility: virus5}},
  {id: 'SA 3', continent: 'South America',style: {bottom: '160px', left: '265px', visibility: virus6}},
  {id: 'EU 1', continent: 'Europe', style: {bottom: '395px', left: '535px', visibility: virus7}},
  {id: 'EU 2', continent: 'Europe', style: {bottom: '415px', left: '555px', visibility: virus8}},
  {id: 'EU 3', continent: 'Europe', style: {bottom: '395px', left: '555px', visibility: virus9}},
  {id: 'AF 1', continent: 'Africa', style: {bottom: '250px', left: '500px', visibility: virus10}},
  {id: 'AF 2', continent: 'Africa', style: {bottom: '270px', left: '520px', visibility: virus11}},
  {id: 'AF 3', continent: 'Africa', style: {bottom: '250px', left: '520px', visibility: virus12}},
  {id: 'AS 1', continent: 'Asia', style: {bottom: '395px', left: '735px', visibility: virus13}},
  {id: 'AS 2', continent: 'Asia', style: {bottom: '415px', left: '755px', visibility: virus14}},
  {id: 'AS 3', continent: 'Asia', style: {bottom: '395px', left: '755px', visibility: virus15}},
  {id: 'AU 1', continent: 'Australia', style: {bottom: '110px', left: '890px', visibility: virus16}},
  {id: 'AU 2', continent: 'Australia', style: {bottom: '130px', left: '910px', visibility: virus17}},
  {id: 'AU 3', continent: 'Australia', style: {bottom: '110px', left: '910px', visibility: virus18}}
  ]

  const [shownViruses, setShownViruses] = useContext(ShownVirusesContext)
  const [shownStations, setShownStations] = useContext(ShownStationsContext)// eslint-disable-line no-unused-vars

  const [spawnedVirusCalledAmount, setSpawnedVirusCalledAmount] = useState(0)

  const amountOfViruses = 2

  const hideOnGameOver = () => {
    setStartGameVisibility('hidden')
    setVirus1('hidden')
    setVirus2('hidden')
    setVirus3('hidden')
    setVirus4('hidden')
    setVirus5('hidden')
    setVirus6('hidden')
    setVirus7('hidden')
    setVirus8('hidden')
    setVirus9('hidden')
    setVirus10('hidden')
    setVirus11('hidden')
    setVirus12('hidden')
    setVirus13('hidden')
    setVirus14('hidden')
    setVirus15('hidden')
    setVirus16('hidden')
    setVirus17('hidden')
    setVirus18('hidden')
  }

  /**
   * On click function that starts the game.
   */
  const showOnStart = () => {
    setStartGameVisibility('visible')
    spawnAmountOfViruses(amountOfViruses)
   }

   /**
    * Spawning the right amount of viruses on start of game depending on value of the amountOfViruses variable.
    */
   const spawnAmountOfViruses = (amountOfViruses) => {
      for (let i = 0; i < amountOfViruses; i++) {
        spawnRandomVirus()
      }
   }

  /**
    * Checks if player is Game Over.
    * 
    * @returns {boolean} - True if player is game over otherwhise false.
    */
   const checkIfGameOver = (region) => {
      switch (region) {
        case'NA':
          if (shownViruses.includes('NA 1') && shownViruses.includes('NA 2') && shownViruses.includes('NA 3')) {
            return true
          } else {
            return false
          }
          case'SA':
          if (shownViruses.includes('SA 1') && shownViruses.includes('SA 2') && shownViruses.includes('SA 3')) {
            return true
          } else {
            return false
          }
          case'EU':
          if (shownViruses.includes('EU 1') && shownViruses.includes('EU 2') && shownViruses.includes('EU 3')) {
            return true
          } else {
            return false
          }
          case'AF':
          if (shownViruses.includes('AF 1') && shownViruses.includes('AF 2') && shownViruses.includes('AF 3')) {
            return true
          } else {
            return false
          }
          case'AS':
          if (shownViruses.includes('AS 1') && shownViruses.includes('AS 2') && shownViruses.includes('AS 3')) {
            return true
          } else {
            return false
          }
          case'AU':
          if (shownViruses.includes('AU 1') && shownViruses.includes('AU 2') && shownViruses.includes('AU 3')) {
            return true
          } else {
            return false
          }
        default:
      }
   }

  /**
   * Gets a random virus from array, checks if virus is already rendered, if not => shows virus.
   */
  const spawnRandomVirus = () => {
    setSpawnedVirusCalledAmount(spawnedVirusCalledAmount + 1)
    setShownViruses(prevState => {
      let randomVirus = viruses[Math.floor(Math.random() * viruses.length)]
      while (checkStation(randomVirus.id) === true || prevState.includes(randomVirus.id)) {
        if (checkIfGameOver(getRegionCode(randomVirus.id))) {
          return setGameOver([{virus: getRegionCode(randomVirus.id)}])
        } else {
          randomVirus = viruses[Math.floor(Math.random() * viruses.length)]
        }
      }
      checkVirus(randomVirus.id, 'visible')
      if (spawnedVirusCalledAmount > 0) {
        document.querySelector('.information').textContent = 'A virus was spawned in ' + randomVirus.continent + '.'
      } else {
        document.querySelector('.information').textContent = 'Two viruses were spawned!'
      }
      return [...prevState, randomVirus.id]
    })
  }

  /**
   * Gets the region code of the virus.
   * 
   * @returns {string} - The regioncode of the virus.
   */
  const getRegionCode = (virusId) => {
    return virusId.slice(0, 2)
  }

  /**
   * Checks if station is rendered on continent.
   * 
   * @param {string} virusId The virusId of the virus.
   * @returns {boolean} - True if station is rendered otherwise false.
   */
  const checkStation = (virusId) => {
    if (shownStations.includes(getRegionCode(virusId))) {
      return true
    } else {
      return false
    }
  }

  /**
   * Removes virus if conditions in Virus.jsx is met.
   * 
   * @param {string} virusId The id of the virus to be removed.
   * @returns {array} - The updated ShownViruses state.
   */
   const remove = (virusId) => {
    setShownViruses(prevState => {
        return ([...prevState.filter(e => e !== virusId)])
    })
    checkVirus(virusId, 'hidden')
   }

  /**
   * Checks which virus is removed or chosen to infect and sets it visibility accordingly.
   * 
   * @param {string} virus The virus to set visibility on. 
   * @param {string} visibility Hidden or visible depending on which method it is called from.
   */
  const checkVirus = (virusId, visibility) => {
    switch (virusId) {
      case 'NA 1':
        setVirus1(visibility)
        break
      case 'NA 2':
        setVirus2(visibility)
        break
      case 'NA 3':
        setVirus3(visibility)
        break
      case 'SA 1':
        setVirus4(visibility)
        break
      case 'SA 2':
        setVirus5(visibility)
        break
      case 'SA 3':
        setVirus6(visibility)
        break
      case 'EU 1':
        setVirus7(visibility)
        break
      case 'EU 2':
        setVirus8(visibility)
        break
      case 'EU 3':
        setVirus9(visibility)
        break
      case 'AF 1':
        setVirus10(visibility)
        break
      case 'AF 2':
        setVirus11(visibility)
        break
      case 'AF 3':
        setVirus12(visibility)
        break
      case 'AS 1':
        setVirus13(visibility)
        break
      case 'AS 2':
        setVirus14(visibility)
        break
      case 'AS 3':
        setVirus15(visibility)
        break
      case 'AU 1':
        setVirus16(visibility)
        break
      case 'AU 2':
        setVirus17(visibility)
        break
      case 'AU 3':
        setVirus18(visibility)
        break
       default:
         console.log('Error: No virus found.')
      } 
    }

    /**
    * Starts the timer for the game. 
    */
    const startTimer = () => {
      setTimerId(setInterval(() => {
        setTime(seconds => seconds + 1)
      }, 1000))
    }

    /**
    * Stops the timer.
    */
    const stopTimer = () => {
      clearInterval(timerId)
    }

  return (
    <div className="Game" data-testid="GameTest">
      <PlayerRegionProvider>
        <RemoveVirusProvider>
            <PlayerPositionProvider>
              <MovePlayerClickedProvider>
                <RenderStationClickedProvider> 
                  <ActionsProvider>
                    <TurnsProvider>
                      <Navbar/>
                        <br/><br/>
                        <h1 className="pandemaniacTitle">Pandemaniac</h1>
                        <div className="gameContainer">
                          <Map information={document.querySelector('.information')}/>
                          <div style={{visibility: startGameVisibility}}>
                            <Stations/>
                            <Player/>
                            <div className="virusContainer">
                              { viruses.map((virus) => {
                                return <Virus key={virus.id} information={document.querySelector('.information')} remove={() => {remove(virus.id)}} virusid={virus.id} 
                                bottom={virus.style.bottom} left={virus.style.left} visibility={virus.style.visibility}/>
                              })}
                            </div>
                            <TurnCard spawnRandomVirus={spawnRandomVirus} onWin={() => setWon([{id: 1}])} information={document.querySelector('.information')}/>
                          </div> 
                          <div className="gameOverContainer">
                          { gameOver.map((game) => {
                                return <GameOver key={game.virus} virus={game.virus} stopTimer={() => stopTimer()} onRender={() => hideOnGameOver()}/>
                              })}
                          </div>
                          <div className="playerWonContainer">
                          { won.map((won) => {
                                return <PlayerWon key={won.id} onRender={() => hideOnGameOver()} stopTimer={() => stopTimer()}/>
                              })}
                          </div>
                          <div className="startGameContainer" onClick={() => showOnStart()}>
                            <StartGame timer={() => startTimer()}/>
                          </div>
                          <div className="informationContainer" >
                            <p className="information">Don't forget to read the rules before start!</p>
                          </div>
                        </div>
                      </TurnsProvider>
                  </ActionsProvider>
                </RenderStationClickedProvider> 
              </MovePlayerClickedProvider>
            </PlayerPositionProvider>
        </RemoveVirusProvider>
      </PlayerRegionProvider>
    </div>
  )
}

export default Game
