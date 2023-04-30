import Home from "./components/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Category from "./components/Category";
import Footer from "./components/Footer";
import SingleMoviePage from "./Pages/SingleMoviePage";
import FullRomComPage from '../src/components/FullRomComPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Switch>
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
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
