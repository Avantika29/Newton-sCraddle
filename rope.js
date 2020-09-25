class Rope{
    constructor(a,b,offsetX,offsetY)
    {
        
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        

        var options = {
            bodyA : a,
            bodyB : b,
            length : 10,
            stiffness : 0.04
            pointB : {x : this.offsetX, y : this.offsetY }
        }

      this.rope =  Matter.Constraint.create(options);
      World.add(world,this.rope);
    }
display(){

    strokeWeight(4);
    line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,
        this.rope.bodyB.position.x,this.rope.bodyB.position.y)
}
}