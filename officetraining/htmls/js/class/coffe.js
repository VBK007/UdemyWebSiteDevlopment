class TrojanCoffee{
    _water = 0 ; //protected variable
    constructor(power)
    {
        this._power = power;
    }
    get waterAmount()
    {
        return this._water;
    }

    set waterAmount(value)
    {
        this._water =   (value>0)? o : value;
    }
    get power()
    {
       return this._power; 
    }

}
class AbcCoffee extends TrojanCoffee{
    constructor (power,brand)
    {
        super(power);
        this._brand = brand;
    }

    display(){
        console.log(`These are the way to download the setter and getter value of the application \n ${this.power}`)
    }

    maxPower(value)
    {
        if(value>5)
        {
            this._power =  this._power*10;
        }
    }
}


let c1
