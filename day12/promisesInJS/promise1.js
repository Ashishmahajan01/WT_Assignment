let p = new Promise((res, rej) => {
    rej("somthing Went wong!!!")
})
console.log("The promise", p)

p.catch((rej) => { console.log(rej, "1") })