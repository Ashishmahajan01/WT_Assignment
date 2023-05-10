class Product {
    constructor(name, cost, desc) {
        this.pName = name;
        this.pCost = cost;
        this.pDesc = desc;


    }

    showProductdetails(arr) {

        for (let x of arr) {
            console.log(x.pCost)
        }
    }


}




let obj = new Product("eraser", 5, "camlin")
let products = []
products.push(new Product("pen", 10, "blue"))
products.push(new Product("pencil", 20, "Camlin"))
products.push(new Product("Notebook", 70, "Classmate"))
obj.showProductdetails(products);