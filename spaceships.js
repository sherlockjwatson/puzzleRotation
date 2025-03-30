let currentRotation = 0;
let currentTargetIndex = 0;

let targetRotation = [225, 180, 90];
// let targetNegativeRotation = [-135, -180, -270];
let targetHit = [false, false, false];

let currentProgress = 0;


// Function to update the rotation and progress bar
function updateSpaceships() {

  if (currentProgress < 33) {
    document.getElementById("SpaceshipGreen").style.transform = `rotate(${currentRotation}deg)`;
  };

  if (currentProgress < 66) {
    document.getElementById("SpaceshipYellow").style.transform = `rotate(${currentRotation}deg)`;
  };

  if (currentProgress < 99) {
    document.getElementById("SpaceshipPurple").style.transform = `rotate(${currentRotation}deg)`;
  };

  if (currentProgress < 100) {
document.getElementById("progressBar").style.width = `${currentProgress}%`;
  };
}

// Right Arrow Key
// Rotate the spaceship right by 45 degrees
function handleKeyRight() {
  document.getElementById("Incorrect").style.display = 'none';

  if (currentRotation < 0) {
    currentRotation = 360 + (currentRotation % 360);  // Wrap negative rotations
  }
  
  currentRotation += 45;
  currentRotation = currentRotation % 360;

  updateSpaceships();
  console.log("Current rotation:", currentRotation);
};


// Left Arrow Key
// Rotate the spaceship left by 45 degrees
function handleKeyLeft() {
  document.getElementById("Incorrect").style.display = 'none';

  currentRotation -= 45;
  if (currentRotation < 0) {
    currentRotation = 360 + currentRotation;  // Wrap to positive degrees
  }
  
  
updateSpaceships();
console.log("Current rotation:", currentRotation);
};


// Enter Key
// Check if the current rotation matches the target rotation
function handleKeyEnter() {
  console.log("Enter key pressed");

  if (currentRotation == targetRotation[currentTargetIndex] && !targetHit[currentTargetIndex]) {
    currentProgress += 33;
    targetHit[currentTargetIndex] = true;
    console.log("correct");
    document.getElementById("progressBar").style.width = `${currentProgress}%`;
    
    // current progress determines if spaceships are shown
    if (currentProgress == 33){
      document.getElementById("SpaceshipYellow").style.display = 'block'
    };
  
    if (currentProgress == 66){
      document.getElementById("SpaceshipPurple").style.display = 'block'
    };

    
    currentTargetIndex++;

    if (currentTargetIndex >= targetRotation.length) {
      console.log("All targets completed!");
      currentTargetIndex = 0;
      targetHit = [false, false, false]; 
  } 
}
  else if (currentRotation != targetRotation[currentTargetIndex]) {
    document.getElementById("Incorrect").style.display = 'block';
  }
}



// Keydown event listener
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    handleKeyRight();
  }

  if (e.key === "ArrowLeft") {
    handleKeyLeft();
  }

  if (e.key === "Enter") {
    handleKeyEnter();
  }
});