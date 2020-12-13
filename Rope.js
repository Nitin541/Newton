class Rope {
    constructor (bodyA, bodyB, offsetX, offsetY) {
        this.offsetX = offsetX;
        this.offsetY = offsetY;

        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.6,
            length: 500,
            pointB: {x: this.offsetX, y: this.offsetY}
        }

        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }
    display () {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        stroke('red');
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y + this.offsetY);
    }
}