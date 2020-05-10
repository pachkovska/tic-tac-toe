import React from 'react';
import {connect} from 'react-redux';
import { resetAll } from "../actions";


function ScoreBoard(props) {

    const handleResetAll  = () => {
        props.resetAll();
    }

    return (

                <div className={"scoreContainer"}>
                    {
                        props.player1 && props.player2 &&
                            <>
                            <div className={"showScore"}>
                                <h4>Score</h4>
                                <div><span className={"scoreBoard-emoji"}>{props.player1Icon && String.fromCodePoint(parseInt(props.player1Icon.toString(), 16))}</span>{props.player1}</div>
                                <span>{props.score.player1}</span>
                                <div><span className={"scoreBoard-emoji"}>{props.player2Icon && String.fromCodePoint(parseInt(props.player2Icon.toString(), 16))}</span>{props.player2}</div>
                                <span>{props.score.player2}</span>
                            </div>
                            <button className={"resetAll-btn"} onClick={handleResetAll}>Reset All</button>
                            </>
                    }
                </div>
    );
}

const mapStateToProps = state => ({
    player1: state.player1,
    player2: state.player2,
    player1Icon: state.player1Icon,
    player2Icon: state.player2Icon,
    score: state.score
});

const mapDispatchToProps = dispatch => ({
    resetAll: () => dispatch(resetAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoard);

