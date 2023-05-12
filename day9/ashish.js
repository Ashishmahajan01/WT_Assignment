//Static non static concept code 
//non static cannot be chane with class name
//static can only change with class name

class Ashish {

    static a = 10;
    temp = 20;

    show() {
        console.log(Ashish.a, this.temp)
    }
}

let ashu = new Ashish()
Ashish.a = 20
Ashish.temp = 50
//ashu.temp = 100
ashu.show()