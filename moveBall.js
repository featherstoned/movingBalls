var positionX = 0;
var positionY = 0;
var velocity = 100;
var reverse = false;
var ball = document.getElementById('ball');
ball.style.left = positionX + 'px';
// two x-axis coordinates
var Xmin = 0;
var Xmax = 300;
// two y-axis coordinates
var Ymin = 0;
var Ymax = 300;

//write a function that can change the position of the html element "ball"
function moveBall() {
  positionX = positionX + velocity;
  positionY = positionY + velocity;
  console.log(positionX + velocity);
  console.log(positionY + velocity);
  
if (reverse) {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  } else {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + "px";
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax; 
    positionX ===Xmin;
    positionY > Ymax;
    positionY === Ymin;
  ) {
    reverse = !reverse
}
}

setInterval(moveBall, 100);
