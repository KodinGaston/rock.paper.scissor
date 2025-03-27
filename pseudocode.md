# Pseudocode for Rock-Paper-Scissors Game

## General Behavior

This program is a simple implementation of the classic "Rock-Paper-Scissors" game. It allows the user to start a game, make a choice between "rock," "paper," or "scissors," and play against the computer. The game tracks scores and displays alerts to indicate the winner of each round and the overall winner of the game. Players can restart the game at any point.

---

## Functionalities and Expected Behaviors

### **Start Button**

- **Behavior**: When the "Start" button is clicked, the game interface becomes visible to the player.
- **Implementation**:
  - The `gameInterface` element's hidden class is removed, making it visible.
- **User Expectation**: The game screen should appear, allowing the player to start interacting with the game.

### **Restart Button**

- **Behavior**: When the "Restart" button is clicked, the game resets to its initial state.
- **Implementation**:
  - Player and computer scores are reset to zero.
  - The game interface is hidden again.
  - All score displays are updated to reflect the reset.
- **User Expectation**: The scores should reset, and the game should start fresh.

### **Player's Choice**

- **Behavior**: When the player clicks one of the available choices (rock, paper, or scissors), the game registers their choice, generates a random choice for the computer, and determines the round's winner.
- **Implementation**:
  - Attach event listeners to all choice buttons.
  - On click, retrieve the player's choice and randomly select the computer's choice.
  - Call the `determineWinner` function to evaluate the result.
- **User Expectation**: The result of each round (win, lose, or draw) should be displayed via an alert, and the scores should update accordingly.

---

## Core Functions

### **`determineWinner(player, computer)`**

- **Purpose**: Compares the player's choice and the computer's choice to determine the winner of the round.
- **Logic**:
  - If both choices are the same, it results in a draw.
  - If the player's choice beats the computer's choice, increment the player's score.
  - Otherwise, increment the computer's score.
- **User Expectation**: An alert should display whether the round is a draw, a win, or a loss. The score should update accordingly.

### **`checkForWinner()`**

- **Purpose**: Checks if either the player or the computer has reached 3 points, indicating the end of the game.
- **Logic**:
  - If the player reaches 3 points, a popup is displayed congratulating the player.
  - If the computer reaches 3 points, a popup informs the player of their loss and encourages them to play again.
  - The game resets after the player closes the popup.
- **User Expectation**: The game should clearly indicate when someone has won, show a popup with a message, and reset for a new game.

### **`showPopup(message, imagePath)`**

- **Purpose**: Creates and displays a popup with a custom message and image.
- **Logic**:
  - Dynamically create a popup element with the provided message and image.
  - Add a "Close" button to remove the popup when clicked.
- **User Expectation**: The popup should display the game result in a visually clear and appealing way, and the player should be able to close it.

### **`resetGame()`**

- **Purpose**: Resets the game to its initial state.
- **Logic**:
  - Reset both player and computer scores to zero.
  - Hide the game interface.
  - Update score displays to reflect the reset.
- **User Expectation**: The game should start anew with no lingering effects from the previous game.

---

## Game Rules

1. Players choose one of three options: "rock," "paper," or "scissors."
2. The computer randomly selects one of the three options.
3. The rules for determining the winner are as follows:
   - Rock beats Scissors.
   - Paper beats Rock.
   - Scissors beats Paper.
4. If the user loses, a popup appears with a message and an image inviting them to play again.
5. When the user clicks the "Close" button in the popup, the game resets.

---

### Example Scenarios

1. **Starting the Game**:
   - User clicks "Start." The game interface appears.
2. **Playing a Round**:
   - User clicks "Rock."
   - Computer randomly chooses "Scissors."
   - The user wins, and their score increases by 1.
3. **Winning the Game**:
   - User reaches 3 points.
   - Popup displays "You won the game!" along with a celebratory image.
4. **Losing the Game**:
   - Computer reaches 3 points.
   - Popup displays "You lost the game. Play again!" along with an inviting image.
5. **Closing the Popup**:
   - User clicks the "Close" button in the popup.
   - Scores reset, and the game interface hides.

   
--- --- ---

## Author

**KodinGaston**

### koding@duck.com ☺