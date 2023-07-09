/*import React, { useState } from "react";

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" /><br></br><br></br>
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="****" id="password" name="password" /><br></br><br></br>
                <button type="submit">Log In</button><br></br><br></br>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
export  default Login*/

import React,{useState} from 'react';
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [auth,setAuth] = useState(false);
    const [data,setData] = useState({
        email : '',
        password : '',
    })
    const changeHandler= e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
       axios.post('http://localhost:5000/Login',data).then(
        res => {localStorage.setItem('token',res.data.token);setAuth(true)}
       )
    }
    if(auth){
        return (
            <Navigate to="/Dashboard" replace={true} />
        )
      }
    return(
        <div style={{textAlign:"center",backgroundColor:'white',height:1200}}>
            <nav className="navbar bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:10,paddingLeft:10,paddingRight:10,backgroundColor:'black'}}>
 <h1>
   <Link to="/" style={{color:"white"}}><i className="fas fa-code"></i>Developers Hub</Link>
 </h1>

  <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Register">Register </Link></button>
  <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Login">Login </Link></button>
</nav>
<section className="container">
  <h1 className="large text-primary" style={{fontSize:50,color:"#00bfff"}}>Sign Up </h1>
  <p className ="lead" style={{fontSize:25}}><i className="fas fa-user"></i> Sign into Your Account </p>
  <form className="form" onSubmit={submitHandler} autoComplete="off">
  
  <div className="form-group">
    <input type="email" placeholder="Email Address" name="email" onChange={changeHandler}  style={{height:20,width:300}} required />
   </div><br></br>
<div className="form-group">
   <input
     type="password"
     placeholder="Password"
     name="password" 
     onChange={changeHandler} style={{height:20,width:300}} />
</div><br></br>
 
   <input type="submit" className="btn btn-primary" value="Login" style={{borderRadius:30,padding:10,backgroundColor:'#00bfff'}}/>
</form>
<p className="my-1"> Don't have any account?<Link to="/Register">Sign Up </Link>
</p>
</section>

        </div>
    )
}

export default Login