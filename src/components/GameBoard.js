import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { makeMove } from "../actions";

function GameBoard(props) {

    const makeMove = (rowIndex, cellIndex) => {
        props.makeMove(rowIndex, cellIndex);
    }

    return (
        <div className="gameBoard">
            {
                props.field.map((row, rowIndex) => (
                    <div className={"row"}>
                        {row.map((cell, cellIndex) => (
                            <div className={"cell"} onClick={() => makeMove(rowIndex, cellIndex)}>{cell}</div>
                        ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

const mapStateToProps = state => ({
    player1: state.player1,
    player2: state.player2,
    field: state.field,
    currentPlayer: state.currentPlayer,
});

const mapDispatchToProps = dispatch => ({
    makeMove: (rowIndex, cellIndex) => dispatch(makeMove(rowIndex, cellIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

