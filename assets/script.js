let currentLevel = 0; // Start at 0 for entrance level

// Game data for each level
const levels = {
    0: {
        prompt: "Welcome to the Maze! Ready to begin?",
        correctChoice: null, // No correct choice on entrance
        image1: 'images/entrance.jpg',
        image2: null // Only one image at entrance
    },
    1: {
        prompt: "You've reached the first decision point. Choose a path:",
        correctChoice: 'left', // Example: 'left' is correct
        image1: 'images/choice1.jpg', // Left choice
        image2: 'images/choice2.webp'  // Right choice
    },
    2: {
        prompt: "You've reached the second decision point. Choose wisely:",
        correctChoice: 'right',
        image1: 'images/choice3.webp',
        image2: 'images/choice4.jpg'
    },
    3: {
        prompt: "The maze is getting tricky! Which way now?",
        correctChoice: 'left',
        image1: 'images/choice5.webp',
        image2: 'images/choice6.png'
    },
    4: {
        prompt: "Almost there! Choose your final path:",
        correctChoice: 'right',
        image1: 'images/obstacle1.webp',
        image2: 'images/obstacle2.jpg'
    },
    exit: {
        prompt: "Congratulations! You've escaped the maze!",
        image: 'images/maze-exit.jpg'
    }
};

// Function to start the game
function startGame() {
    currentLevel = 1;
    updateLevel();
}

// Function to handle player choices
function makeChoice(choice) {
    if (choice === levels[currentLevel].correctChoice) {
        currentLevel++;
        if (currentLevel > 4) {
            showExit();
        } else {
            updateLevel();
        }
    } else {
        resetToStart();
    }
}

// Update the level images and prompt
function updateLevel() {
    const level = levels[currentLevel];

    if (currentLevel === 0) {
        // Entrance level with one image and play button
        document.getElementById('level-img1').src = level.image1;
        document.getElementById('level-img2').style.display = 'none'; // Hide second image
        document.getElementById('game-prompt').textContent = level.prompt;
        document.getElementById('choices').innerHTML = `<button class="btn btn-dark" onclick="startGame()">Play</button>`;
    } else {
        // Levels with two image choices
        document.getElementById('level-img1').src = level.image1;
        document.getElementById('level-img2').src = level.image2;
        document.getElementById('level-img2').style.display = 'inline'; // Show second image
        document.getElementById('game-prompt').textContent = level.prompt;
        document.getElementById('choices').innerHTML = `
            <button class="btn btn-dark" onclick="makeChoice('left')">Choose Left</button>
            <button class="btn btn-dark" onclick="makeChoice('right')">Choose Right</button>`;
        document.getElementById('message').textContent = '';
    }
}

// Handle wrong choice (reset to level 1)
function resetToStart() {
    currentLevel = 0;
    updateLevel();
    document.getElementById('message').textContent = "Wrong choice! You're back at the start.";
}

// Show exit message when player escapes
function showExit() {
    const exitLevel = levels.exit;
    document.getElementById('level-img1').src = exitLevel.image;
    document.getElementById('level-img2').style.display = 'none'; // Hide second image
    document.getElementById('game-prompt').textContent = exitLevel.prompt;
    document.getElementById('choices').innerHTML = `<button class="btn btn-dark" onclick="playAgain()">Play Again</button>`;
}

// Play Again function to reset the game to the start
function playAgain() {
    currentLevel = 0; // Reset to entrance level
    updateLevel(); // Update to the entrance level
}


