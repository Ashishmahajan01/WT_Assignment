class Book
{
    constructor(bn,cost)
    {
        this.bookName = bn
        this.bookCost = cost
    }

   showDetails()
   {
    console.log("the book is ",this.bookName)
   }
}

let obj = new Book("learning react",300)
console.log(obj.bookName,obj.bookCost)


let books = []
books.push(new Book("B1",200))
books.push(new Book("B3",400))
books.push(new Book("B2",100))

let total=0
for(b of books)
{
    console.log(b.bookCost)
    total= total + b.bookCost
}

console.log(total)

for(x in obj)
{
    console.log(x,"=",obj[x])
}



