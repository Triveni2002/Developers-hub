import React from 'react';
import {Link} from 'react-router-dom';



const Home = () => {
    return (

    <div style={{
        textAlign: "center",
      
      backgroundColor:"white",height:2000,width:1500
     
        
        
      }}>
            <nav className="navbar bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:10,paddingLeft:10,paddingRight:10,backgroundColor:'black'}}>
                <h1>
                    <Link to='/' style={{color:"white"}}><i className="fas fa-code"></i>Developers Hub</Link>
                </h1>
               
                <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Register">Register</Link></button><br></br>
                <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Login">Login</Link></button><br></br>
                
            </nav>
            <section className="landing">
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large" style={{fontSize:50,color:"#00bfff"}}>Developers Hub</h1>
                        <p className="lead" style={{fontSize:25}}>
                            Create a developer profile/portfolio, share posts and get help from other Developers 
                        </p><br></br>
                        <div className="buttons">
                            <button style={{backgroundColor:'#00bfff',borderRadius:30,padding:10}}><Link to="/Register" className="btn btn-primary">Sign Up</Link></button><br></br><br></br>
                            <button style={{backgroundColor:'#00bfff',borderRadius:30,padding:10}}><Link to="/Login" className="btn btn-light">Login</Link></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home


