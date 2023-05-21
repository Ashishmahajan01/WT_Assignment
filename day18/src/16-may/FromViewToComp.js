import "./ex1.css"
export default function FromViewToComp()
{
    let textvalue=""
    function textHandler(event)
    {
        textvalue = event.target.value
        console.log("you entered=>",textvalue)
    }

    function btnhandler()
    {
        console.log(textvalue.toUpperCase())
    }

     function handler1(e)
     {
          let targetname = e.target.name
          if(targetname == "colors")
            console.log("red green blue")
            if(targetname == "weekdays")
                console.log("mon tues wed")
     }  

    return <div>
        <input type="text" onBlur={textHandler} />
        <br></br>
        <button onClick={btnhandler}>show on console</button>

        <div className="bordered">
            <button name="colors" onClick={handler1}>colors</button>
            <br></br>
            <button name="weekdays" onClick={handler1}>weekdays</button>
        </div>

    </div>

}