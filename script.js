<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>
<body id="gameBody">
    <main>
        <div id="gameContainer">
            <header id="matchContainer">
                <h1 id="matchBest">Best out of:</h1>
                <h2 id="matchCounter"></h2>
            </header>

            <div id="playerScoreContainer">
                <span id="player1" class="score">Player1 score:</span>
                <span id="player2" class="score">Player2 score:</span>
            </div>
            <br>
            <div>
                <span id="player1Choice">Player1 Choice</span>
                <span id="player2Choice">Player2 Choice</span>
            </div>

            <div id="player1Selection">
                <div class="gameBtn">
                    <button id="tankBtn">Tank</button>
                </div>
                <div class="gameBtn">
                    <button id="soldierBtn">Soldier</button>
                </div>
                <div class="gameBtn">
                    <button id="artilleryBtn">Atilley</button>
                </div>
            </div>

            <span id="centerImage"></span> 

            <!-- <span> section for winner to pop up-->
                <dialog open></dialog>

            <div id="player2Selection">
                <div class="compGameBtn">
                    <button id="pl2TankBtn">Tank</button>
                </div>
                <div class="compGameBtn">
                    <button id="pl2SoldierBtn">Soldier</button>
                </div>
                <div class="compGameBtn">
                    <button id="pl2ArtilleryBtn">Artillery</button>
                </div>
            </div>

            <div>
                <span id="restart">Restart</span>
                <span id="quit">Quit <!--&times;--></span>
            </div>

        </div>

    </main>

    <script src="script.js"></script>
</body>
</html>

<!-- //winning choice populates onscreen

<ul id="choice">
    <li>Tank</li>
    <li>Soldier</li>
    <li>Artillery</li>

</ul> -->
