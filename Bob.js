class  Bob {
    constructor(x,y,radius){
var options={
isStatic:false,
restitution:0.02,
friction:0.8,
density:1.2,
}

this.radius=radius
this.body=Bodies.circle(x,y,radius,options)
World.add(world,this.body)
    }
display(){
   
ellipseMode(CENTER)
fill("white ")
circle(this.body.position.x,this.body.position.y,this.radius)

}
}