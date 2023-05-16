import React from 'react';

export default class Login extends React.Component {
    sayHello(name) {
        alert(`Hello, ${name}`);    
    }
    
    render() {
        return <center>
            Username: <input type='text' name="username" placeholder='Username' id="id1"></input><br></br><br></br>
            Password: <input type='password' placeholder='Password'></input><br></br><br></br>
            <button>Login</button>
        </center>
    }
}