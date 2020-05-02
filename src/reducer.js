const initialState = {
    player1: '',
    player2: '',
    field: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 1,
    winner: null
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MOVE':
            const updatedField = [...state.field];
            if (state.currentPlayer === 1) {
                updatedField[action.payload.rowIndex][action.payload.cellIndex] = 'X';
                return {
                    ...state,
                    field: [...updatedField],
                    winner: checkWin(updatedField, 'X') === 'tie' ? 'tie' : checkWin(updatedField, 'X') ? state.player1 : null,
                    currentPlayer: 2
                    }
            } else if (state.currentPlayer === 2) {
                updatedField[action.payload.rowIndex][action.payload.cellIndex] = 'O';
                return {
                    ...state,
                    field: [...updatedField],
                    winner: checkWin(updatedField, 'O') === 'tie' ? 'tie' : checkWin(updatedField, 'O') ? state.player2 : null,
                    currentPlayer: 1
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
        case 'RESTART_GAME':
            return {
                ...state,
                field: [
                    [null, null, null],
                    [null, null, null],
                    [null, null, null]
                ],
                currentPlayer: 1,
                winner: null
            }
        default:
            return state;
    }
}

const checkWin = (fieldToCheck, player) => {
    if (fieldToCheck[1][1] === player) { //check diagonal
        if (fieldToCheck[0][0] === player && fieldToCheck[2][2] === player) return true;
        if (fieldToCheck[0][2] === player && fieldToCheck[2][0] === player) return true;
    }
    for (let i = 0; i < 3; i++) {
        if (fieldToCheck[i].every(cell => cell === player)) return true; // check rows
        if (fieldToCheck.every(row => row[i] === player)) return true; // check columns
    }
    if (fieldToCheck.every(row => row.every(cell => cell))) return 'tie';
    return false;
}

export default reducer;