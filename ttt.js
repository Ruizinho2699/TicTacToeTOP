function Gameboard() {

let board = ['','','','','','','','','']

const players = (player,icon) =>{
   return player,icon;
}

let player1 = players("Player1","X")
let player2 = players("Player2","O")

return {board,player1,player2};

}

function Playing(tray) {

const check = (player,cell) =>{
    if (tray[cell] === '' && (player === 'X' || player === 'O')) {
      tray.splice(cell, 1, player);
    } else if (tray[cell] === 'X' || tray[cell] === 'O') {
      console.log('not free');
    }
  };

return{check}
}


function Display(){
 const board = Gameboard().board;
 const p1=Gameboard().player1;
 const p2=Gameboard().player2;
 const play = Playing(board)
 
 const div = document.createElement("div");
 document.body.appendChild(div);
 div.id = "game"

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
  </div>`+
  `<div id="display"></div>`;

  const input = () =>{
  let turn = p1;
  for(let i = 0; i<board.length;i++){
  const cell = document.querySelector(`#cell${i+1}`);
  cell.addEventListener("click",()=>{
    if(turn === p1){
      play.check(turn,i)
      cell.textContent=board[i];
      turn = p2
      console.log(board)
    }
    else if(turn === p2){
      play.check(turn,i)
      cell.textContent=board[i];
      turn = p1;
      console.log(board)
    }
  })

  }
  }
  return{input}
}


function winning(){
  let display = Display()
  let type = display.input()

  return type;
}

winning()



