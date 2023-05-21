export default function C1s()
{
    let inputdata=""
    
    //sessionStorage.setItem("data2","hi")

    return <div>
        <input 
        type="text" 
        
        onBlur={(e)=>{inputdata=e.target.value
            localStorage.setItem("data",inputdata)
            localStorage.setItem("info",JSON.stringify({id:2,name:"WWW"}))
        }}
        
        
        />
    </div>
}
