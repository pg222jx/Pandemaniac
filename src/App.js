/**
 * The starting point of the react application.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */

import React from 'react'
import './App.css'

import Game from './components/Game'
import { FirstStationProvider } from './components/Contexts/stationContexts/FirstStationContext'
import { SecondStationProvider } from './components/Contexts/stationContexts/SecondStationContext'
import { ThirdStationProvider } from './components/Contexts/stationContexts/ThirdStationContext'
import { FourthStationProvider } from './components/Contexts/stationContexts/FourthStationContext'
import { FifthStationProvider } from './components/Contexts/stationContexts/FifthStationContext'
import { SixthStationProvider } from './components/Contexts/stationContexts/SixthStationContext'
import { ShownVirusesProvider } from './components/Contexts/ShownVirusesContext'
import { ShownStationsProvider } from './components/Contexts/ShownStationsContext'
import { TimerProvider } from './components/Contexts/TimerContext'
import { ErrorBoundary } from './components/ErrorBoundry'

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <TimerProvider>
          <ShownStationsProvider>
            <ShownVirusesProvider>
              <FirstStationProvider>
                <SecondStationProvider>
                  <ThirdStationProvider>
                    <FourthStationProvider>
                      <FifthStationProvider>
                      <SixthStationProvider>
                        <Game/>
                      </SixthStationProvider>
                    </FifthStationProvider>
                   </FourthStationProvider>
                  </ThirdStationProvider>
                </SecondStationProvider>
              </FirstStationProvider>
            </ShownVirusesProvider>
          </ShownStationsProvider>
        </TimerProvider>
      </ErrorBoundary>
    </div>
  )
}

export default App
