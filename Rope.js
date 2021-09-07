class Rope  {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            length:200,
            stiffness:0.5
        }
        this.pointB=pointB
        this.rope=Constraint.create(options)
        World.add(world,this.rope)
    }
display(){
    
    if(this.rope.bodyA){
        fill("white")
        var pointA=this.rope.bodyA.position
        var pointB=this.pointB
        strokeWeight(4)   
 line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
 
 
}
}