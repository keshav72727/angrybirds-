class Slingshot {
    constructor(body1,pointb){
        var options={
            bodyA:body1,
            pointB:pointb,
            stiffness:0.4,
            length:10
        }
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
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
           push();
           if (point1.x<220){
           stroke(48,22,8);
            strokeWeight(7);
            line(point1.x-25,point1.y,point2.x-10,point2.y)
            line(point1.x-25,point1.y,point2.x+20,point2.y);
             image(this.sling3,point1.x-30,point1.y-10,15,30);
           }
           else{
            stroke(48,22,8);
            strokeWeight(4);
            line(point1.x-25,point1.y,point2.x-10,point2.y)
            line(point1.x-25,point1.y,point2.x+20,point2.y);
             image(this.sling3,point1.x+22,point1.y-10,15,30);
           }
            pop();  
        }

        image(this.sling1, 200, 20);
        image(this.sling2,170,15);
    }  
}