import React from 'react';
import {connect} from 'react-redux';
import {makeMove} from "../actions";

function GameBoard(props) {

    const makeMove = (rowIndex, cellIndex) => {
        props.makeMove(rowIndex, cellIndex);
    }

    return (
        <div className={"gameContainer"}>
            <div className="gameBoard">
                {props.player1 && props.player2 &&
                props.field.map((row, rowIndex) => (
                    <div className={"row"}>
                        {row.map((cell, cellIndex) => (
                            <div className={"cell"}
                                 onClick={() => makeMove(rowIndex, cellIndex)}>{cell === 'X' ? String.fromCodePoint(parseInt(props.player1Icon.toString(), 16)) : cell === 'O' ? String.fromCodePoint(parseInt(props.player2Icon.toString(), 16)) : null}</div>
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
    player1Icon: state.player1Icon,
    player2Icon: state.player2Icon,
    field: state.field,
    winCombo: state.winCombo
});

const mapDispatchToProps = dispatch => ({
    makeMove: (rowIndex, cellIndex) => dispatch(makeMove(rowIndex, cellIndex))
});

export default connect(mapStateToProps, mapDispatchToProps)(GameBoard);

