import React from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { makeMove } from "../actions";

function GameBoard(props) {

    const makeMove = (rowIndex, cellIndex) => {
        props.makeMove(rowIndex, cellIndex);
    }

    return (
        <div className={"gameContainer"}>
            <div className="gameBoard">
                {   props.player1 && props.player2 &&
                    props.field.map((row, rowIndex) => (
                        <div className={"row"}>
                            {row.map((cell, cellIndex) => (
                                <div className={"cell"} onClick={() => makeMove(rowIndex, cellIndex)} style={{color: cell === 'X' ? "#31859c" : "#9bbb59"}}>{cell}</div>
                            ))
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    player1: state.player1,
    player2: state.player2,
    field: state.field
});

const mapDispatchToProps = dispatch => ({
    makeMove: (rowIndex, cellIndex) => dispatch(makeMove(rowIndex, cellIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

