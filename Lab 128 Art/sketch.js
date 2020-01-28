//  Joe Untrecht
// 12/03 Vector
//  This is a comment
//  The setup function function is called once when your program begins
//sketch
boids=[];

function setup() {
  // put setup code here
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBoids(100);
}

function draw() {
  runBoids();
}

function loadBoids(n){
  for (var i=0; i<n; i++){
    boids[i]= new Boids(random(800),random(800),2,2,.5,.5);
  }
}

function runBoids(){
  for (var i=0; i<Boids.length; i++){
    Boids.run();
  }
}
