import { BrowserRouter, Switch, Route, Redirect} from "react-router-dom";
import "./App.css";
import Figura1 from "./Figura1/Figura1";
import Figura2 from "./Figura2/Figura2";
import Navbar from "./NavBar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/figura1">
          <Figura1/>
        </Route>
        <Route exact path="/figura2">
          <Figura2/>
        </Route>
        <Route exact path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
