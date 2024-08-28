class Product{
    constructor(prodname,price,discount)
    {
        this._prod_name= prodname;
        this.price = price;
        this.discount =discount;
    }

    discountedPrice()
    {
        console.log(`The price after the discount is 
            ${(this.price-
            (this.price*(this.discount/100)))}`);
    }
    set prodname(prodname)
    {
        this._prod_name = prodname;
    }
}


class ProductBrand extends Product{
    constructor (prodname,product,price,brand,discount)
    {
        super(prodname,price,discount);
        this._brand=brand;
        this.product = product;
    }
    details()
    {
        console.log(`The product is ${this.product}`);
        console.log(`The product name is ${this._prod_name}`);
        console.log(`The price is ${this.price}`);
        console.log(`The brand is ${this._brand}`);
        console.log(`The disount is ${this.discount}`);
    }  
}

let c1 = new ProductBrand('TATA','Watch','5000','TATA',10);
c1.details();
c1.discountedPrice();
let c2 = new ProductBrand('SONY','LED TV','8000','SONY',20);
c1.details();
c2.discountedPrice();
let c3 = new ProductBrand('Samsung','Oven','20000','Samsung',10);
c3.details()
c3.discountedPrice();
let c4 = new ProductBrand('PUMA','Showes','7000','PUMA',10);
c4.details();
c4.discountedPrice();