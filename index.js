const _implements = require('./interfaces.js');

const shapeInterface = [
    'calculateArea',
    {
        name: 'test',
        args: ['a', 'b']
    }
]


class Circle {
    constructor(raduis) {
        this.raduis = raduis;
    }
    calculateArea() {
        return Math.PI * this.raduis;
    }
    calculate() {

    }
    test(a, b) {

    }
}


Circle = _implements(Circle, shapeInterface);
console.log('circle interface implemeted correctly');
const circle = new Circle(10);
console.log(`circle area = ${circle.calculateArea()}\n`);



const Square = _implements(class {
    constructor(edge) {
        this.edge = edge;
    }
    calculateArea() {
        return this.edge * this.edge;
    }
    test(a, b) {

    }
}, shapeInterface);
console.log('square interface implemeted correctly');
const square = new Square(12);
console.log(`square area = ${square.calculateArea()}\n`);