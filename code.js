// import './other-code.js';
const boardId='board';
const makeButton= (index)=> {
     const button = document.createElement("BUTTON");
    //add properties to button
    button.setAttribute('data-index',index);
    button.addEventListener("click", ()=>alert(index));
    const board = document.getElementById(boardId);
     board.append(button);
} ;


const makeBoard = ()=> {
    for (let index = 0; index < 9; index++) {
        makeButton(index);
    }

};
makeBoard();