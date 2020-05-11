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
                            <div className={'cell'}
                                 onClick={() => makeMove(rowIndex, cellIndex)}>{cell === 'X' ? String.fromCodePoint(parseInt(props.player1Icon, 16)) : cell === 'O' ? String.fromCodePoint(parseInt(props.player2Icon, 16)) : null}<span className={props.winCombo.length === 3 && props.winCombo !== 'tie' &&`${winDirection(rowIndex, cellIndex, props.winCombo)}`}></span></div>
                        ))
                        }
                    </div>
                ))
                }
            </div>
        </div>
    );
}


const winDirection = (rowIndex, cellIndex, winCombo) => {
    if (winCombo.length === 3 && winCombo !== 'tie') {
        const possibleWins = {
            row0: [[0, 0], [0, 1], [0, 2]],
            row1: [[1, 0], [1, 1], [1, 2]],
            row2: [[2, 0], [2, 1], [2, 2]],
            column0 : [[0, 0], [1, 0], [2, 0]],
            column1 : [[0, 1], [1, 1], [2, 1]],
            column2 : [[0, 2], [1, 2], [2, 2]],
            diagonal0 : [[0, 0], [1, 1], [2, 2]],
            diagonal2 : [[0, 2], [1, 1], [2, 0]],

        }
        if (cellInWinCombo(rowIndex, cellIndex, winCombo) && (JSON.stringify(winCombo) === JSON.stringify(possibleWins.row0) || JSON.stringify(winCombo) === JSON.stringify(possibleWins.row1) || JSON.stringify(winCombo) === JSON.stringify(possibleWins.row2))) {
            console.log("cell in wincombo works: ", cellInWinCombo(rowIndex, cellIndex, winCombo))
            console.log("json.stringify comparison works: ", JSON.stringify(winCombo) === JSON.stringify(possibleWins.row0))
            return 'win-row';
        }
        if (cellInWinCombo(rowIndex, cellIndex, winCombo) && (JSON.stringify(winCombo) === JSON.stringify(possibleWins.column0) || JSON.stringify(winCombo) === JSON.stringify(possibleWins.column1) || JSON.stringify(winCombo) === JSON.stringify(possibleWins.column2))) return 'win-column';
        if (cellInWinCombo(rowIndex, cellIndex, winCombo) && JSON.stringify(winCombo) === JSON.stringify(possibleWins.diagonal0)) return 'win-diagonal-right';
        if (cellInWinCombo(rowIndex, cellIndex, winCombo) && JSON.stringify(winCombo) === JSON.stringify(possibleWins.diagonal2)) return 'win-diagonal-left';
    }
    return null;
}

const cellInWinCombo = (rowIndex, cellIndex, winCombo) => {
        for (let i = 0; i < 3; i++) {
            if (winCombo[i][0] === rowIndex && winCombo[i][1] === cellIndex) return true;
        }
        return false;
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

