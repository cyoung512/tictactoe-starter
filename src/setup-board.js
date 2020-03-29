import BoardManager from "./board-manager.js"
const boardId='board';

const onButtonClick = (event) => {
    const button = event.target;
    const index = button.getAttribute("data-index");
    BoardManager.updateSpace(index);
};

const makeButton= (index)=> {
    const button = document.createElement("BUTTON");
    //add properties to button
    button.setAttribute('data-index',index);
    button.addEventListener("click", onButtonClick);
    const board = document.getElementById(boardId);
    board.append(button);
} ;


const setupBoard = ()=> {
    for (let index = 0; index < 9; index++) {
        makeButton(index);
    }

};
export default setupBoard;