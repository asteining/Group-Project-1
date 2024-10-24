let currentLevel = 1;

// Game data for each level
const levels = {
    1: {
        prompt: "You're at the entrance of the maze. Do you go left or right?",
        correctChoice: 'left',
        image: 'images/entrance.jpg'
    },
    2: {
        prompt: "You've reached a crossroads. Do you go left or right?",
        correctChoice: 'left',
        image: 'images/choice1.jpg'
    },
    3: {
        prompt: "You see a staircase. Do you go left or right?",
        correctChoice: 'left',
        image: 'images/choice3.webp.jpg'
    },
    4: {
        prompt: "You're almost out! Do you go left or right?",
        correctChoice: 'left',
        image: 'images/choice6.png'
    },
    exit: {
        prompt: "Congratulations! You've escaped the maze!",
        image: 'images/exit.jpg'
    }
};

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

// Update the level image and prompt
function updateLevel() {
    document.getElementById('level-img').src = levels[currentLevel].image;
    document.getElementById('game-prompt').textContent = levels[currentLevel].prompt;
    document.getElementById('message').textContent = '';
}

// Handle wrong choice (reset to level 1)
function resetToStart() {
    currentLevel = 1;
    updateLevel();
    document.getElementById('message').textContent = "Wrong choice! You're back at the start.";
}

// Show exit message when player escapes
function showExit() {
    document.getElementById('level-img').src = levels.exit.image;
    document.getElementById('game-prompt').textContent = levels.exit.prompt;
    document.getElementById('choices').style.display = 'none';
}
