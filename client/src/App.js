import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const resp = await axios.get("/name");
    setUsername(resp.data);
  };

  return (
    <div>
      <h1>My title of the page</h1>
      <p>Response: {username}</p>
    </div>
  );
}

export default App;
