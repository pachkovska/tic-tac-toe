export const makeMove = (rowIndex, cellIndex) => ({type: 'MOVE', payload: {rowIndex: rowIndex, cellIndex: cellIndex} });

export const saveName = (name) => ({type: 'SAVE_NAME', payload: name});
