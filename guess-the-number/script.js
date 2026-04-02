function play(userChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computer = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if (userChoice === computer) {
        result = "Draw!";
    } else if (
        (userChoice === "rock" && computer === "scissors") ||
        (userChoice === "paper" && computer === "rock") ||
        (userChoice === "scissors" && computer === "paper")
    ) {
        result = "You win!";
    } else {
        result = "You lose!";
    }

    document.getElementById("result").innerText =
        "Computer: " + computer + " → " + result;
}
