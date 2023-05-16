import "./ex1.css"
export default function TrialProps(props)
{
    let n = props.num1
    console.log(typeof(n))


    if(props.func1 !== undefined)
    props.func1()  //alpha function of App16 will get called

    return <div className="bordered">
        <p>{props.num1} {typeof(props.num1)}</p>
        <p>{props.str}{typeof(props.str)}</p>
        <p>{props.arr[0]} {typeof(props.arr) } </p>
        <p> xcoordinate = {props.point.xcoordinate}</p>
        <p>{props.flag?"hi":"bye"}</p>

    </div>

}