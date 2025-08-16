let playgame = confirm("shall we play a Rock Paper Scissor game ?");
if (playgame) {
    let playerchoice = prompt("Please Enter Rock Paper Or Scissor ");
    if (playerchoice) {
        let playerone = playerchoice.trim().toLowerCase();
        if (
            playerone === "rock" ||
            playerone === "paper" ||
            playerone === "scissor"
        ) {
            let computerchoice = Math.floor(Math.random() * 3 + 1); 
            let computer =
                computerchoice === 1 ? "rock"
                : computerchoice === 2 ? "paper"
                : "scissor";

            let result = 
                playerone === computer
                    ? "Tie game !"
                    : playerone === "rock" && computer === "paper"
                    ? `playerone:${playerone}\n computer : ${computer}\n computer wins`
                    : playerone === "paper" && computer === "scissor"
                    ? `playerone:${playerone}\n computer : ${computer}\n computer wins`
                    : playerone === "scissor" && computer === "rock"
                    ? `playerone:${playerone}\n computer : ${computer}\n computer wins`
                    : `playerone:${playerone}\n computer : ${computer}\n playerone wins`;

            alert(result);

            let playagain = confirm("play again?");
            playagain ? location.reload() : alert("ok thanks for playing"); 
        } else {
            alert("you did'nt enter any rock paper or scissor");
        }
    } else {
        alert("i guess you changed your mind, maybe next time.");
    }
} else {
    alert("maybe next time");
}
