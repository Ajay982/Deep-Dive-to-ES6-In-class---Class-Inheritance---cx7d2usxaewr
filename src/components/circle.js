// import using require

// declare class


// export class using module.exports
const Shape = require('./shape.js');
 module.exports=class Circle extends Shape{
    constructor(color="blue",radius=7){
        super(color)
        this.radius =radius;
    }
    calculateArea(){
        let pi=3.14;
        return pi*radius*radius;
    }
}
 
