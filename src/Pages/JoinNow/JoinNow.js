import axios from 'axios';
import React,{useState} from 'react'
import WelcomePageSignIn from '../../Components/WelcomPageSignIn/WelcomePageSignIn';

function JoinNow() {
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleJoinNowButton=()=>{
     const data={
        username:username,
        email:email,
        password:password
     }
     axios.post("/create/join",data).then((res)=>{
        localStorage.setItem("auth",res.data.token);
     })
    }
  return (
    <div className='join-now-div'>
        <WelcomePageSignIn
        currentPage={"JoinPage"}
        username={username}
        password={password}
        email={email}
        setPassword={setPassword}
        setUsername={setUsername}
        setEmail={setEmail}
        loginButtonHandler={handleJoinNowButton}></WelcomePageSignIn>
    </div>
  )
}

export default JoinNow