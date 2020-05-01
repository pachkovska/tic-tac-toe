const initialState =  {
    player1: '',
    player2: '',
    field: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ],
    currentPlayer: 1
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case 'MOVE':
            if (state.currentPlayer === 1) return {...state, numberChange: state.numberChange + 1};
        case 'SAVE_NAME':
            if (!state.player1) {
                console.log(action.payload)
                return {...state, player1: action.payload}
            } else if (!state.player2) {
                console.log(action.payload)
                return {...state, player2: action.payload}
            }
        default:
            return state;
    }
}

export default reducer;