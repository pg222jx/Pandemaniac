/**
 * Representing the 'Game over' status.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { useEffect } from 'react'

const GameOver = (props) => {
    /**
    * Refreshes the page on Try Again.
    */
    const refreshPage = () => {
        window.location.reload(false)
    }

    /**
    * UseEffect hook to stop timer and hide Game components on render. 
    */
    useEffect(() => {
        props.onRender()
        props.stopTimer()
    })

    /**
    * Checks which virus was rendered to cause Game Over. 
    */
    const checkVirus = () => {
        switch (props.virus) {
            case 'NA':
                return 'North America'
            case 'SA':
                return 'South America'
            case 'EU':
                return 'Europe'
            case 'AF':
                return 'Africa'
            case 'AS':
                return 'Asia'
            case 'AU':
                return 'Australia'
            default:
        }
    }

    return (
        <div className="gameOver">
            <h3 id="gameOvertext">Game Over!</h3>
            <p data-testid="information_test">A fourth virus spawned in {checkVirus()}!</p><br/>
            <button className="tryAgain" onClick={refreshPage}>Try again?</button>
        </div>
    )
}
 
export default GameOver