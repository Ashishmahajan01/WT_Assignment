class Trial
{
    static data = 0
    data2 = 12
    #data3=300   //private field 

    show()
    {
        console.log(this.data2,Trial.data,this.#data3)
    }

    static show2() //static functions can access only static data
    {
        console.log(this.data2,Trial.data)
    }
}
 
let obj = new Trial()
obj.show()
Trial.show2()
Trial.data=10

let obj2 = new Trial()
obj2.data2 = 100


let obj3 = new Trial()
obj3.data2 = 200



console.log(obj.data2,obj2.data2,obj3.data2)

obj2.show()









