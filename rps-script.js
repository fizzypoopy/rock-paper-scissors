//IMAGES 
imagesRock = [
    "images/rock.png", //0
    "images/rock1.png", //1
    "images/rock2.png", //2
    "images/rock-and-stone.png", //3
    "images/rock-anvil.png", //4
    "images/rock-cansoda.png", //5
    "images/rock-cansoup.png", //6
    "images/rock-coal.png", //7
    "images/rock-diamond.png", //8
    "images/rock-emerald.png", //9
    "images/rock-geodude.png", //10
    "images/rock-glasssoda.png", //11
    "images/rock-lolipop.png", //12
    "images/rock-moon.png", //13
    "images/rock-moon2.png", //14
    "images/rock-pink.png", //15
    "images/rock-plate.png", //16
    "images/rock-robot.png", //17
    "images/rock-ruby.png", //18
    "images/rock-scout.png", //19
    "images/rock-spamcan.png", //20
    "images/rock-the.png", //21
]

imagesPaper = [
    "images/paper-bag.png", //0
    "images/paper-book.png", //1
    "images/paper-cardbox.png", //2
    "images/paper-catbook.png", //3
    "images/paper-cookie.png", //4
    "images/paper-envelope.png", //5
    "images/paper-juicebox.png", //6
    "images/paper-license.png", //7
    "images/paper-log.png", //8
    "images/paper-news.png", //9
    "images/paper-nuggies.png", //10
    "images/paper-pancake.png", //11
    "images/paper-pizza.png", //12
    "images/paper-pizza1.png", //13
    "images/paper-scroll.png", //14
    "images/paper-takeout.png", //15
    "images/paper-toilet.png", //16
    "images/paper-card.png", //17
    "images/paper-money.png", //18
]

imagesScissors = [
    "images/scissors.png", //0
    "images/scissors1.png", //1
    "images/scissors2.png", //2
    "images/scissors-duck.png", //3
    "images/scissors-frog.png", //4
    "images/scissors-knife.png", //5
    "images/scissors-monster.png", //6
    "images/scissors-penguin.png", //7
    "images/scissors-shears.png", //8
    "images/scissors-sword.png", //9
    "images/scissors-axe.png", //10
    "images/scissors-breadknife.png", //11
    "images/scissors-shuriken.png", //12
    "images/scissors-grumpycat.png", //13
    "images/scissors-grumpycat1.png", //14
    "images/scissors-grumpycat.gif", //15
]

let choices = ["rock", "paper", "scissors"]

var round = 0
var userScore = 0
var compScore = 0
var userChoice = ""

//USER'S CHOICE
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");
rock.addEventListener("click", function() {
    playRound("rock");
})
paper.addEventListener("click", function() {
    playRound("paper");
})
scissors.addEventListener("click", function() {
    playRound("scissors");
})

function playRound(userChoice) {
    round++
    document.querySelector("#round").innerHTML = `ROUND ${round}:`;

    document.querySelector(".messageBox").style.backgroundColor = "rgb(104, 109, 134)";
    document.querySelector(".messageBox").style.color = "white";

    //COMPUTER'S CHOICE
    let compChoice = '';
    num = Math.floor(Math.random() * 3);
    compChoice = choices[num];

        //COMPUTER IMAGE
        if (compChoice === "rock") {
            compNum = Math.floor(Math.random() * 22);
            compImg = imagesRock[compNum];
            document.querySelector("#compImg").innerHTML = `${compImg}`;
        } else if (compChoice ==="paper") {
            compNum = Math.floor(Math.random() * 19); 
            compImg = imagesPaper[compNum];
            document.querySelector("#compImg").innerHTML = `${compImg}`;
        } else if (compChoice === "scissors") {
            compNum = Math.floor(Math.random() * 16);
            compImg = imagesScissors[compNum];
            document.querySelector("#compImg").innerHTML = `${compImg}`;
        } 
        document.compImg.src = compImg;

    //MESSAGES
    function update_userMessage() {document.querySelector("#message").innerHTML = `You win!~ ^U^ ${userChoice} beats ${compChoice}!!`;}
    function update_compMessage() {document.querySelector("#message").innerHTML = `Computer wins!!!!!!! >:D ${compChoice} beats ${userChoice}!!! EHEHEHEEEE`;}
    
    //SCORING
    //userScore++ BELOW
    if ((userChoice == "rock") && (compChoice == "scissors")) {
        userScore++
        update_userMessage();
        document.querySelector(".messageBox").style.backgroundColor = "rgb(28, 160, 87)";
        document.querySelector(".messageBox").style.color = "white";
    } else if ((userChoice == "paper") && (compChoice == "rock")) {
        userScore++
        update_userMessage();
        document.querySelector(".messageBox").style.backgroundColor = "rgb(28, 160, 87)";
        document.querySelector(".messageBox").style.color = "white";
    } else if ((userChoice == "scissors") && (compChoice == "paper")) {
        userScore++
        update_userMessage();
        document.querySelector(".messageBox").style.backgroundColor = "rgb(28, 160, 87)";
        document.querySelector(".messageBox").style.color = "white";

    //compScore++ BELOW
    } else if ((compChoice == "rock") && (userChoice == "scissors")) {
        compScore++
        update_compMessage();
        document.querySelector(".messageBox").style.backgroundColor = "rgb(155, 25, 53)";
        document.querySelector(".messageBox").style.color = "white";
    } else if ((compChoice == "paper") && (userChoice == "rock")) {
        compScore++
        update_compMessage();
        document.querySelector(".messageBox").style.backgroundColor = "rgb(155, 25, 53)";
        document.querySelector(".messageBox").style.color = "white";
    } else if ((compChoice == "scissors") && (userChoice == "paper")) {
        compScore++
        update_compMessage();
        document.querySelector(".messageBox").style.backgroundColor = "rgb(155, 25, 53)";
        document.querySelector(".messageBox").style.color = "white";

    //TIE BELOW
    } else if (compChoice == userChoice) {
        document.querySelector("#message").innerHTML = "Ooooohhhh~~ DRAWWWWWwWW!!~ QwQ EOHOUWEHEHOUUUUU"
    } else {
        document.querySelector("#message").innerHTML = "error"
    }

    document.querySelector("#userChoice").innerHTML = `${userChoice}`;
    document.querySelector("#userScore").innerHTML = `${userScore}`;
    document.querySelector("#compChoice").innerHTML = `${compChoice}`;
    document.querySelector("#compScore").innerHTML = `${compScore}`;


    


    // //CHECK ROUND END
    // function checkEnd() {
    //     if (userScore + compScore == 5) {
    //         if (userScore > compScore) {
    //             document.querySelector("#message").innerHTML = `YOU WIN!!!`;
    //         } else {
    //             document.querySelector("#message").innerHTML = `OHH NYOOO!!! YOU LOSE!!! COMPUTER WINSSSS >:D`;
    //         }
    //     }
    // }
    // checkEnd();
}