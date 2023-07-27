function tsa(player1Choice) {
    let optionArr = ["tank", "soldier", "artillery"];

    const player2Choice = choices[Math.floor(Math.random() * optionArr.length)];
  
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

  //PLAYER SELECTION BUTTONS
  const tankBtn = document.getElementById('tankBtn')
  tankBtn.classList.add('flexCenter')
  tankBtn.addEventListener("click",() => {

  })

  const soldierBtn = document.getElementById('soldierBtn')
  soldierBtn.classList.add('flexCenter')
  soldierBtn.addEventListener("click",() => {

  })

  const artilleryBtn = document.getElementById('artilleryBtn')
  artilleryBtn.classList.add('flexCenter')
  artilleryBtn.addEventListener("click",() => {

  })

//PLAYER2 SELECTION BUTTONS
  const pl2TankBtn = document.getElementById('pl2TankBtn')
  pl2TankBtn.classList.add('flexCenter')
  pl2TankBtn.addEventListener("click",() => {

  })

  const pl2SoldierBtn = document.getElementById('pl2SoldierBtn')
  pl2SoldierBtn.classList.add('flexCenter')
  pl2SoldierBtn.addEventListener("click",() => {

  })

  const pl2ArtilleryBtn = document.getElementById('pl2ArtilleryBtn')
  pl2ArtilleryBtn.classList.add('flexCenter')
  pl2ArtilleryBtn.addEventListener("click",() => {

  })

//Main menu script
const gameMenu = document.getElementById('.menuBtn');


// test the game
// console.log(tsa("soldier");
