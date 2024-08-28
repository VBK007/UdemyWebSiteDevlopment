class CofeeMachine_new{
 
    #waterLimit = 200;   //private variable
 
    get water(){
        return this.#waterLimit;
    }
 
    set waterAmount(value){
        this.#waterLimit = this.#fixWaterAmount(value)
    }
 
    #fixWaterAmount(value){
     if( value < 0) return 0;
 
     if( value >this.#waterLimit && value <=250) return this.#waterLimit
 
     if(value> 250 && value <500) return value;
    }
 
    display(){
        return this.#fixWaterAmount(450);
    }
}
 
let cf = new CofeeMachine_new();
 
cf.waterAmount = 400;
console.log(cf.water);
let a = cf.display();
console.log('The water limiti running from private emthod is' + a);