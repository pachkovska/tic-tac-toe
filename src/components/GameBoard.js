import React, { useState } from 'react';
import '../App.css';
import { connect } from 'react-redux';

function GameBoard(props) {

    return (
        <div className="gameBoard">
            {
                props.field.map(row => (
                    <div className={"row"}>
                        {row.map(cell => (
                            <div className={"cell"}>{cell} - </div>
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
})

export default connect(mapStateToProps)(GameBoard);

