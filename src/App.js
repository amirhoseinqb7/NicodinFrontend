import React from 'react';
import './App.css';
import EditProfile from './edit profile/Editprofile';
import '../src/components/signin_up.css';
import Login from "./components/login";
import Signup from "./components/signup";
import Error from "./components/error";
import { BrowserRouter as Router , Routes ,Route } from "react-router-dom";


// const AuthContext = createContext();
// console.log(AuthContext);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}  />
          <Route path="/signup" element={<Signup/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </Router> 
    
    </div>
  );
}

export default App;
