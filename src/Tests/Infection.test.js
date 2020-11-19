import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import {  ActionsProvider } from '../components/Contexts/ActionsContext'
import {  ShownStationsProvider } from '../components/Contexts/ShownStationsContext'
import {  TurnsProvider } from '../components/Contexts/TurnsContext'
import Infection from '../components/Infection'

  const wrapperShallow = shallow(
    <ActionsProvider>
        <ShownStationsProvider>
            <TurnsProvider>
                <Infection />
            </TurnsProvider>
        </ShownStationsProvider>
    </ActionsProvider>
)

  describe('Testing the Infection component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

      it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
        <ActionsProvider>
            <ShownStationsProvider>
                <TurnsProvider>
                    <Infection />
                </TurnsProvider>
            </ShownStationsProvider>
        </ActionsProvider>, div
        )
       })
  })