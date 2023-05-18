//  Write a React Component to accept user details
// name
// email
// dropdown Graduate, PG , UnderGrad
// If the user selects Graduate show GraduateComponent degree, year,
// final year score, univ
// If the user selects PG show PGComponent year, Thesis subject
// If the user selects UnderGrad show UnderGradComponent SSC , HSC
// ( USE conditional Renderring )
import { useState } from "react";
import GraduteDetails from "./gradute";
import PGform from "./pg";
import UnderGradDetails from "./UnderGradute";

export default function AcceptDetails(){
    // let[UG,setUG]=useState();
    // let[G,setG]=useState();
    // let[PG,setPG]=useState();
    let[value,setvalue]=useState();
    function ShowDetails(e){
        switch (e.target.value) {
            case "SE":
                    setvalue(e.target.value)
                        break;
            case "UG":
                    setvalue(e.target.value)
                        break;
            case "G":
                    setvalue(e.target.value)
                        break;
            case "PG":
                    setvalue(e.target.value)
                        break;
            default:
                break;
        }
        
    }
   return <div>

        <h3>Enter User Details</h3>
        <input type="text" placeholder="NAME"></input>
        <input type="text" placeholder="EMAIL ADDRESS"></input>

        <select onChange={ShowDetails}>
            <option value="SE">SELECT EDUCATION</option>
            <option value="UG">Under Gradute</option>
            <option value="G">Gradute</option>
            <option value="PG">Post Graduate</option>
        </select>
        {/* <UnderGradDetails/>
        <GraduteDetails/>
        <PGform/> */}
        {/* {UG =="UG" ?  <UnderGradDetails/> :""}
        {G =="G" ?  <GraduteDetails/> :""}
        {PG =="PG" ?  <PGform/> :""} */}

        {value =="SE" ?  "" :""}   
        {value =="UG" ?  <UnderGradDetails/> :""}
        {value =="G" ?  <GraduteDetails/> :""}
        {value =="PG" ?  <PGform/> :""}

        {/* switch (value) {
            case 'UG':
                <UnderGradDetails/> 
                break;
        
            default:
                break;
        } */}



    </div>
}