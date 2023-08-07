import React, { useState } from "react";

function FormHandling() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  //   function handleUsernameChange(e) {
  //     setUsername(e.target.value);
  //   }

  return (
    <>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </>
  );
}

export default FormHandling;
