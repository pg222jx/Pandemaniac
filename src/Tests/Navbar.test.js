import React from 'react'
import Navbar from '../components/Navbar'
import { render, fireEvent, waitForElement } from '@testing-library/react'
import { shallow } from 'enzyme'



describe('Testing the navbar component', () => {

    it('should match the snapshot', () => {
        const wrapperShallow = shallow(<Navbar/>)
        expect(wrapperShallow.html()).toMatchSnapshot()
    })

    it('should show the dropdown menu for the rules on click', () => {
        render(<Navbar/>)
        const rules = document.querySelector('#rules')
        const title = document.querySelector('#rulesTitle')
        expect(title).toBeNull()
        fireEvent.click(rules)
        waitForElement(() => title).then((el => {
            expect(el).toBeInTheDocument()
        }))
     })

     it('should show the dropdown menu for the controls on click', () => {
        render(<Navbar/>)
        const controls = document.querySelector('#controls')
        const title = document.querySelector('#controlsTitle')
        expect(title).toBeNull()
        fireEvent.click(controls)
        waitForElement(() => title).then((el => {
            expect(el).toBeInTheDocument()
        }))
     })

     it('should show the dropdown menu for the highscore on click', () => {
        render(<Navbar/>)
        const highscore = document.querySelector('#highscore_title')
        const title = document.querySelector('#scoreTitle')
        expect(title).toBeNull()
        fireEvent.click(highscore)
        waitForElement(() => title).then((el => {
            expect(el).toBeInTheDocument()
        }))
     })
})