import React,{useState,useEffect} from 'react';
import { Link,Navigate } from 'react-router-dom';
import axios from 'axios';

const Myprofile = () => {
    const [data,setData]=useState(null);
    const [review,setReview] = useState([]);
    useEffect(()=>{
       axios.get('http://localhost:5000/Myprofile',{
        headers : {
            'x-token' : localStorage.getItem('token')
        }
       }).then(res => setData(res.data))
       axios.get('http://localhost:5000/Myreview',{
        headers : {
            'x-token' : localStorage.getItem('token')
        }
       }).then(res => setReview(res.data))
    },[])
    if(!localStorage.getItem('token')){
        return <Navigate to="/Login" replace={true} />
    }
    return (
        <div  style={{
            textAlign: "center",
          
          backgroundColor:'white',height:1200}}>
            <nav calssName="navbar bg-dark" style={{display:'flex',alignItems:'center',justifyContent:'space-between',paddingTop:10,paddingLeft:10,paddingRight:10,backgroundColor:'black'}}>
                <h1>
                    <Link to="/" style={{color:"white"}}><i className="fas fa-code"></i>Developers Hub</Link>
                </h1>
              
                   <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}> <Link to="/Myprofile">My Profile</Link></button>
                    <button style={{borderRadius:30,padding:10,backgroundColor:'white'}}><Link to="/Login">LogOut</Link></button>
            </nav><br></br>
            {data && 
              <section calssName="container">
              <button style={{borderRadius:30,padding:10,backgroundColor:'#00bfff'}}><Link to="/Dashboard" calssName="btn btn-light">Back to Profiles</Link></button><br></br><br></br>
              <div calssName="profile-grid my-1">
                  <div calssName="profile-top bg-primary p-2">
                      <img calssName="round-img my-1" src="https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="
         width="100" height="100" alt="" />
                      <h1 calssName="large" >{data.name}</h1>
                      <p calssName="lead">{data.email}</p>
                      <p>India</p>
                  </div>
                  <div className="profile-github">
                      <h2 calssName="text-primary my-1" style={{fontSize:30,color:"#00bfff"}}>
                          <i calssName="fab fa-github" ></i>Reviews And Ratings
                      </h2>
                      <div calssName="repo bg-white p-1 my-1">
                        {review ?
                        review.map(review => <div>
                            <h4><Link to="#">{review.taskprovider}</Link></h4>
                            <p>
                                {review.rating}/5
                            </p>
                        </div> ): <p>No Review Added Yet</p>
                        }
                          
                      </div>
                      <div calssName="repo bg-white p-1 my-1">
                          <div>
                              <h4 style={{fontSize:25}}>Enter Your Reviews</h4>
                              <form calssName="form" autoComplete="off">
                                  <div calssName="form-group">
                                      <input type="text" placeholder="Enter Your Rating out of 5" name="rating"  style={{height:30,width:300,backgroundColor:"white"}} required />
                                  </div><br></br>
                                  <input type="submit" calssName="btn btn-primary" value="Add Rating" style={{height:30,width:300,color:"#00bfff",backgroundColor:"white"}}/>
                              </form>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
            }
            
        </div>
    )
}
export default  Myprofile