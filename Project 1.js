var n1,n2;
var b1,b2,b3,b4;

function setup() {
  
  createCanvas(400, 400);
  
  btn_red = createButton("RED"); 
  btn_red.position(100,50);
  btn_red.mousePressed(red_bg);

  btn_green = createButton("GREEN");
  btn_green.position(250,50);
  btn_green.mousePressed(green_bg);
  }
  num1 = createInput();
  num1.position(5, 60);
  
  num2 = createInput();
  num2.position(200, 60);
  
  b1 = createButton("ADD");
  b1.position(10, 200);
  b1.mousePressed(add);
  
  function red_bg()
  {
    r= 255;
    g=0;
    b=0;


    function green_bg()
  {
    r= 0;
    g=255;
    b=0;
  }
  b2 = createButton("Multiply");
  b2.position(100, 200);
  b2.mousePressed(mul);
  
  
  textAlign(CENTER);
  textSize(15);
}

function draw() {
  background("pink")
  text("Number 1",70,50)
  text("Number 2",270,50)
  

}
function add(){
  console.log(num1+ num2)
}