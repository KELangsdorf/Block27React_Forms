import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
//Looked up React Password Checklists! 
import PasswordChecklist from "react-password-checklist";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [setSubmit, submittedName] = useState("")

  async function handleSubmit(event) {
    event.preventDefault();
    submittedName(username);

    try {
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      setToken(data.token);
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2 className="p-3 mb-2 bg-primary text-white">Sign Up</h2>
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <label>
          
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>

        <PasswordChecklist
          rules={["minLength", "specialChar", "number", "capital"]}
          minLength={8}
          value={password}
          onChange={(isValid) => {}}
        />
        <button className="p-3 mb-2 bg-primary text-white" type='submit'>Submit!</button>
      </form>
      {submittedName && <h3>Welcome! {setSubmit}</h3>}
    </>
  );
}
