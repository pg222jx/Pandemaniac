import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import { RemoveVirusProvider } from '../components/Contexts/RemoveVirusContext'
import { ActionsProvider } from '../components/Contexts/ActionsContext'
import { PlayerRegionProvider } from '../components/Contexts/PlayerRegionContext'
import Virus from '../components/Virus'


const wrapperShallow = shallow(
    <RemoveVirusProvider>
        <ActionsProvider>
            <PlayerRegionProvider>
                <Virus virusid={'NA 1'}/>
            </PlayerRegionProvider>
        </ActionsProvider>
    </RemoveVirusProvider>
)


describe('testing the Virus component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

      it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <RemoveVirusProvider>
                <ActionsProvider>
                    <PlayerRegionProvider>
                        <Virus virusid={'NA 1'}/>
                    </PlayerRegionProvider>
                </ActionsProvider>
            </RemoveVirusProvider>, div
        )
       })
})
