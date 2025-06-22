function Gameboard() {

let board = ['','','','','','','','',''];



const players = (player,icon) =>{
   return {player,icon};
}
let player1=players("Player 1",'X')
let player2=players("Player 2",'O')
return {board,players,player1,player2};

}

function Playing(tray) {

const check = (player,cell) =>{
    if (tray[cell] === '' && (player === 'X' || player === 'O')) {
      tray.splice(cell, 1, player);
    } else if (tray[cell] === 'X' || tray[cell] === 'O') {
      console.log('not free');
    }
  };

const win = (board)=>{

  if(board[0]=="X" && board[1]=="X" && board[2]=="X"||
    board[0]=="X" && board[3]=="X" && board[6]=="X"||
    board[2]=="X" && board[5]=="X" && board[8]=="X"||
    board[6]=="X" && board[7]=="X" && board[8]=="X"||
    board[1]=="X" && board[4]=="X" && board[7]=="X"||
    board[3]=="X" && board[4]=="X" && board[5]=="X"||
    board[0]=="X" && board[4]=="X" && board[8]=="X"||
    board[6]=="X" && board[4]=="X" && board[2]=="X"){
    Object.freeze(board);

  }
  else if(!board.includes('')){
    console.log("Tie");
    
  }

  if(board[0]=="O" && board[1]=="O" && board[2]=="O"||
     board[0]=="O" && board[3]=="O" && board[6]=="O"||
     board[2]=="O" && board[5]=="O" && board[8]=="O"||
     board[6]=="O" && board[7]=="O" && board[8]=="O"||
     board[1]=="O" && board[4]=="O" && board[7]=="O"||
     board[3]=="O" && board[4]=="O" && board[5]=="O"||
     board[0]=="O" && board[4]=="O" && board[8]=="O"||
     board[6]=="O" && board[4]=="O" && board[2]=="O"){
    Object.freeze(board);
  }
  else if(!board.includes('')){
    console.log("Tie");
    
  }
}

return{check,win}
}


function Display(){
 const board = Gameboard().board;
 const pa=Gameboard().player1;
 const p1 = pa.icon
 const pb=Gameboard().player2;
 const p2 = pb.icon
 const play = Playing(board);

 document.getElementById(`game`).innerHTML=
  `<div id="row1">
  <div id="cell1"> ${board[0]}</div>
  <div id="cell2"> ${board[1]}</div>
  <div id="cell3"> ${board[2]}</div>
  </div>`+
  `<div id="row2">
  <div id="cell4"> ${board[3]}</div>
  <div id="cell5"> ${board[4]}</div>
  <div id="cell6"> ${board[5]}</div>
  </div>`+
  `<div id="row3">
  <div id="cell7"> ${board[6]}</div>
  <div id="cell8"> ${board[7]}</div>
  <div id="cell9"> ${board[8]}</div>
  </div>`;
  

  const input = () =>{
  let turn = p1;
  let name1 = winning().p1;
  let name2 = winning().p2;
  const screen = document.querySelector("#display")
  screen.textContent=`It's ${name1.player}'s turn!`
  for(let i = 0; i<board.length;i++){
  const cell = document.querySelector(`#cell${i+1}`);
  cell.addEventListener("click",()=>{
    if(turn === p1){
      play.check(turn,i)
      cell.textContent=board[i];
      turn = p2
      play.win(board)
      
      if(Object.isFrozen(board)){
        turn = "Player 1";
        screen.textContent=`Game Over! ${name1.player} wins!`
      }
       else if(!board.includes('')){
        screen.textContent="It's a tie!"
      }
      else{
        screen.textContent=`It's ${name2.player}'s turn!`
      }
      
    }
    else if(turn === p2){
      play.check(turn,i)
      cell.textContent=board[i];
      turn = p1;

      play.win(board)
      if(Object.isFrozen(board)){
        turn = "Player 2"
        screen.textContent=`Game Over! ${name2.player} wins!`
      }
       else if(!board.includes('')){
        screen.textContent="It's a tie!"
      }
      else{
        screen.textContent=`It's ${name1.player}'s turn!`
      }
  

    }
  })

  }
  }
  return{input}
}


function winning(){
let player1 = Gameboard().players;
let player2 = Gameboard().players;
const modal = document.querySelector(".modal");
const btn = document.querySelector(".btn")

btn.addEventListener("click",()=>{
  modal.show()
  const submit = document.querySelector("#submit");
  submit.addEventListener("click",()=>{
  p1 = player1(`${document.getElementById("one").value}`,'X')
  p2 = player2(`${document.getElementById("two").value}`,'O')
  let display = Display()
  let type = display.input()
   return {type,p1,p2};}
  )})
return {p1,p2}

}
  
  

winning()



