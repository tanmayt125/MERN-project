import React,{useState} from 'react'
import {Navlink,History, useHistory} from 'react-router-dom'
// hooks is used to get data from form in useState


const Sendnotice=()=>{
  const history=useHistory();
  const [user,setUser] = useState({
    name:"",password:"",pass:""
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
  const res=await fetch('/notice',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
       name,password
    })
  })
  const data = await res.json();
  if(data.status==422||!data){
    window.alert("Invalid registration");
    console.log("invalid registration");
  }
  else{
    window.alert("Notice send successfully");
    console.log("Notice send successfully");
  }
}

  return(
    <div>
      <div class="mx-auto" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '85vh',width:'50%',background: "#f0f0f0",marginTop:"20px"}}>
<form method="POST">
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Topic</label>
    <input type="text" class="form-control" name='name' id='name' aria-describedby="emailHelp"
         value={user.name}
         onChange={handelInputs}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Message</label>
    <input type="text" class="form-control" name='password' id='password' aria-describedby="emailHelp"
         value={user.password}
         onChange={handelInputs}
    />
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Or give file-address</label>
    <input type="text" class="form-control" name='pass' id='pass' aria-describedby="emailHelp"
         value={user.pass}
         onChange={handelInputs}
    />
    <div id="emailHelp" class="form-text">We'll never share your information with anyone else.</div>
  </div>
  <div class="mb-3">
    <label htmlFor="exampleInputEmail1" class="form-label">Upload file</label>
    <input type="file" class="form-control" name='pass' id='pass' aria-describedby="emailHelp"
         value={user.pass}
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
         onClick={PostData}>Send</button>
  </div>
</form>
</div>
    </div>
  )
}

export default Sendnotice