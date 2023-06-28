import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./containers/Login/LoginForm";
import Signup from "./containers/Signup/SignupForm";
import TodoList from "./containers/Todo/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Main Page</h3>

        <Router>

          <Switch>
            <Route path="/" exact>
              <Login/>
              <Link to='/Signup'>Move to Signup Page</Link>
            </Route>
            <Route path="/Signup">
              <Signup/>
              <Link to='/'> Move to Login Page</Link>
            </Route>
            <Route path="/TodoList">
              <TodoList/>
            </Route>
          </Switch>
        </Router>

      </header>
    </div>
  )
}

export default App


