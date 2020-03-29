const updateBoard = (state) => {
    //make button match board clicks
    //deactivate buttons that are already taken
    const buttons = document.querySelectorAll("button[data-index]");
    for(let x = 0; x < buttons.length; x++){
        const button = buttons[x];
        const index = button.getAttribute("data-index");
        const spaceValue = state.board[index];
        button.innerHTML = spaceValue;
    }
};

export default updateBoard;