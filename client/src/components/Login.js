import React,{useState} from 'react'
import {Navlink,History, useHistory} from 'react-router-dom'
// hooks is used to get data from form in useState


const Login=()=>{
  const history=useHistory();
  const [user,setUser] = useState({
    name:"",password:"",
  });
  let name,value;
  const handelInputs=(e)=>{
     name=e.target.name;
     value=e.target.value;
     setUser({...user,[name]:value});
  }

const PostData=async(e)=>{
  e.preventDefault();
  const {name,password}=user;
  const res=await fetch('/login',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
       name,password
    })
  })
  const data = await res.json();
  if(data.status==422||data.message=="invalid"){
    window.alert("Invalid email or password\nLogin Again!!");
    console.log("invalid email or password");

  }
  else{
    window.alert("Login successfull");
    console.log("Registration Successfull");
    history.push("/home");
  }
}

  return(
    <div>
      <div class="mx-auto" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
<form method="POST">
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">User Name</label>
    <input type="text" class="form-control" name='name' id='name' aria-describedby="emailHelp"
         value={user.name}
         onChange={handelInputs}
    />
    <div id="emailHelp" class="form-text">We'll never share your information with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Password</label>
    <input type="text" class="form-control" name='password' id='password' aria-describedby="emailHelp"
         value={user.password}
         onChange={handelInputs}
    />
    <div id="emailHelp" class="form-text">We'll never share your information with anyone else.</div>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <div class="mb-3">
  <button type="submit" class="btn btn-primary" name='singnup' id='singnup'
         value='register'
         onClick={PostData}>Login</button>
  </div>
</form>
</div>
    </div>
  )
}

export default Login