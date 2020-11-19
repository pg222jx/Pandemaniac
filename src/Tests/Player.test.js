import React from 'react'
import ReactDOM from 'react-dom'
import { render, screen } from '@testing-library/react';
import { shallow, mount } from 'enzyme'
import  { PlayerPositionContext, PlayerPositionProvider } from '../components/Contexts/PlayerPositionContext'
import Player from '../components/Player'

function renderPlayer(position, setPosition) {
  return render(
    <PlayerPositionContext.Provider value={[position, setPosition]}>
      <Player />
    </PlayerPositionContext.Provider>
  )
}

const wrapperShallow = shallow(
        <PlayerPositionProvider>
            <Player />
        </PlayerPositionProvider>
)

const wrapperMount = mount(
        <PlayerPositionProvider>
            <Player />
        </PlayerPositionProvider>
)

  describe('Testing the Player component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

    it('should render without crashing', () => {
      const div = document.createElement('div')
      ReactDOM.render(
        <PlayerPositionProvider>
          <Player />
        </PlayerPositionProvider>, div
      )
     })

    test('so PlayerContext will set position', () => {
      const position = {bottom: '380px', left: '120px'}
      renderPlayer(position)
      expect(screen.getByAltText('The player').style.bottom).toEqual('380px')
      expect(screen.getByAltText('The player').style.left).toEqual('120px')
    })
        
    it('should have 1 img', () => {
      expect(wrapperMount.find('img').length).toEqual(1)
    })
  })