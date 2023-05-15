let p = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("The Asynchronous operation completed")
        resolve("Success")
    }, 6000)
})
console.log("The Promise", p);

p.then((res) => {
    console.log(res, "Hurry");
})