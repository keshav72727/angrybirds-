class Slingshot {
    constructor(body1,pointb){
        var options={
            bodyA:body1,
            pointB:pointb,
            stiffness:0.4,
            length:10
        }
        this.pointB = pointb
        this.sling=Constraint.create(options)
        World.add(world,this.sling);
    }
    fly(){
        this.sling.bodyA=null;
    }
    display(){
        if (this.sling.bodyA){
            var point1 = this.sling.bodyA.position;
            var point2 = this.pointB
            stroke("purple");
            strokeWeight(4);
            line(point1.x,point1.y,point2.x,point2.y)  
        }
        
    }
}