import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { PlayerPositionProvider } from '../components/Contexts/PlayerPositionContext'
import { ActionsProvider } from '../components/Contexts/ActionsContext'
import { FirstStationProvider } from '../components/Contexts/stationContexts/FirstStationContext'
import { SecondStationProvider } from '../components/Contexts/stationContexts/SecondStationContext'
import { ThirdStationProvider } from '../components/Contexts/stationContexts/ThirdStationContext'
import { FourthStationProvider } from '../components/Contexts/stationContexts/FourthStationContext'
import { FifthStationProvider } from '../components/Contexts/stationContexts/FifthStationContext'
import { SixthStationProvider } from '../components/Contexts/stationContexts/SixthStationContext'
import { MovePlayerClickedProvider } from '../components/Contexts/MovePlayerClickedContext'
import { RenderStationClickedProvider } from '../components/Contexts/RenderStationClickedContext'
import { PlayerRegionProvider } from '../components/Contexts/PlayerRegionContext'
import { ShownVirusesProvider } from '../components/Contexts/ShownVirusesContext'
import { ShownStationsProvider } from '../components/Contexts/ShownStationsContext'
import Map from '../components/Map'


const wrapperShallow = shallow(
    <PlayerPositionProvider>
        <ActionsProvider>
            <FirstStationProvider>
                <SecondStationProvider>
                    <ThirdStationProvider>
                        <FourthStationProvider>
                            <FifthStationProvider>
                                <SixthStationProvider>
                                    <MovePlayerClickedProvider>
                                        <RenderStationClickedProvider>
                                            <PlayerRegionProvider>
                                                <ShownVirusesProvider>
                                                    <ShownStationsProvider>
                                                        <Map/>
                                                    </ShownStationsProvider>
                                                </ShownVirusesProvider>
                                            </PlayerRegionProvider>
                                        </RenderStationClickedProvider>
                                    </MovePlayerClickedProvider>
                                </SixthStationProvider>
                            </FifthStationProvider>
                        </FourthStationProvider>
                    </ThirdStationProvider>
                </SecondStationProvider>
            </FirstStationProvider>
        </ActionsProvider>
    </PlayerPositionProvider>
)


describe('testing the Map component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

      it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <PlayerPositionProvider>
            <ActionsProvider>
                <FirstStationProvider>
                    <SecondStationProvider>
                        <ThirdStationProvider>
                            <FourthStationProvider>
                                <FifthStationProvider>
                                    <SixthStationProvider>
                                        <MovePlayerClickedProvider>
                                            <RenderStationClickedProvider>
                                                <PlayerRegionProvider>
                                                    <ShownVirusesProvider>
                                                        <ShownStationsProvider>
                                                            <Map/>
                                                        </ShownStationsProvider>
                                                    </ShownVirusesProvider>
                                                </PlayerRegionProvider>
                                            </RenderStationClickedProvider>
                                        </MovePlayerClickedProvider>
                                    </SixthStationProvider>
                                </FifthStationProvider>
                            </FourthStationProvider>
                        </ThirdStationProvider>
                    </SecondStationProvider>
                </FirstStationProvider>
            </ActionsProvider>
        </PlayerPositionProvider>, div
        )
       })
})
