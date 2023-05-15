//setInterval(() => { console.log("hello") }, 1000)
let id = setInterval(() => { console.log("hello") }, 1000)

clearInterval(id)

setTimeout(() => { clearInterval(id) }, 6000)