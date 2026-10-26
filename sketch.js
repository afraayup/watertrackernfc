let img;
let imageLoaded = false;
let visits = 0;

async function setup() {
  createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);

  // Load background image
  try {
    img = await loadImage("water tracker.png");

    imageLoaded = true;
    console.log("Image loaded successfully!");

  } catch (error) {
    console.error("Image failed to load:", error);
  }

  // Get previous visit count
  visits = Number(localStorage.getItem("visits")) || 0;

  // Increase counter from 1 to 8, then reset to 1
  visits = (visits % 8) + 1;

  // Save updated counter
  localStorage.setItem("visits", visits);
}

function draw() {
  background(245);

  if (imageLoaded) {

    // Scale image to cover phone screen
    let scaleFactor = Math.max(
      width / img.width,
      height / img.height
    );

    let newWidth = img.width * scaleFactor;
    let newHeight = img.height * scaleFactor;

    // Display full-screen background
    imageMode(CORNER);

    image(
      img,
      (width - newWidth) / 2,
      (height - newHeight) / 2,
      newWidth,
      newHeight
    );
  }

  // COUNTER NUMBER
  fill(255);
  textAlign(CENTER, CENTER);
  textStyle(BOLD);

  textSize(width * 0.15);

  text(
    visits,
    width / 2,
    height * 0.83
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}