// Select elements
let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let question = document.getElementById("question");
let gif = document.getElementById("gif");

// List of funny "No" button texts
let noTexts = ["Are you sure?", "Think again.", "Last chance!", "No way!", "Baby please!", "Don't do this!", "Click Yes!", "You're breaking my heart!", "You monster!", "Say Yes!"];
let noClickCount = 0;

// Adjustable growth amount
const GROWTH_AMOUNT = 40; // Change this value to adjust the growth

// Handle "No" button click
noButton.addEventListener("click", () => {
    if (noClickCount < noTexts.length) {
        noButton.innerText = noTexts[noClickCount]; // Change text
    }
    noClickCount++;

    // Increase the size of the Yes button
    let currentSize = parseInt(window.getComputedStyle(yesButton).fontSize);
    let currentPadding = parseInt(window.getComputedStyle(yesButton).padding);

    yesButton.style.fontSize = (currentSize + GROWTH_AMOUNT) + "px";
    yesButton.style.padding = (currentPadding + GROWTH_AMOUNT / 2) + "px";
});

// Handle "Yes" button click
yesButton.addEventListener("click", accept);

function accept() {
    document.body.innerHTML = `
        <h1>I love you so much!</h1>
        <img src="assets/final_placeholder.gif" alt="Cute GIF">
    `;
}
