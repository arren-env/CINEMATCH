import Home from "./components/Home";
import About from "./components/About";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
