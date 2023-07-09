import React,{useState,useEffect} from 'react';
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';
const Dashboard = () => {
    const [data,setData]=useState([]);
    useEffect(()=>{
       axios.get('http://localhost:5000/allprofiles',{
        headers : {
            'x-token' : localStorage.getItem('token')
        }
       }).then(res => setData(res.data))
    },[])
    if(!localStorage.getItem('token')){
        return <Navigate to="/Login" replace={true} />
    }
    return (
        <div style={{ textAlign:'center',
      
        backgroundColor:'white',height:2100}}>
            <nav className="navbar bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:10,paddingLeft:10,paddingRight:10,backgroundColor:'black'}}>
  <h1>
    <Link to="/" style={{color:'white',}}><i className="fas fa-code"> Developers Hub</i></Link>
 </h1>

   <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Myprofile">My Profile</Link></button><br></br>
   <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Login" onClick={() => localStorage.removeItem('token')}>Logout</Link></button>
 
</nav>
<section className="cointainer">
 <h1 className="large text-primary"style={{fontSize:50,color:'#00bfff'}}> Developers</h1>
 <p className="lead" style={{fontSize:25}}>
    <i className="fab fa-connectdevelop"></i>Browse and connect with developers
 </p>
 
 <div className="profiles">
    {data.length>=1 ? 
    data.map(profile =>
        <div className="profile bg-light">
        <img
         className="round-img"
         src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
         width="100" height="100" 
         style={{left:80}

         }
         alt=""
        />
        <div>
        <h2 > {profile.name}</h2>
        <p > {profile.email}</p>
        <p > {profile.skill}</p>
        <p > India</p>
        <button style={{borderRadius:30,padding:10,backgroundColor:'#00bfff'}}><Link to='/Indprofile' className="btn btn-primary">View Profile</Link></button><hr></hr>
        </div> <br></br>
        
           
           
        </div> )
    : null}
   
    </div>
</section>
</div>
    )
}
export default Dashboard