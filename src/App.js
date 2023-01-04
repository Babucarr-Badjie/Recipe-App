import { BrowserRouter, Route, Switch } from "react-router-dom";

// page components
import Navbar from "./components/Navbar";
import Home from "./pageComponents/home/Home";
import Create from "./pageComponents/create/Create";
import Search from "./pageComponents/search/Search";
import Recipe from "./pageComponents/recipe/Recipe";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
