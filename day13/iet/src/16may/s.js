import { useState } from "react"

export default function Ashish() {
    let [titlecase, settitle] = useState("zhatushejwan chatni")
    let [a, seta] = useState("nothing")

    function swaraj(e) {

        a = e.target.value

    }
    function akash() {
        a = a.toUpperCase()
        console.log(a)
        seta(a)


        //Title case logic
        //a
        let str = a

const spacesCount = str.split(' ').length - 1;
let count = 1
let arr = [0]
let m = 1
console.log(str)
for (let i = 1; i <= spacesCount; i++) {
    let temvar = str.substring(m)
    let nextind = temvar.indexOf(" ")
    count = arr[i - 1] + nextind + 1
    arr[i] = count
    m = count + 1

}
let str1=""
let str2 =""
let finalstr=""
for (let i = 0; i <= spacesCount ; i++) {
    if(i==0){
        str1 = str.slice(arr[i],1).toUpperCase();
        str2 = str.slice(arr[i]+1,arr[i+1]+1).toLowerCase() 
        finalstr = finalstr.concat(str1,str2)  
        str1 =''
        str2='' 
    }
    if(i == spacesCount){
        str1 = str.slice(arr[i]+1,arr[i]+2).toUpperCase();
        str2 = str.substring(arr[i]+2).toLowerCase()
        finalstr = finalstr.concat(str1,str2)
        str1 =''
        str2=''
    }
    if(i>0 && i< spacesCount){
        str1 = str.slice(arr[i]+1,arr[i]+2).toUpperCase();
        str2 = str.slice(arr[i]+2,arr[i+1]+1).toLowerCase()
        finalstr = finalstr.concat(str1,str2)
        str1 =''
        str2=''
    }
}
titlecase =finalstr


    }


    return <div>
        <input type="text" placeholder="username" onChange={swaraj} />
        <input type="checkbox" onClick={akash} />
        <p>{a}   </p>
        <p>{a.toLowerCase()}</p>
        <p>{titlecase}</p>


    </div>

}