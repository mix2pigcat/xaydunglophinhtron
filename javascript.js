function circle(radius) {
    this.radius = radius;
    this.getRadius = function () {
        return this.radius;
    }
    this.getArea = function () {
        return Math.PI * this.radius * this.radius;
    }

    this.getChuvi = function(){
        return 2 * this.radius * Math.PI;
    }
}
let a=new circle(2) ;
let radius=a.getRadius();
let area=a.getArea();
let chuvi=a.getChuvi();
alert("radius: "+radius+";area: "+area+"chuvi: "+chuvi);