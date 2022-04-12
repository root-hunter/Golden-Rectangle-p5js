let canvasSize = 3000

let start_x = canvasSize/2
let start_y = 1000
let start_size = 1
let group = []


let state = 0 //from 0 to 3 for map square rotation

let a = 1

let m = 1

class Square{
  constructor(x, y, size, state){
    this.x = x
    this.y = y
    this.size = size
    this.r = random(55); 
    this.g = random(80);
    this.b = random(200, 255);
    this.a = random(200,255);
    this.state = state
  }
 
  draw(){
   
    fill(this.r, this.g, this.b, this.a);
    square(this.x, this.y, this.size)
    
    noFill()
    strokeWeight(4)
    stroke("white")
    switch(this.state){
      case 0:
        arc(this.x + this.size, this.y, this.size*2, this.size*2, PI/2, PI)
        break;
      case 1:
        arc(this.x, this.y, this.size*2, this.size*2, 0, PI/2)
        break;
      case 2:
        arc(this.x, this.y + this.size, this.size*2, this.size*2, -PI/2, 0)
        break;
      case 3:
        arc(this.x + this.size, this.y + this.size, this.size*2, this.size*2, PI, -PI/2)
        break;
    }
    }
}

function fibonacci(n){
  if(n < 2){
      return n
  }else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

function setup() {
  createCanvas(canvasSize, canvasSize);
  group.push(new Square(start_x, start_y, start_size*m, state))

  while(a < 30){
    old_size = start_size
    start_size = fibonacci(a+1)*m
    
    switch(state){
      case 0:
        start_y += old_size - fibonacci(a+1)*m
        start_x += old_size
        state = 1;
        break;
      case 1:
        start_x += old_size - fibonacci(a+1)*m
        start_y -= start_size
        state = 2;
        break;
      case 2:
        start_x -= start_size
        state = 3;
        break;
      case 3:
        start_y += old_size
        state = 0;
        break;
    }
    group.push(new Square(start_x, start_y, start_size, state))
    
    a += 1
  }

}

function draw() {
  background(220);

  for(let i = 0; i < group.length; ++i){
    group[i].draw()
  }
}
