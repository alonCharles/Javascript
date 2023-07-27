
let board = [
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "B", "W", "", "", ""],
    ["", "", "", "W", "B", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
  ];
  
  let currentPlayer = "B";
  
  const boardElement = document.querySelector(".board");
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cellElement = document.createElement("div");
      cellElement.classList.add("cell");
      if (board[i][j] === "B") {
        cellElement.classList.add("black");
      } else if (board[i][j] === "W") {
        cellElement.classList.add("white");
      }
  
      cellElement.addEventListener("click", function () {
        if (isValidMove(i, j, "B")) {
          board[i][j] = "B";
          flipTiles(i, j, "B");
          updateBoard();
  
          setTimeout(() => {
            aiMove();
          }, (Math.floor(Math.random() * 8) + 2) * 100);
  
          const randomRow = Math.floor(Math.random() * 8);
          const randomCol = Math.floor(Math.random() * 8);
  
          if (isValidMove(randomRow, randomCol, "W")) {
            board[randomRow][randomCol] = "W";
            flipTiles(randomRow, randomCol, "W");
            updateBoard();
          }
        }
      });
  
      boardElement.appendChild(cellElement);
    }
  }