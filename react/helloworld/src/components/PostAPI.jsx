import React, { useState } from "react";
import axios from "axios";

function PostAPI() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login(event) {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:8888/user/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }

  return (
    <>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default PostAPI;
