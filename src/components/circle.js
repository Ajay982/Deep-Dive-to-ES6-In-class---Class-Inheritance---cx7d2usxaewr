// import using require

// declare class


// export class using module.exports
const Shape = require('.shape.js');
 module.export=class Circle extends Shape{
    constructor(radius,color="red"){
        super(color)
        this.radius =radius;
    }
    calculateArea(){
        let pi=3.14;
        return pi*radius*radius;
    }
}
