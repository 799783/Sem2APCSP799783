//Joe Untrecht
//1203 Vector
//boids.js

class Boids{
  constructor(x,y,dx,dy,ax,ay){
    this.loc= createVector(x,y);
    this.vel= createVector(dx,dy);
    this.acc=createVector(ax,ay);
    this.clr= color(random(255),random(255),random(255));
    this.w=10;
  }

  run(){
    this.render();
    this.checkEdges();
    this.update();
  }

  checkEdges(){
    if(this.loc.x<0 ) this.loc.x=width;
    if(this.loc.x>width) this.loc.x=0;
    if(this.loc.y<0 ) this.loc.y=height;
    if(this.loc.y>height) this.loc.y=0;
  }

  update(){
    this.vel.limit(5);
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  render(){
    fill(this.clr);
    ellipse(this.loc.x,this.loc.y,this.w,this.w);
  }

}
//end ball class
