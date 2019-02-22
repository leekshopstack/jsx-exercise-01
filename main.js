class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    plus(point2) {
        var plusx = this.x + point2.x;
        var plusy = this.y + point2.y;

        return "=> Point {x: "+ plusx +",y: " + plusy +"}";
    }

    plusxy() {
        return this.x + this.y;
    }
}

class Point2 extends Point {
    minnus() {
        return this.x - this.y;
    }
}

class Point3 extends Point2 {
    mul() {
        return this.minnus() * this.plusxy();
    }
}

console.log(new Point(1, 2).plus(new Point(2,1)))

//Try call function on A from C.
console.log(new Point3(5, 3).mul());