import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm';
import {users} from './users';
import { useHistory } from "react-router-dom";

const App = () => {
  const [error, setError] = useState("");
  const history = useHistory();

  const logIn = (loginInfo) => {
    users.map((person) => {
      if(loginInfo.email === person.email && loginInfo.password === person.password){
        localStorage.setItem('userEmail', person.username);
        localStorage.setItem('userRole', person.role);
        history.push("/home");
      } else {
        setError("Incorrect data");
      }
    });
  };

  return (
    <div className="App">
      <LoginForm logIn = { logIn } error={ error }/>
    </div>
  );
}

export default App;
