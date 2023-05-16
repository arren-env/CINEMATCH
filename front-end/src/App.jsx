import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Footer from "./components/Footer";
import SingleMoviePage from "./Pages/SingleMoviePage";
import FullRomComPage from "../src/components/FullRomComPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Admin from "./components/Admin";
import GetStarted from "./components/GetStarted";

function App() {
  return (
    <div className="bg-white dark:bg-black">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/singleMovie">
            <SingleMoviePage />
          </Route>
          <Route path="/FullRomComPage">
            <FullRomComPage />
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/getStarted">
            <GetStarted/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
