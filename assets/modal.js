// Initialize game progress variables
let correctChoices = 0; // Track correct choices
let incorrectChoices = 0; // Track incorrect choices
const totalLevels = 5; // Total number of levels

// Retrieve stored progress from local storage, if available
if (localStorage.getItem('correctChoices')) {
    correctChoices = parseInt(localStorage.getItem('correctChoices'));
}
if (localStorage.getItem('incorrectChoices')) {
    incorrectChoices = parseInt(localStorage.getItem('incorrectChoices'));
}
if (localStorage.getItem('currentLevel')) {
    currentLevel = parseInt(localStorage.getItem('currentLevel'));
}

// Function to update modal content dynamically
function updateModalContent() {
    document.getElementById('correct-choices').textContent = correctChoices;
    document.getElementById('incorrect-choices').textContent = incorrectChoices;
    document.getElementById('levels-left').textContent = totalLevels - currentLevel;
}

// Function to update local storage with progress
function saveProgressToLocalStorage() {
    localStorage.setItem('correctChoices', correctChoices);
    localStorage.setItem('incorrectChoices', incorrectChoices);
    localStorage.setItem('currentLevel', currentLevel);
}

// Add event listener to the game progress button to show the modal and update content
document.getElementById('gameProgressBtn').addEventListener('click', function() {
    // Update the modal content with the latest progress
    updateModalContent();
    
    // Trigger the modal to open (Bootstrap functionality)
    const modalElement = new bootstrap.Modal(document.getElementById('gameProgressModal'));
    modalElement.show();
});

// Function to handle player choices and update progress
function makeChoice(choice) {
    if (choice === levels[currentLevel].correctChoice) {
        correctChoices++;
        currentLevel++;
        saveProgressToLocalStorage();
        if (currentLevel > totalLevels) {
            showExit();
        } else {
            updateLevel();
        }
    } else {
        incorrectChoices++;
        saveProgressToLocalStorage();
        resetToStart();
    }
}
