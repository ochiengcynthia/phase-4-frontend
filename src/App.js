import "./components/App.css";
import Home from './components/Home';
import About from './components/About';
import Adoptions from './components/Adoptions';
import Animals from './components/Animals';
import Centers from './components/Centers';
import {Switch, Route} from "react-router-dom"
import Navbar from './components/Navbar';

function App() {

  return (
    <>
    <Navbar />
    <Switch>
    <Route path="/About">
    <About />
    </Route>
    <Route path="/Centers">
    <Centers/>
    </Route>
    <Route path="/Animals">
    <Animals/>
    </Route>
    <Route path="/Adoptions">
    <Adoptions/>
    </Route>
      <Route exact path="/">
    <Home />
    </Route>
    </Switch>
    </>
  )
}

export default App