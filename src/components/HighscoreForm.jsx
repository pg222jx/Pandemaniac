/**
 * Sets the highscores to firebase.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useState, useContext } from 'react'
import firebase from '../firebase.js'
import { TurnsContext } from './Contexts/TurnsContext'
import { TimerContext } from './Contexts/TimerContext'


const HighscoreForm = () => {
    const [turns, setTurns] = useContext(TurnsContext)// eslint-disable-line no-unused-vars
    const [time, setTime] = useContext(TimerContext)// eslint-disable-line no-unused-vars
    const [nickname, setNickname] = useState('')

  /**
  * Checks for harmful characters.
  * 
  * @returns {boolean} If nickname contains possible harmful characters.
  */
    const isValid = () => {
        const notValid = ['<', '>', '/', '#', '%', '&', '!', '=', '"', ';']
        for (let i = 0; i < notValid.length; i++) {
            if (nickname.includes(notValid[i])) {
                return false
            } 
        }
        return true
    }

    /**
    * Checks Nickname input has correct value.
    */
    const submitHighscore = (e) => {
        e.preventDefault()
        const trimmed = nickname.replace(/\s+/g, '').length
        let nameInfo = document.querySelector('.name_info')
        if (trimmed < 3) {
            nameInfo.textContent = 'Nickname needs to be at least 3 characters.'
        } else if (trimmed > 10) {
            nameInfo.textContent = 'Nickname needs to be egual or less than 10 characters.'
        } else if (isValid() === false) {
            nameInfo.textContent = 'Nickname can\'t contain special characters'
        } else {
            firebase.firestore().collection('highscores').add({
                name: nickname,
                turns: turns,
                time: time
            })
            document.querySelector('.score_info').textContent = 'Now see if you made the highscore list!'
            document.querySelector('.highscore_form').remove()
        }
    }
    
    return (
        <div className="highscore_form_container">
        <form className="highscore_form" onSubmit={submitHighscore}>
            <label>Please enter a nickname for the highscore list:</label><br/><br/>
            <input type="text" className="enterNickname" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Enter nickname"/>
            <p className="name_info" data-testid="name_info_test"></p>
            <input data-testid="submit_test" className="submit" type="submit" value="Submit"/>
        </form>
        <p className="score_info" data-testid="score_info_test"></p>
        </div>
    )
}

export default HighscoreForm

