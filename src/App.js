
import './App.css';
import{BrowserRouter, Redirect,Route, Switch ,Link,NavLink} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Article from './components/Article';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <nav>
        <h1>My Articles</h1>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/articles/:id">
        <Article  />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
      </Switch>
      
      </div>
    </BrowserRouter>
  );
}

export default App;
