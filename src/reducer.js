const initialState = {
    player1: '',
    player2: '',
    player1Icon: '',
    player2Icon: '',
    field: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 1,
    winner: null,
    score: {player1: 0, player2: 0},
    winCombo: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MOVE':
            const updatedField = [...state.field];
            if (state.currentPlayer === 1 && updatedField[action.payload.rowIndex][action.payload.cellIndex] === null) {
                updatedField[action.payload.rowIndex][action.payload.cellIndex] = 'X';
                return {
                    ...state,
                    field: [...updatedField],
                    winner: checkWin(updatedField, 'X') === 'tie' ? 'tie' : checkWin(updatedField, 'X') ? state.player1 : null,
                    currentPlayer: 2,
                    winCombo: checkWin(updatedField, 'X') !== 'tie' && checkWin(updatedField, 'X') ? checkWin(updatedField, 'X') : []
                    }
            } else if (state.currentPlayer === 2 && updatedField[action.payload.rowIndex][action.payload.cellIndex] === null) {
                updatedField[action.payload.rowIndex][action.payload.cellIndex] = 'O';
                return {
                    ...state,
                    field: [...updatedField],
                    winner: checkWin(updatedField, 'O') === 'tie' ? 'tie' : checkWin(updatedField, 'O') ? state.player2 : null,
                    currentPlayer: 1,
                    winCombo: checkWin(updatedField, 'O') !== 'tie' && checkWin(updatedField, 'O') ? checkWin(updatedField, 'O') : []
                };
            }
            break;
        case 'SAVE_NAME':
            if (!state.player1) {
                return {
                    ...state,
                    player1: action.payload
                }
            } else if (!state.player2) {
                return {
                    ...state,
                    player2: action.payload
                }
            }
            break;
        case 'CHOOSE_EMOJI':
            if (state.player1 && !state.player1Icon) {
                return {
                    ...state,
                    player1Icon: action.payload
                }
            } else if (state.player2 && !state.player2Icon) {
                return {
                    ...state,
                    player2Icon: action.payload
                }
            }
            break;
        case 'RESTART_GAME':
            if (state.winner === state.player1) {
                const updateScore = state.score.player1 + 1;
                console.log(state.winner === state.player1)
                console.log(state.player1)
                return {
                    ...state,
                    field: [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                    ],
                    currentPlayer: 1,
                    winner: null,
                    score: {...state.score, player1: updateScore}, winCombo: []
                }
            } else if (state.winner === state.player2) {
                const updateScore = state.score.player2 + 1;
                return {
                    ...state,
                    field: [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                    ],
                    currentPlayer: 1,
                    winner: null,
                    score: {...state.score, player2: updateScore}, winCombo: []
                }
            } else {
                return {
                    ...state,
                    field: [
                        [null, null, null],
                        [null, null, null],
                        [null, null, null]
                    ],
                    currentPlayer: 1,
                    winner: null,
                    winCombo: []
                }
            }
            break;
        case 'RESET_ALL':
            return {
                player1: '',
                player2: '',
                player1Icon: '',
                player2Icon: '',
                field: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ],
                currentPlayer: 1,
                winner: null,
                score: {player1: 0, player2: 0}
            }
        default:
            return state;
    }
}

const checkWin = (fieldToCheck, player) => {
    if (fieldToCheck[1][1] === player) { //check diagonal
        if (fieldToCheck[0][0] === player && fieldToCheck[2][2] === player) return [[0, 0], [1, 1], [2, 2]];
        if (fieldToCheck[0][2] === player && fieldToCheck[2][0] === player) return [[0, 2], [1, 1], [2, 0]];
    }
    for (let i = 0; i < 3; i++) {
        if (fieldToCheck[i].every(cell => cell === player)) return [[i, 0], [i, 1], [i, 2]]; // check rows
        if (fieldToCheck.every(row => row[i] === player)) return [[0, i], [1, i], [2, i]]; // check columns
    }
    if (fieldToCheck.every(row => row.every(cell => cell))) return 'tie';
    return false;
}

export default reducer;