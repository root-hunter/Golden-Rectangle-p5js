let start_x = 1000
let start_y = 1000
let start_size = 1
let group = []

let state = 0 //from 0 to 3 for map square rotation

let a = 1

let m = 1

class Square{
  constructor(x, y, size){
    this.x = x
    this.y = y
    this.size = size
  }
  
  draw(){
    let r = random(255); 
    let g = random(100,200);
    let b = random(100);
    let a = random(200,255);
  
    noStroke();
    fill(r, g, b, a);
    square(this.x, this.y, this.size)
  }
}

function fibonacci(n){
  if(n === 1 || n === 0){
      return n
  }else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}

function setup() {
  createCanvas(2000, 2000);
  group.push(new Square(start_x, start_y, start_size*m))
}

function draw() {
  background(220);

  for(let i = 0; i < group.length; ++i){
    group[i].draw()
  }
  

  if(a < 40){
    console.log(a+": "+fibonacci(a))
    old_size = start_size
    start_size = fibonacci(a+1)*m
    console.log(state)
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
    group.push(new Square(start_x, start_y, start_size))
    
    a += 1
  }
}
