import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
export default function Authenticate({ token }) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
  
    async function handleClick() {
      try {
        console.log(token)
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const result = await response.json();
    setSuccessMessage(result.message)
      } catch (error) {
        setError(error.message);
      }
    }
  
    return (
      <div>
              <h2 className="p-3 mb-2 bg-primary text-white">Authenticate</h2>
              {successMessage && <p>{successMessage}</p>}
              {error && <p>{error}</p>}
              <button className="p-3 mb-2 bg-primary text-white" onClick={handleClick}>Authenticate Token!</button>
      </div>
    );
  }
