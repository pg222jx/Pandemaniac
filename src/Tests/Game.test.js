import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { shallow } from 'enzyme'
import Game from '../components/Game'

import { ShownVirusesProvider } from '../components/Contexts/ShownVirusesContext'
import { ShownStationsProvider } from '../components/Contexts/ShownStationsContext'
import { TimerProvider } from '../components/Contexts/TimerContext'

import { FirstStationProvider } from '../components/Contexts/stationContexts/FirstStationContext'
import { SecondStationProvider } from '../components/Contexts/stationContexts/SecondStationContext'
import { ThirdStationProvider } from '../components/Contexts/stationContexts/ThirdStationContext'
import { FourthStationProvider } from '../components/Contexts/stationContexts/FourthStationContext'
import { FifthStationProvider } from '../components/Contexts/stationContexts/FifthStationContext'
import { SixthStationProvider } from '../components/Contexts/stationContexts/SixthStationContext'

const wrapperShallow = shallow(
<FirstStationProvider>
    <SecondStationProvider>
        <ThirdStationProvider>
            <FourthStationProvider>
                <FifthStationProvider>
                   <SixthStationProvider>
                        <ShownVirusesProvider>
                            <ShownStationsProvider>
                                <TimerProvider>
                                    <Game/>   
                                </TimerProvider>
                            </ShownStationsProvider>
                        </ShownVirusesProvider>
                    </SixthStationProvider>
                </FifthStationProvider>
            </FourthStationProvider>
        </ThirdStationProvider>
    </SecondStationProvider>
</FirstStationProvider>
)


describe('testing the Game component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

      
    it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <FirstStationProvider>
            <SecondStationProvider>
                <ThirdStationProvider>
                    <FourthStationProvider>
                        <FifthStationProvider>
                        <SixthStationProvider>
                                <ShownVirusesProvider>
                                    <ShownStationsProvider>
                                        <TimerProvider>
                                            <Game/>   
                                        </TimerProvider>
                                    </ShownStationsProvider>
                                </ShownVirusesProvider>
                            </SixthStationProvider>
                        </FifthStationProvider>
                    </FourthStationProvider>
                </ThirdStationProvider>
            </SecondStationProvider>
        </FirstStationProvider>, div
        )
    })
})
