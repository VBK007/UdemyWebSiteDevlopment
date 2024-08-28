let age=60;
var name = "ragu";
{
    age=75;
    console.log('Inside the age'+age)
}
{
    let age=4;
    console.log('Inside the age'+age)
}
console.log('Last age is '+age)


function add(a,b,c)
{
    let result = a+b+c;
    console.log('The additon is'+result);
  return  result;
}

let result = add(10,2,3);

let name1 = 'ragu';
function returnNames(name)
{
    console.log('The name is '+name)
}

returnNames(name1);



function add4()
{
    let sum =0;
    for(let i=0;i<arguments.length;i++)
    {
            sum =sum+arguments[i];
    }
    return sum;
}

console.log(add4(1,2,3,4))
console.log(add4(1,3,4))
console.log(add4(3,4))
console.log(add4(99,2,3,4))
