/*import { useState } from 'react';
 
export default function Register() {
 
  // States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile,setMobile] = useState('');
  const [skill,setSkill] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword,setConfirmpassword] =useState('');
 
  // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
 
  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };
 

  const handleMobile = (e) => {
    setMobile(e.target.value);
    setSubmitted(false);
  };

  const handleSkill = (e) => {
    setSkill(e.target.value);
    setSubmitted(false);
  };

  
  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };


  const handleConfirmpassword = (e) => {
    setConfirmpassword(e.target.value);
    setSubmitted(false);
  };
 
  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || mobile==='' || skill==='' || password === '' || confirmpassword==='') {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? '' : 'none',
        }}>
        <h1>User {name} successfully registered!!</h1>
      </div>
    );
  };
 
  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };
 
  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>
 
    
      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
 
      <form>
        
        <label className="label">Name</label>
        <input onChange={handleName} className="input"
          value={name} type="text" /><br></br><br></br>
 
        <label className="label">Email</label>
        <input onChange={handleEmail} className="input"
          value={email} type="email" /><br></br><br></br>


        <label className="label">Mobile</label>
        <input onChange={handleMobile} className="input"
          value={mobile} type="text" /><br></br><br></br>

       <label className="label">Skill</label>
        <input onChange={handleSkill} className="input"
          value={skill} type="text" /><br></br><br></br>
 
        <label className="label">Password</label>
        <input onChange={handlePassword} className="input"
          value={password} type="password" /><br></br><br></br>

        <label className="label">Confirmpassword</label>
        <input onChange={handleConfirmpassword} className="input"
          value={confirmpassword} type="text" /><br></br><br></br>
 
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}*/



import React,{useState} from 'react';
import { Link } from 'react-router-dom';


const Register = () => {
    const [data,setData] = useState({
        name : '',
        email : '',
        mobile : '',
        skill : '',
        password : '',
        confirmpassword : ''
    })
    const changeHandler= e =>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e =>{
        e.preventDefault();
        console.log(data)
    }
    return (
        <div style={{
          textAlign: "center",
        
        backgroundColor:'white',height:1200
        }}>
            <nav className="navbar bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:10,paddingLeft:10,paddingRight:10,backgroundColor:'black'}}>
 <h1>
   <Link to="/" style={{ color:"white"}}><i className="fas fa-code"></i>Developers Hub</Link>
 </h1>

  <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Register">Register </Link></button><br></br>
  <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Login">Login </Link></button>
</nav>
<section className="container">
  <h1 className="large text-primary" style={{fontSize:50,color:"#00bfff"}}>Sign Up</h1>
  <p className ="lead" style={{fontSize:30}}><i className="fas fa-user" ></i> Create Your Account </p>
  <form className="form" onSubmit={submitHandler} autoComplete="off">
  <div className="form-group">
     <input type="text" placeholder="Name" name="name" onChange={changeHandler}  style={{height:20,width:300}} required/>
   </div><br></br>
  <div className="form-group">
    <input type="email" placeholder="Email Address" onChange={changeHandler} name="email"  style={{height:20,width:300}} />
   </div><br></br>
<div className="form-group">
   <input
     type="text"
     placeholder="Mobile"
     onChange={changeHandler}
     name="mobile" style={{height:20,width:300}} />
</div><br></br>
<div className="form-group">
   <input
     type="text"
     placeholder="Skill"
     onChange={changeHandler}
     name="skill" style={{height:20,width:300}} />
</div><br></br>
<div className="form-group">
   <input
     type="password"
     placeholder="Password"
     onChange={changeHandler}
     name="password" style={{height:20,width:300}} />
</div><br></br>
<div className="form-group">
   <input
     type="password"
     placeholder="Confirmpassword"
     onChange={changeHandler}
     name="confirmpassword" style={{height:20,width:300}} />
</div><br></br>
<input
     type="submit"
     className="btn btn-primary"
     value="Register" style={{borderRadius:30,padding:10,backgroundColor:'#00bfff'}}/>
</form>
<p className="my-1">
    Already Have an Account?<Link to="/Login">Sign In</Link>
</p>
</section>
   
        </div>
    )
}

export default Register


