class Bob {
    constructor(x, y, radius){
        var options = {
            restitution: 0.7,
            isStatic: true,
            friction: 0,
            frictionAir: 0,
            density: 0,
            frictionStatic: 0,
            inertia: 0,
            mass: 100
        }
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
    }
    display () {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill('lime');
        stroke('lime')
        strokeWeight(2);
        ellipse(pos.x, pos.y, this.radius);
    }
}