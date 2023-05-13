export default class Product
{
    constructor(pn,pcost,brand)
    {
        this.productName=pn
        this.pcost=pcost
        this.brandName= brand
    }

    show()
    {
        console.log("the product info is :",this.productName,this.pcost,this.brandName)
    }
}