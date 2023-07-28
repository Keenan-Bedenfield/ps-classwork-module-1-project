
function startGame() {
    startBtn.addEventListener("click",()=>{
      onclick = document.getElementById("startBtn")
    }); 
}

function playGame() {
    let player1Wins = 0;
    let player2Wins = 0;
  
    for (let round = 1; round <= 5; round++) {
      console.log(`Round ${round}:`);
      const player1Choice = prompt(`${player1Choice}`).toUpperCase();
  
      if (["Tank", "Soldier", "Artillery"].includes(player1Choice)) {
        console.log(`${player1Choice}`);
        -1; // decrease the round to and play next/current round
        continue;
      }

      const result = anotherBattle(player1Choice);
    if (result === 1) {
      player1Wins++;
    } else if (result === -1) {
      player2Wins++;
    }
    }
}

// 3 rounds won
function endGame () {
    if (player1Wins === 3 || player2Wins === 3) {
        console.log("Game Over");
    }
}

 
function winGame () {
    if (player1Wins > player2Wins){
        console.log("Player 1 Wins.");
      }else if (player1Wins < player2Wins){
        console.log("Player 2 Wins.");
      }else{
        console.log("Stalemate!");
    }
}
  


    // ---------Game functionailty----------

function tsa (player1Choice) {
    let optionArr = ["tank", "soldier", "artillery"];

    const player2Choice = optionArr[Math.floor(Math.random() * optionArr.length)];
  
    console.log("Player1 chooses:" + player1Choice);
    console.log("Player2 chooses:" + player2Choice);
  

    if (player1Choice === player2Choice) {
      console.log("Stalemate!");
    } else if (
      (player1Choice === "tank" && player2Choice === "artillery") ||
      (player1Choice === "soldier" && player2Choice === "tank") ||
      (player1Choice === "artillery" && player2Choice === "soldier")
    ) {
      console.log("Victory! You won the battle.");
    } else {
      console.log("Retreat! You've lost this battle.");
    }
  }
  tsa()

  //PLAYER 1 - BUTTONS to make a choice
  const tankBtn = document.getElementById('tankBtn')
//   console.log(tankBtn);
  tankBtn.classList.add('flexCtr')
  tankBtn.addEventListener("click",() => {
    tankBtn.classList.add('.choiceBtn')
    tankBtn.style.backgroundColor = ("green")
  })

  const soldierBtn = document.getElementById('soldierBtn')
//   console.log(soldierBtn);
  soldierBtn.classList.add('flexCtr')
  soldierBtn.addEventListener("click",() => {
    soldierBtn.classList.add('.choiceBtn')
    soldierBtn.style.backgroundColor = ("green")
  })

  const artilleryBtn = document.getElementById('artilleryBtn')
//   console.log(artilleryBtn)
  artilleryBtn.classList.add('flexCtr')
  artilleryBtn.addEventListener("click",() => {
    artilleryBtn.classList.add('.choiceBtn')
    artilleryBtn.style.backgroundColor = ("green")
  })

//PLAYER2 SELECTION BUTTONS
  const pl2TankBtn = document.getElementById('pl2TankBtn')
  pl2TankBtn.classList.add('flexCtr')
  pl2TankBtn.addEventListener("click",() => {
    pl2TankBtn.classList.add('.choiceBtn')
  })

  const pl2SoldierBtn = document.getElementById('pl2SoldierBtn')
  pl2SoldierBtn.classList.add('flexCtr')
  pl2SoldierBtn.addEventListener("click",() => {
    pl2SoldierBtn.classList.add('.choiceBtn')
  })

  const pl2ArtilleryBtn = document.getElementById('pl2ArtilleryBtn')
  pl2ArtilleryBtn.classList.add('flexCtr')
  pl2ArtilleryBtn.addEventListener("click",() => {
    pl2ArtilleryBtn.classList.add('.choiceBtn')
  })

//Main menu script
const gameMenu = document.getElementById('menuBtn');



//Inside the game screen

const best = document.getElementById('matchContainer');
best.classList.add('flexCtr');
best.style.color = ('black');








// test the game
// console.log(tsa("soldier");
