import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen  } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import  { MovePlayerClickedProvider } from '../components/Contexts/MovePlayerClickedContext'
import  { RenderStationClickedProvider } from '../components/Contexts/RenderStationClickedContext'
import  { TimerContext, TimerProvider } from '../components/Contexts/TimerContext'
import  { RemoveVirusProvider } from '../components/Contexts/RemoveVirusContext'
import  { TurnsProvider } from '../components/Contexts/TurnsContext'
import  { ActionsContext, ActionsProvider } from '../components/Contexts/ActionsContext'
import TurnCard from '../components/TurnCard'
import { ShownStationsProvider } from '../components/Contexts/ShownStationsContext'

function renderTurnCard(amount, setAmount, time, setTime) {
    return render(
    <RemoveVirusProvider>
        <ActionsContext.Provider value={[amount, setAmount]}>
            <TimerContext.Provider value={[time, setTime]}>
                <MovePlayerClickedProvider>
                    <RenderStationClickedProvider>
                        <TurnsProvider>
                            <ShownStationsProvider>
                                <TurnCard />
                            </ShownStationsProvider>
                        </TurnsProvider>
                    </RenderStationClickedProvider>
                </MovePlayerClickedProvider>
            </TimerContext.Provider>
        </ActionsContext.Provider>
    </RemoveVirusProvider>
    )
  }

const wrapperShallow = shallow(
    <RemoveVirusProvider>
        <ActionsProvider>
            <TimerProvider>
                <MovePlayerClickedProvider>
                    <RenderStationClickedProvider>
                        <TurnsProvider>
                        <ShownStationsProvider>
                                <TurnCard />
                            </ShownStationsProvider>
                        </TurnsProvider>
                    </RenderStationClickedProvider>
                </MovePlayerClickedProvider>
            </TimerProvider>
        </ActionsProvider>
    </RemoveVirusProvider>
)

const wrapperMount = mount(
    <RemoveVirusProvider>
        <ActionsProvider>
            <TimerProvider>
                <MovePlayerClickedProvider>
                    <RenderStationClickedProvider>
                        <TurnsProvider>
                        <ShownStationsProvider>
                                <TurnCard />
                            </ShownStationsProvider>
                        </TurnsProvider>
                    </RenderStationClickedProvider>
                </MovePlayerClickedProvider>
            </TimerProvider>
        </ActionsProvider>
    </RemoveVirusProvider>
)

describe('Testing the TurnCard component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

    it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <RemoveVirusProvider>
            <ActionsProvider>
                <TimerProvider>
                    <MovePlayerClickedProvider>
                        <RenderStationClickedProvider>
                            <TurnsProvider>
                            <ShownStationsProvider>
                                <TurnCard />
                            </ShownStationsProvider>
                            </TurnsProvider>
                        </RenderStationClickedProvider>
                    </MovePlayerClickedProvider>
                </TimerProvider>
            </ActionsProvider>
        </RemoveVirusProvider>, div
        )
    })

    it('should render with the correct context output', () => {
        expect(wrapperMount.find('h4.ActionsLeft').text()).toEqual('Actions left: 2')
        expect(wrapperMount.find('p.TimeSpent').text()).toEqual('0:0')
      })

    test('so ActionContext will set a value', () => {
      renderTurnCard(0)
      expect(screen.getByText('Actions left: 0')).toBeInTheDocument()
    })

    test('so TimerContext will set a value', () => {
        renderTurnCard(null, null, 5)
        expect(screen.getByTestId('TimeSpent-test')).toHaveTextContent('5')
      })
      
    it('should have 4 buttons with className Turn', () => {
        renderTurnCard()
          expect(wrapperMount.find('button').length).toEqual(4)
          expect(wrapperMount.find('button.Turn').length).toEqual(4)
    })

    it('should have an instance of the Infection component', () => {
        expect(wrapperMount.find('Infection').length).toEqual(1)
  })
})
