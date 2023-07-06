import "./App.css";
import LoginForm from "./components/LoginForm.js/LoginForm";
import { TextField, Button, Grid } from "@material-ui/core";
import RegistrationForm from "./components/RegisterPage/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TopBar from "./components/AppBar/TopBar";

function App() {
  return (
    <Router>
      <TopBar />
      <div className="App">
        <div className="center">
          <Switch>
            <Route exact path="/" component={RegistrationForm} />
            <Route exact path="/login" component={LoginForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
