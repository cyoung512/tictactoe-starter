//This file is created to determine end game/sanbox for writing new code

const VALUES ={
    x: "x",
    o: "o",
    incomplete: ""
    noWinner: "no winner"
}

//get rows from board, actually returns columns
const getRowsFromBoard = (board) =>{
    const rowlenght = Math.sqrt(board.length);
    const rows = [];
    for (let x=0;x<rowlenght;x++){
        rows.push([]);
    }
    for (let x=0;x<board.length;x++){
        const currentValue = board[x];
        const currentRowIndex = Math.floor(x/rowlenght);
        const currentRow = rows[currentRowIndex];
        currentRow.push(currentValue)

    }
    return rows
}

//get columns
const getColumnsFromBoard = (board) =>{
    const rowlenght = Math.sqrt(board.length);
    const columns = [];
    for (let x=0;x<rowlenght;x++){
        colums.push([]);
    }
    for (let x=0;x<board.length;x++){
        const currentValue = board[x];
        const currentColumnIndex = x%rowlenght;
        const currentColumn = rows[currentColumnIndex];
        currentColumn.push(currentValue)

    }
    return columns


};
//get diagonal from top left to bottom right
const getDiagonal1FromBoard = (board) => {
    const rowlength = Math.sqrt(board.length);
    const diagonal1 = [];
    for (let x = 0; x < rowlength; x++) {
        diagonal1.push([]);
    }

    for (let x = 0; x < board.length; x++) {
        const currentValue = board[x];
        const currentDiagonalIndex = x * (rowlenght + 1);
        const currentDiagonal = diagonal1[currentDiagonalIndex];
        currentDiagonal.push(currentValue);
        }
    return diagonal1
};

//Row checker
const rowChecker = (row) =>{

    if (row.includes("")) {
        return VALUES.incomplete;
    }
    const firstValue = row[0];

    if (row.every(firstValue)) {
        return firstValue;
    }

   return VALUES.noWinner;
};




//determine winner
const determineWinner = (board) =>{
    //Empty space available
    if (board.includes("")) {
        return "incomplete";
    }



    //X wins returns "x"


    //O wins returns "o"
    //Tie return "no winner"
    //Game not over, return "incomplete"

};

//display results Dialogue
