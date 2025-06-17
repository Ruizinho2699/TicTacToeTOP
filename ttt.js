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


console.log(x)
const flow = () =>{
  let turn = player1;
  if(turn = player1){
  moveOne = prompt("Player 1, where do you wanna play?")
  check(x,player1,moveOne)}
  if(x[0]=="X" && x[1]=="X" && x[2]=="X"||
    x[0]=="X" && x[3]=="X" && x[6]=="X"||
    x[2]=="X" && x[5]=="X" && x[8]=="X"||
    x[6]=="X" && x[7]=="X" && x[8]=="X"||
    x[1]=="X" && x[4]=="X" && x[7]=="X"||
    x[3]=="X" && x[4]=="X" && x[5]=="X"||
    x[0]=="X" && x[4]=="X" && x[8]=="X"||
    x[6]=="X" && x[4]=="X" && x[2]=="X"){
    console.log("Player 1 wins!")
    return;
  }
  else if(!x.includes('')){
    console.log("Tie")
    return
  }
  if(turn = player2){
  moveTwo = prompt("Player 2, where do you wanna play?")
  check(x,player2,moveTwo)}
  if(x[0]=="O" && x[1]=="O" && x[2]=="O"||
     x[0]=="O" && x[3]=="O" && x[6]=="O"||
     x[2]=="O" && x[5]=="O" && x[8]=="O"||
     x[6]=="O" && x[7]=="O" && x[8]=="O"||
     x[1]=="O" && x[4]=="O" && x[7]=="O"||
     x[3]=="O" && x[4]=="O" && x[5]=="O"||
     x[0]=="O" && x[4]=="O" && x[8]=="O"||
     x[6]=="O" && x[4]=="O" && x[2]=="O"){
    console.log("Player 2 wins!")
    return;
  }
  else if(!x.includes('')){
    console.log("Tie")
    return
  }
  
  if(x.includes('')){
    flow();
  }
  
  
}
flow()
console.log(x)
}
Playing()

