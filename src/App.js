import './App.css';
import React, {useState, useEffect} from "react";
import Axios from 'axios';

function App() {

  const[UserName, setUser] = useState("");
  const[Password, setPassword] = useState("");

  const submit = () => {
    Axios.post('http://localhost:3001/api/insert', {
      UserName: UserName, 
      Password: Password,
    }).then(() => {
      alert('successful insert');
    });
  };

  return (
    <div>
        <div className="intext0">
          SIGN UP PAGE
        </div>
        <form>
          <label htmlFor="uname">User Name:</label><br />
          <input type="text" name="UserName" onChange={(e) => {
            setUser(e.target.value);
          }}/>
          <br />
          <br />
          <label htmlFor="fname">Password:</label><br />
          <input type="text" name="Password" onChange={(e) => {
            setPassword(e.target.value);
          }} />
          <br />
          <br />
          <label htmlFor="fname">First name:</label><br />
          <input type="text" id="fname" name="fname" />
          <br />
          <br />
          <label htmlFor="lname">Last name:</label><br />
          <input type="text" id="lname" name="lname" />
          <br />
          <br />
          <label htmlFor="em">Email:</label><br />
          <input type="text" id="em" name="pem" />
        </form>
        <br />
        <button onClick = {submit}>Sign up</button>

      </div>
      
  );
}

export default App;
