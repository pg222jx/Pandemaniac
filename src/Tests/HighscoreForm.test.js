import React from 'react'
import ReactDOM from 'react-dom'
import { render, fireEvent } from '@testing-library/react'
import { shallow } from 'enzyme'
import { TurnsProvider } from '../components/Contexts/TurnsContext'
import { TimerProvider } from '../components/Contexts/TimerContext'
import HighscoreForm from '../components/HighscoreForm'

  const wrapperShallow = shallow(
        <TimerProvider>
            <TurnsProvider>
                <HighscoreForm />
            </TurnsProvider>
        </TimerProvider>
)

  describe('Testing the HighscoreForm component', () => {
    it('should match the snapshot', () => {
        expect(wrapperShallow.html()).toMatchSnapshot()
      })

    it('should render without crashing', () => {
        const div = document.createElement('div')
        ReactDOM.render(
            <TimerProvider>
                <TurnsProvider>
                    <HighscoreForm />
                </TurnsProvider>
            </TimerProvider>, div
        )
    })

    test('so the player are informed when entering a too short nickname.', () => {
        const { getByTestId } = render(
            <TimerProvider>
                <TurnsProvider>
                    <HighscoreForm />
                </TurnsProvider>
            </TimerProvider>
        )

        const submitButton = getByTestId('submit_test')
        const pTag = getByTestId('name_info_test')

        fireEvent.click(submitButton)
        expect(pTag.textContent).toBe('Nickname needs to be at least 3 characters.')
    })

    test('so the input value changes.', () => {
        const { getByPlaceholderText } = render(
            <TimerProvider>
                <TurnsProvider>
                    <HighscoreForm />
                </TurnsProvider>
            </TimerProvider>
        )
        const textForm = getByPlaceholderText('Enter nickname')

        fireEvent.change(textForm, { target: { value: 'qwertyuiopasdfghj' } })
        expect(textForm.value).toBe('qwertyuiopasdfghj')
    })

    test('so the player are informed when entering a too long nickname.', () => {
        const { getByTestId, getByPlaceholderText } = render(
            <TimerProvider>
                <TurnsProvider>
                    <HighscoreForm />
                </TurnsProvider>
            </TimerProvider>
        )

        const submitButton = getByTestId('submit_test')
        const pTag = getByTestId('name_info_test')
        const textForm = getByPlaceholderText('Enter nickname')

        fireEvent.change(textForm, { target: { value: 'qwertyuiopasdfghj' } })
        fireEvent.click(submitButton)
        expect(pTag.textContent).toBe('Nickname needs to be egual or less than 10 characters.')
    })

    test('so the player are informed when entering a correct nickname.', async () => {
        const { getByTestId, getByPlaceholderText } = render(
            <TimerProvider>
                <TurnsProvider>
                    <HighscoreForm />
                </TurnsProvider>
            </TimerProvider>
        )

        const submitButton = getByTestId('submit_test')
        const pTag = getByTestId('score_info_test')
        const textForm = getByPlaceholderText('Enter nickname')

        fireEvent.change(textForm, { target: { value: 'qwertyuiop' } })
        fireEvent.click(submitButton)
        
        await expect(pTag.textContent).toBe('Now see if you made the highscore list!')
    })

    test('so the form is removed if player enters correct nickname.', () => {
        const { getByTestId, getByPlaceholderText } = render(
            <TimerProvider>
                <TurnsProvider>
                    <HighscoreForm />
                </TurnsProvider>
            </TimerProvider>
        )

        let submitButton = getByTestId('submit_test')
        let textForm = getByPlaceholderText('Enter nickname')

        fireEvent.change(textForm, { target: { value: 'qwertyuiop' } })
        fireEvent.click(submitButton)

        expect(submitButton).not.toBeInTheDocument()
        expect(textForm).not.toBeInTheDocument()
    })
  })