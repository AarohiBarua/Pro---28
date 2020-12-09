class SlingShot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.5,
            length:50,
        }
        this.pointB = pointB;
        this.slingShot = Constraint.create(options);
        World.add(world,this.chain);
    }

    fly(){
        this.slingShot.bodyA = null;
    }
    display(){
       if(this.slingShot.bodyA){
        var pointA = this.slingShot.bodyA.position;
        var pointB = this.slingShot.bodyB.position;
        strokeWeight(5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       }
       

       
    }
}