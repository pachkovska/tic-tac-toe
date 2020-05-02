import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { saveName } from "../actions";
import { restartGame } from "../actions";

function Header(props) {

    const [name, setName] = useState('');

    const submitPlayerName = (name) => {
        props.saveName(name)
        setName('');
    }

    return (
        <div className="header">
            <h2>Welcome to the coolest Tic-Tac-Toe ever.</h2>
            {
                props.player1 !== '' && props.player2 !== ''
                    ? props.winner === null && <h3>{props.player1} and {props.player2} enjoy the game!</h3>
                    : <div>
                        <h3>Please enter name of the {props.player1 === '' ? 'first' : 'second'} player {props.player1 && 'to get started'}</h3>
                        <input type={"text"} value={name} onChange={e => setName(e.target.value)} placeholder={"Player's name"}/>
                        <button onClick={() => submitPlayerName(name)}>submit</button>
                    </div>
            }
            {
                props.winner  &&
                <div className={"gameOver"}>
                    {
                        props.winner === 'tie'
                            ? <h1> It's a tie! </h1>
                            : <h1>{props.winner} has won. Congratulations!</h1>
                    }
                    <button className={"restart-btn"} onClick={props.restartGame}>Restart Game</button>
                </div>
            }
        </div>
    );
}

const mapStateToProps = state => ({
    player1: state.player1,
    player2: state.player2,
    winner: state.winner
})

const mapDispatchToProps = dispatch => ({
    saveName: (name) => dispatch(saveName(name)),
    restartGame: () => dispatch(restartGame())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);