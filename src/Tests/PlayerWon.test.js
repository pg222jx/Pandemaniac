import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { TurnsProvider } from '../components/Contexts/TurnsContext'
import { TimerProvider } from '../components/Contexts/TimerContext'
import PlayerWon from '../components/PlayerWon'


const wrapperShallow = shallow(
    <TurnsProvider>
        <TimerProvider>
            <PlayerWon/>
        </TimerProvider>
    </TurnsProvider>
)


describe('testing the PlayerWon component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

      it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TurnsProvider>
                <TimerProvider>
                    <PlayerWon/>
                </TimerProvider>
            </TurnsProvider>, div
        )
       })
})
