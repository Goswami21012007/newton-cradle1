class  Bob {
    constructor(x,y,radius){
var options={
isStatic:true,
restitution:3,
friction:0.5,
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