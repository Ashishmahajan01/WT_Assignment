function f1() {
    console.log("hi")
}

function f2() {
    console.log("hello")
}

function main() {
    console.log("1")
    setTimeout(f1, 0)
    setTimeout(f2, 100)
    let p = new Promise((res, rej) => {
        let num = Math.random() * 1000
        if (num < 100)
            res("SUCCEEDED" + num)
        else
            rej("REJECTED " + num)
    })
    console.log("2")
    //  p.then((resolve) => { console.log(resolve) })
    p.catch((reject) => { console.log(reject) })
}

main()
