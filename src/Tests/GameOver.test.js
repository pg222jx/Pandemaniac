import React from 'react'
import { shallow } from 'enzyme'
import GameOver from '../components/GameOver'

const wrapperShallow = shallow(<GameOver/>)


describe('testing the GameOver component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })
})
