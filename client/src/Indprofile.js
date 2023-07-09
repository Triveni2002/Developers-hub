import React from 'react';
import { Link} from 'react-router-dom';

const Indprofile = () =>{
    
    return (
        <div  style={{textAlign: "center",
      
        backgroundColor:'white',height:1200}}
       >
             <nav calssName="navbar bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:10,paddingLeft:10,paddingRight:10,backgroundColor:'black'}}>
                <h1>
                    <Link to="/" style={{ color:"white"}}><i className="fas fa-code"></i>Developers Hub</Link>
                </h1>
                    <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Myprofile">My Profile</Link></button><br></br>
                    <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Login">LogOut</Link></button>
            </nav><br></br>
            <section calssName="container">
              <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Myprofile" calssName="btn btn-light">Back To Profiles</Link></button>
              <div calssName="profile-grid my-1">
                  <div calssName="profile-top bg-primary p-2">
                      
                     
                  </div>
                  <div className="profile-github">
                      <h2 calssName="text-primary my-1"style={{fontSize:50,color:"#00bfff"}}>
                          <i calssName="fab fa-github"></i>Reviews And Ratings
                      </h2>
                      
                      <div calssName="repo bg-white p-1 my-1">
                          <div>
                              <h4 style={{fontSize:25}}>Enter Your Reviews</h4>
                              <form calssName="form" autoComplete="off">
                                  <div calssName="form-group">
                                      <input type="text" placeholder="Enter Your Rating out of 5" name="rating"  style={{height:20,width:300}} required />
                                  </div><br></br>
                                  <input type="submit" calssName="btn btn-primary" value="Add Rating" style={{height:20,width:300,color:"#00bfff"}}/>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

        </div>
    )
}
export default Indprofile