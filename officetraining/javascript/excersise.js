const principalAmount =1000;
function sip(a,b,c)
{
    let result = a*b*c/100;

    return result;
}

let sip1 = function(a,b,c){
    return sip(a,b,c);
}

let sip3 = (a,b,c) => sip1(principalAmount,5,3)


console.log('Value amount is '+ (principalAmount + sip3(principalAmount,5,3)))