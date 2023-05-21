// Activate the login screen created yesterday -- if 
// [
// { uname: "xxx" ,password :"123"},
// { uname: "rrr" ,password :"13"},
// { uname: "xeex" ,password :"23"},
// ]
// When user enters uname and password that matches any of the 
// above show a message SUCCESSFUL LOGIN on <p> tag
// Else show a message FAILED on <p> tag


import react from "react";

export default class Loginclass extends react.Component
{
    constructor()
    {
        super()
        this.users = [
             { uname: "xxx" ,password :"123"},
             { uname: "rrr" ,password :"13"},
             { uname: "xeex" ,password :"23"},
            ]
        
        this.uname = ""
        this.pwd= ""
        
        this.textreceiver=this.textreceiver.bind(this)
        this.textreceiver1=this.textreceiver1.bind(this)
        this.checkinfo=this.checkinfo.bind(this)

        this.state ={res:""}
        //this.state ={pass:""}
    }

   
       

        textreceiver(e)
        {
            this.uname = e.target.value
          // this.pwd=e.target.Password
            console.log(this.uname)
            //this.setState({sqr:s})
        }
        textreceiver1(e)
        {
            this.pwd=e.target.value
            console.log(this.pwd)
        }

          checkinfo()
         {
            let found=false
            this.users.forEach((user)=>{
                if(user.uname == this.uname && user.password == this.pwd)
                {
                    found=true
                }
            })

                //if((this.uname==="xxx" && this.pwd==="123") || (this.uname==="zzz" && this.pwd=="23") || (this.uname=="yyy" && this.pwd=="12") )
                if(found)
                {
                    console.log(this.uname)
                    console.log("successs.............")
                    this.setState({res:"Successs..........."})
                }

                else
                {
                    console.log("Fail.............")
                    this.setState({res:"fail..........."})

                }
            //    for(let i=0;i<this.info.length;i++)
            //    console.log(this.info.length)
              // if(this.info.[i]== )
         }
    render()
    {

       
        return <div>USERNAME: <input type="text"  onBlur={this.textreceiver}/>
        PASSWORD: <input type="text"  onBlur={this.textreceiver1}/>

        <br></br> <br></br>
        <input type="submit" value="Login" onClick={this.checkinfo} />
        <p>Result={this.state.res}</p>
        
        </div>
    } 
}