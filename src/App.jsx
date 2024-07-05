import { useState } from "react"
import Fromerror  from "./components/Fromerror";
function App() {
 let[name,setName]=useState("");
 let [email,setEmail]=useState("");
 let [password,setPassword]=useState("");
 let[error,setError]=useState({ name:"",
 email:"",
 password:""
 });
 let handleClick=(e)=>{
   setError((prev)=>({...prev,name:""}));
    setError((prev)=>({...prev,email:""}));
     setError((prev)=>({...prev,password:""}));
 e.preventDefault();
 if (!name) {
        setError((prev)=>({...prev,name:"Name Invalid"}));
      }
      if (!email) {
      setError((prev)=>({...prev,email:"Email Invalid"}));
      }
      if (!password) {
       setError((prev)=>({...prev,password:"Password Invalid"}));
      }
 }

  return (
    <>
      <form action="">
      <label htmlFor="">Full Name</label>
      <input type="text"  value={name} onChange={(e)=> setName(e.target.value)} />
        <Fromerror  fromerror={error.name}/>
       <label htmlFor="">Email</label>
      <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
        <Fromerror fromerror={error.email}/>
       <label htmlFor="">Password</label>
      <input type="password" onChange={(e)=> setPassword(e.target.value)}/>
       <Fromerror  fromerror={error.password}/>
      <button onClick={handleClick}>Click Me</button>
      </form>
     
    </>
  );
}

export default App;
