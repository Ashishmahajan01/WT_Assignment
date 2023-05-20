export default function Add({num1:a,num2:b}){

    //let a = props.num1
    //let b = props.num2
    let sum = a + b

    return <div>
        <p>Sum of {a} + {b} = {sum}</p>
    </div>
}