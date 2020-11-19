import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import Highscores from '../components/Highscores'

  describe('Testing the Highscores component', () => {
 
    it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(<Highscores />, div)
    })

    it('should show 10 or less highscores.', () => {
        render(<Highscores />)
        const li = document.querySelectorAll('li')
        let counter = 0
        for (let i = 0; i < li.length; i++) {
            counter++
        }
        expect(counter).toBeLessThan(11)
    })

    test('so the list is sorted in ascending order of turns', () => {
        render(<Highscores />)
        const li = document.querySelectorAll('li')
        let counter1;
        let counter2 = 0
        for (let i = 0; i < li.length; i++) {
            counter1 = Number(i.children[1].text.slice(6))
            expect(counter1).toBeLessThan(counter2)
            counter2 = counter1
        }
    })
  })