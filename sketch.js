var n1, n2;
var b1, b2, b3, b4;

function setup() {
  createCanvas(800, 1000);
  num1 = createInput();
  num1.position(100, 100);

  num2 = createInput();
  num2.position(400, 100);

  b1 = createButton("ADD");
  b1.position(150, 200);
  b1.mousePressed(add)

  b2 = createButton("Multiply");
  b2.position(250, 200);
  b2.mousePressed(mult)

  b3 = createButton("Subtract");
  b3.position(350, 200);
  b3.mousePressed(sub)

  b4 = createButton("Division");
  b4.position(450, 200);
  b4.mousePressed(division)
}

function draw() {
  background(255, 157, 249);

  textAlign(CENTER);
  textSize(20);

  text("Number 1", 175, 80);
  text("Number 2", 475, 80);

  n1 = parseInt(num1.value())
  n2 = parseInt(num2.value())
}

function add(){
  console.log(n1+n2)
}
function sub(){
  console.log(n1-n2)
}
function division(){
  console.log(n1/n2)
}
function mult(){
  console.log(n1*n2)
}