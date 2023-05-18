import '../CSS/Child.css'
export default function SelectOptions({no1,no2,f1,msg}){


    function doCalculation(e){
        // console.log(no1);
        // console.log(no2);
        // console.log(f1);
        switch (e.target.value) {
            case 'ADD':
                    let a=no1+no2;
                    f1(a)
                break;
            case 'SUBTRACT':
                let b=no1-no2;
                f1(b)
                break;
            case 'MULTIPLY':
                let c=no1*no2;
                f1(c)
                break;
            case 'DIVIDE': 
                if(no2 == 0){msg("CAN NOT DIVIDE BY ZERO")}
                else{let d=no1/no2;msg("");f1(d)}                 
                break;

            case 'POWER':
                let f=Math.pow(no1,no2);
                f1(f)
                break;

            case 'REMAINDER':
                let g=no1 % no2;
                f1(g)
                break;
        
            default:
                break;
        }
    }


    return <div>

        <select id="dropdown" className="btn btn-secondary btn-lg dropdown-toggle border border-danger" onChange={doCalculation}>
            <option>SELECT OPTIONS</option>
            <option value='ADD'>ADD</option>
            <option value='SUBTRACT'>SUBTRACT</option>
            <option value='MULTIPLY'>MULTIPLY</option>
            <option value='DIVIDE'>DIVIDE</option>
            <option value='POWER'>POWER</option>
            <option value='REMAINDER'>REMAINDER</option>
        </select>
    
    </div>
}