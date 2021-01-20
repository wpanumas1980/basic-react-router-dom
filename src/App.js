import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './App.css';

const Home = () => <div>Home Page</div>
const About = () => <div>About Page</div>
const User = () => <div>User Page</div>
const NotFound = () => <div>NotFound Page</div>


function App() {
  return (
    <BrowserRouter>
      <nav style={{ width: '60%', margin: '50px auto' }}>
        <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>
      <div style={{ width: '60%', margin: '50px auto' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/:user">
            <User />
          </Route>
          <Route >
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
