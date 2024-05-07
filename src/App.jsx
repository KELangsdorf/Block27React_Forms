import { useState } from 'react'
import './App.css'
import Authenticate from "./components/Authenticate";
import SignUpForm from "./components/SignUpForm";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <div className="App">
      <SignUpForm setToken={setToken} />         
      <Authenticate token={token}/>
          
      </div>
  );
}

export default App
