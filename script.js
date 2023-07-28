/* *{

} */

:root {

}

/* Main menu styling */
#gameScreen {
    display: flex;
}

#backgroundPic {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;

    z-index: 1;
}

.flexCtr {
    display: flex;
    justify-content: center;
    align-items: center;
}

.clicked {
    border: 0;
    line-height: 2.5;
    padding: 0 20px;
    font-size: 1rem;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 1px #000;
    border-radius: 10px;
    background-color: rgba(20, 120, 20, 11);
    background-image: linear-gradient(to top left, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) 30%, rgba(0, 0, 0, 0));
    box-shadow: inset 2px 2px 3px rgba(255, 255, 255, 0.6), inset -2px -2px 3px rgba(0, 0, 0, 0.6);
}


.title {
    font-size: 3vw;
    padding-left: 2vw;
    font-family: 'CallOfOpsDuty', 'Times New Roman', Times, serif;
    display:flex;
    justify-content:center;
    align-items:center;
    color: beige;
    text-shadow: 1px 1px 1px rgb(59, 81, 44);
}


ul li {
    list-style: none;
}

ul li a {
    font-size: 3vw;
    display: flex;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: beige;
    border: 2px solid rgb(229, 242, 159);
    background-color: rgb(125, 156, 87);
    width: 30%;
    position: relative;
    left: 30%;
    margin: 2%;
}

ul li a:hover {
    cursor: crosshair;
    background-color: rgb(84, 128, 31);
}

ul li a:onclick {

}

.menuBox{
    display: grid;
    grid-template-columns: auto;
    justify-content:center;
    align-items:center;
    position: fixed;
    /* font-size: 12%; */
    top: 20%;
    left: 20%;
    right: 50%;
    z-index: 1;
    border: 2px solid black;
    background-color: rgba(124, 118, 89, 0.863);
    width: 50%;
    padding: 5%;
    margin-bottom: 1vw;
}

.copyright {
    position: fixed;
    font-size: 2vw;font-weight: bold;
    top: 92%;
    left: 42vw;
    z-index: 1;
}

/* Game Styling */

#gameBody {
    background-color: rgba(124, 118, 89, 0.863);

}

.choiceBtn {
    color: antiquewhite;
    background-color: #4b6337;
    padding: 10px;
    border: 3px solid black;
    z-index: 1;

}


#playerScoreContainer{
    display:block;
    justify-content:right;
    align-items:stretch;
    
}

#player1 {
    position: absolute;
    left: 20%;
    padding-bottom: 10%;
}

#player2 {
    position: absolute;
    right: 22%;
}

#player1Choice {
   position: absolute;
   left: 20%;
}

#tankBtn{
    position: absolute;
    left: 20%;
    top: 30%;
}

#player2Choice {
   position: absolute;
   right: 22%;
}

