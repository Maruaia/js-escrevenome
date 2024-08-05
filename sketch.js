function setup() {
    createCanvas(600, 500);
    background(200);
  }
  
  function draw() {
    stroke("blue");
    fill("blue");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 40, 40);
    }
  }
  