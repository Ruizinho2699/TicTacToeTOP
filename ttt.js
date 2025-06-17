function Gameboard() {

let board = ['','','','','','','','','']

const players = (player,icon) =>{
   return player,icon;
}

let player1 = players("Player1","X")
let player2 = players("Player2","O")

return {board,player1,player2};

}

function Playing(){
  const x =Gameboard().board
  const player1 = Gameboard().player1
  const player2 = Gameboard().player2
   const check = (tray,player,cell) =>{
    if(tray[cell]==='' && player === 'X'){
    tray.splice(cell,1,player);
   }
   if(tray[cell]==='' && player === 'O'){
    tray.splice(cell,1,player);
   }
  else if(tray[cell]==="X" || tray[cell]==="O"){
    console.log("not free");
  }};

check(x,player1,2)
check(x,player2,1)
console.log(x)

}
Playing()
