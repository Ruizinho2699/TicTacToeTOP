function Gameboard() {

let board = [0,0,0,0,0,0,0,0,0]

const players = (player,icon) =>{
   return player,icon;
}

let player1 = players("Player1","X")
let player2 = players("Player2","O")



return {board,player1,player2};

}

console.log(Gameboard())