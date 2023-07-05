import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import "./Login.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <img src="/logo.png" alt="Logo" className="logo" />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "5px" }}
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "30px" }}
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={{ width: "10vh", marginTop: "30px" }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
