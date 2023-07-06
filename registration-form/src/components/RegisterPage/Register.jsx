import React, { useState } from "react";
import { TextField, Button, Grid, Typography } from "@material-ui/core";
import "./Register.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [nationality, setNationality] = useState("");

  const handleRegistration = () => {
    // Perform registration logic here
    // You can access the form data in the state variables
    console.log({
      username,
      password,
      email,
      phoneNumber,
      address,
      pincode,
      nationality,
    });
  };

  return (
    <form className="register-form">
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
            style={{ width: "50vh", marginTop: "5px" }}
            label="Password"
            type="password"
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "5px" }}
            label="Gmail"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "5px" }}
            label="PhoneNumber"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "5px" }}
            label="Address"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "5px" }}
            label="Pincode"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <TextField
            style={{ width: "50vh", marginTop: "5px" }}
            label="Nationality"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleRegistration}
            style={{ width: "20vh", height: "5vh", marginTop: "30px" }}
          >
            Register
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default LoginForm;
