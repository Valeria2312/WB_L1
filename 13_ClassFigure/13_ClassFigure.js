//13.	Задача на классы и наследование: создайте базовый класс Shape (фигура),
// который имеет методы для расчета площади и периметра. Затем создайте подклассы,
// представляющие различные фигуры, такие как прямоугольник, круг и треугольник.
// Реализуйте методы расчета площади и периметра для каждой фигуры.

class Shape {
    constructor(arrSides, radius, height) {
        this.arrSides = arrSides;
        this.radius = radius;
        this.height = height;
    }
    getPerimeterFiguresWithCorners() {
       return this.arrSides.reduce((sum, current) => sum + current, 0)
    }
    getPerimeterFiguresWithCircle() {
        return  2 * (Math.PI * this.radius);
    }
    getSquareFiguresWithTriangle() {
        return  2 / (this.height * (this.arrSides[1] / 2))
    }
    getSquareFiguresWithCircle() {
        return Math.PI * (this.radius ^ 2)
    }
    getSquareFiguresWithRectangle() {
        return  this.arrSides.reduce((sum, current) => sum * current, 0)
    }
}
class Triangle extends  Shape {
    constructor(arrSides, height) {
        super();
        this.arrSides = arrSides;
        this.height = height;
    }
    getPerimeterFiguresWithCorners() {
        return this.arrSides.reduce((sum, current) => sum + current, 0)
    }
    getSquareFiguresWithTriangle() {
        return   (this.height * (this.arrSides[1] / 2)) / 2
    }
}


class Circle extends Shape {
constructor(radius) {
    super();
    this.radius = radius;
}
    getPerimeterFiguresWithCorners(){
    console.log(this.radius)
        return  2 * (Math.PI * this.radius);
    }
    getSquareFiguresWithTriangle() {
        console.log(this.radius)
        return Math.PI * (this.radius ^ 2)
    }
}
class Rectangle extends Shape {
constructor(arrSides) {
    super();
    this.arrSides = arrSides;
}
    getPerimeterFiguresWithCorners() {
        return this.arrSides.reduce((sum, current) => sum + current, 0)
    }
    getSquareFiguresWithRectangle() {
        return  this.arrSides.reduce((sum, current) => sum * current)
    }
}

const rectangle = new Rectangle([10,5])
console.log("Прямоугольник периметр",rectangle.getPerimeterFiguresWithCorners())
console.log("Прямоугольник площадь",rectangle.getSquareFiguresWithRectangle())

const triangle = new Triangle([10,10,5], 6);
console.log("Треугольник периметр",triangle.getPerimeterFiguresWithCorners())
console.log("Треугольник площадь",triangle.getSquareFiguresWithTriangle())

const circle = new Circle(10);
console.log('Круг периметр',circle.getPerimeterFiguresWithCircle())
console.log('Круг площадь',circle.getSquareFiguresWithCircle())
