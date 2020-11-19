import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import { PlayerPositionProvider } from '../components/Contexts/PlayerPositionContext'
import { PlayerRegionProvider } from '../components/Contexts/PlayerRegionContext'
import StartGame from '../components/StartGame'

const wrapperShallow = shallow(
    <PlayerPositionProvider>
        <PlayerRegionProvider>
            <StartGame/>
        </PlayerRegionProvider>
    </PlayerPositionProvider>
)

const wrapperMount = mount(
    <PlayerPositionProvider>
        <PlayerRegionProvider>
            <StartGame />
        </PlayerRegionProvider>
    </PlayerPositionProvider>
)

  describe('Testing the StartGame component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })
      
    it('should have 1 button', () => {
          expect(wrapperMount.find('button').length).toEqual(1)
    })

    test('that the button is set to hidden after click', async () => {
        const timer = jest.fn()
        
        const { getByText, findByText } = render(
            <PlayerPositionProvider>
                <PlayerRegionProvider>
                    <StartGame timer={() => {timer()}}/>
                </PlayerRegionProvider>
            </PlayerPositionProvider>)

        const button = getByText('Start Game!')
        expect(button).toBeVisible()
        fireEvent.click(button)
        const buttonAfter = await findByText('Start Game!')
        expect(buttonAfter).not.toBeVisible()
    })
  })