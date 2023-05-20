export default function Header()
{

let styleobj = { backgroundColor:"yellow", textAlign:"center",borderStyle:"solid",borderWidth:"px"}

return <div style={styleobj}>
    <h1>IET Website </h1>
    <p>{new Date().toString()}</p>
</div>


}