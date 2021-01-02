class Bob {
    constructor(x,y,width,height){
        var options = {
            isStatic:false,
            inertia: Infinity,
            restitution: 1, 
            friction: 0, 
            frictionAir: 0.0001, 
            slop: 1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }

}