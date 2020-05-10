export const makeMove = (rowIndex, cellIndex) => ({type: 'MOVE', payload: {rowIndex: rowIndex, cellIndex: cellIndex} });

export const saveName = (name) => ({type: 'SAVE_NAME', payload: name});

export const restartGame = (score) => ({type: 'RESTART_GAME', payload: score});

export const handleEmoji = (emojiUniCode) => ({type: 'CHOOSE_EMOJI', payload: emojiUniCode});

export const resetAll = () => ({type: 'RESET_ALL'});