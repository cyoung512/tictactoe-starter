const getNextPlayer = (currentPlayer) => {
    if (currentPlayer === "x") {
        return "o";
    }
    return "x";
};
export default getNextPlayer;