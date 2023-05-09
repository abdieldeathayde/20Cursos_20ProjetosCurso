// square(30,20,55);
// function setup() {
//     createCanvas(400, 400);
// }
  
// function draw() {
//     background(220);
//     ellipse(50,50,80,80);
// }

// JavaScript demonstration
function doDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "white";
    button.setAttribute("disabled", "true");
    // setTimeout(clearDemo, 2000, button);
  }
  
function clearDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.removeAttribute("disabled");
}
  