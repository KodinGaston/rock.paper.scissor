import "./style.scss";

const startBtn = document.getElementById("start-btn") as HTMLButtonElement;
const restartBtn = document.getElementById("restart-btn") as HTMLButtonElement;
const gameInterface = document.getElementById("game-interface") as HTMLElement;
const playerScoreElement = document.getElementById("player-score") as HTMLElement;

const computerScoreElement = document.getElementById("computer-score") as HTMLElement;
const choices = [
  { name: "rock", beats: "scissors" },
  { name: "paper", beats: "rock" },
  { name: "scissors", beats: "paper" },  
];

let playerScore = 0;
let computerScore = 0;

startBtn.addEventListener("click", () => {
  
  gameInterface.classList.remove("hidden");
});

restartBtn.addEventListener("click", () => {
  resetGame();
});

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = (event.target as HTMLElement).id;
    const computerChoice = choices[Math.floor(Math.random() * choices.length)].name;
    determineWinner(playerChoice, computerChoice);
  });
});

function determineWinner(player: string, computer: string) {
  const playerChoice = choices.find((choice) => choice.name === player);
  const computerChoice = choices.find((choice) => choice.name === computer);

  if (player === computer) {
    alert("It's a draw!");
    return;
  }

  if (playerChoice && computerChoice && playerChoice.beats === computer) {
    playerScore++;
    playerScoreElement.textContent = playerScore.toString();
    alert("You win!");
  } else {
    computerScore++;
    computerScoreElement.textContent = computerScore.toString();
    alert("Computer wins!");
  }

  checkForWinner();
}
function checkForWinner() {
  const basePath = "https://kodingaston.github.io/rock.paper.scissor";

  if (playerScore === 3) {
    showPopup("You did it! You won the game!", `${basePath}/winner.webp`);
    resetGame();
  } else if (computerScore === 3) {
    showPopup(
      "Ups... no... I am so sorry, you lose the game. Make your revenge and play again! :)",
      `${basePath}/loser.webp`
    );
    resetGame();
  }
}

function showPopup(message: string, imagePath: string) {
  const popup = document.createElement("div");
  popup.className = "popup";
  popup.innerHTML = `
    <div class="popup-content">
      <img src="${imagePath}" alt="Result Image"/>
      <p>${message}</p>
      <button id="close-popup">Close</button>
    </div>
  `;
  document.body.appendChild(popup);

  const closeBtn = document.getElementById("close-popup") as HTMLButtonElement;
  closeBtn.addEventListener("click", () => {
    popup.remove();
  });
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreElement.textContent = "0";
  computerScoreElement.textContent = "0";
  gameInterface.classList.add("hidden");
}