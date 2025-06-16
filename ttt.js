function Gameboard (){
    const columns = 3;
    const rows = 3;
    const board = [];
    

    for(let i=0;i<rows;i++){
        board[i]=[];
        for(let j=0;j<columns;j++){
            board[i].push(0);
        }
    }

   const checkSpace = (row,cell) =>{
      if(board[row][cell]===0){
        let stat = "free";
        return stat;
      };
      if(board[row][cell] === "X" || board[row][cell] === "O" ){
        let stat = "not free";
        return stat;
      }
   }
console.log(board)
}
Gameboard()




  