var length = 0;
var breadth =0;

function calulateArea(a,b=20,c=b*area(),d=c+perimeter())
{
    return a+b+c+d;
}
let area = function()
{
    return length*breadth;
}

let perimeter  = function()
{
    return 30;
}

console.log(calulateArea(length=20))
console.log(calulateArea(length=40,breadth=50,70,90))
console.log(calulateArea(length=40,breadth=50))




