import setupBoard from "./setup-board.js";
import StateManager from "./state-manager.js"
import updateBoard from "./update-board.js";
setupBoard();
StateManager.subscribe(updateBoard);


