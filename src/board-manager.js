import StateManager from "./state-manager.js";
import getNextPlayer from "./get-next-player.js";

class BoardManager{

    updateSpace (spaceIndex){
        const {currentPlayer,board} = StateManager.getState();

        if (board[spaceIndex] === "x" || board[spaceIndex] === "o") {
            return;
        }

        const newBoard = [...board];
        newBoard[spaceIndex] = currentPlayer;

        StateManager.setState({
            currentPlayer: getNextPlayer(currentPlayer),
            board: newBoard,
        });
        //check for win conditions
    }
}
export default new BoardManager();