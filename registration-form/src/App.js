import "./App.css";
import LoginForm from "./components/LoginForm.js/LoginForm";
import { TextField, Button, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <div className="center">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
