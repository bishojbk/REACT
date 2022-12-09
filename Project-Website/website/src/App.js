import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Copyright from "./components/Copyright";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" compontent={Home} exact>
            <Home />
          </Route>
          <Route path="/About" compontent={About} exact>
            <About />
          </Route>
          <Route path="/Services" compontent={Services} exact>
            <Services />
          </Route>
          <Route path="/Copyright" compontent={Copyright} exact>
            <Copyright />
          </Route>
        </Switch>

        <Services />
        <Copyright />
      </Router>
    </>
  );
}

export default App;
