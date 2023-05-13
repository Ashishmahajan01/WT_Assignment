class MyDate
{
    #_month
    constructor()
    {
        this.#_month=1
    }

    get month()
    {
        console.log("getter for month is called")
        return this.#_month
    }

    set month(m)
    {
        console.log("setter for month is called")
        if(m>=1 && m<=12){
            this.#_month =m
        }
        else
        {
            console.log("the setter did not set wrong month")
        }
    }

}

let d =new MyDate()
d.month=10  //setter gets called

console.log("month=",d.month) //getter gets called


