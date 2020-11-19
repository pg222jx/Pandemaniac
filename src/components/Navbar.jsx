/**
 * The navigation bar.
 *
 * @author Pernilla Göth
 * @version 1.0.0
 */


import React, { Component } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Highscores from './Highscores'

class Navbar extends Component {

    render() { 
        return ( 
            <div className="navbar">
                <Dropdown>
                    <Dropdown.Toggle id="rules" className="navLinks">
                        Rules
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropDown" id="dropRules">
                        <h2 className="dropTitle" id="rulesTitle">Rules for Pandemaniac</h2>
                        <h4>Start the game:</h4>
                        <ul>
                            <li>Click the big yellow button.</li>
                            <li>You will start in a random continent.</li>
                            <li>Two continents gets infected with the virus!</li>
                        </ul>
                        <h4>Each round will go like this:</h4>
                        <ul>
                            <li>You spend 2 actions:</li>
                            <ul>
                                <li>Move one step</li>
                                <li>Build a science centre</li>
                                <li>Remove infection</li>
                            </ul>
                            <li>You click the "Done with turn!" button.</li>
                            <li>Another continent will be infected with the virus.</li>
                        </ul>

                        <h4>Game logic:</h4>
                        <ul>
                            <li> It is ok to spend your actions in any order you want.<br/>
                            You Have to spend at least one action every round.</li>
                            <li>To build a science centre costs 2 actions, <br/>
                            the other options cost 1 action each.</li>
                            <li>You can only build a science centre or remove infection where you stand.</li>
                            <li>You can only move a player to its a continent next to its position.</li>
                            <li>When a continent has a science centre on it, it will no longer get any new infections.</li>
                            <li>The risk of a virus spawning is decreased with every built science centre <br/>
                            due to their spread of the vaccine.</li>
                            <li>As soon as a continent gets its fourth virus you loose the game.</li>
                            <li>When you have built a science centre in every continent you have won the game!</li>
                        </ul>

                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle id="controls" className="navLinks">
                        Controls
                    </Dropdown.Toggle>
            
                    <Dropdown.Menu className="dropDown" id="dropControls">
                        <h2 id="controlsTitle" className="dropTitle">Controls</h2>
                        <h4>Players turn:</h4>
                        <p>When the game starts a box with 3 choices will be shown.</p>
                        <ul>
                                <li>Move one step</li>
                                <li>Build a science centre</li>
                                <li>Remove infection</li>
                        </ul>
                        <p>To be able to do any of the actions you first need to click on the action you want to do. <br/>
                         To move player or build a science centre you then need to click on a continent on the map.<br/>
                         To remove infection you need to click on the virus you want to remove.<br/>
                         After you feel ready with this turn click "Done with turn".<br/>
                         <strong>Remember:</strong> You can only build a science centre or remove an infection if the player stands<br/> on the same place.</p>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown>
                    <Dropdown.Toggle className="navLinks" id="highscore_title">
                        Highscore
                    </Dropdown.Toggle>
            
                    <Dropdown.Menu className="dropDown" id="dropScores">
                        <h2 className="dropTitle" id="scoreTitle">Highscore</h2>
                        <Highscores></Highscores>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
         )
    }
}
 
export default Navbar