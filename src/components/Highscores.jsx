/**
 * Gets the highscores from firbase.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, {useState, useEffect} from 'react'
import firebase from '../firebase.js'

/**
 * Using UseEffect hook to get data from firestore and sort them in accending order on Turns and then Time.
 * 
 * @returns {array} - The new value of savedScores state.
 */
function useScores() {
    const [savedScores, setScores] = useState([])
    useEffect(() => {
        firebase
            .firestore()
            .collection('highscores')
            .orderBy('turns')
            .limit(10)
            .onSnapshot((snapshot) => {
            const newScores = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
            newScores
                .sort((a, b) => a.time - b.time)
                .sort((a, b) => a.turns - b.turns)
            setScores(newScores)
        })
    }, ([]))
    return savedScores
}

const Highscores = () => {
    /**
    * Converts number to minutes and seconds.
    * 
    * @returns {string} - Representing the time in minutes and seconds.
    */
    const convertTime = (time) => {
        const totalSeconds = time
        const minutes = Math.floor(totalSeconds/60)
        const seconds = totalSeconds - minutes * 60
        return minutes + ':' + seconds
    }
    
    const highscores = useScores()

    return (
        <React.Fragment>
            <ol className="highscore_list">
            <hr/>
                {highscores.map((player) =>
                    <li key={player.id}>
                        <h4>{player.name}</h4>
                        <p>Turns: {player.turns}</p>
                        <p>Time: {convertTime(player.time)}</p>
                        <hr/>
                </li>)}
            </ol>
        </React.Fragment>
    )
}

export default Highscores

