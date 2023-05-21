export default function ShowEmployee({id,first_name,last_name,email,avatar})
{

   return <div style={{float:"left",width:"fit-content",borderStyle:"groove", borderWidth:"2px",borderColor:"blue"}}>

    <p>{id}</p>
    <p>Name : {first_name+" "+last_name}</p>
    <p>Email : {email}</p>
    <p><img src={avatar} alt="" width="100" height="100"></img></p>

   </div>

}