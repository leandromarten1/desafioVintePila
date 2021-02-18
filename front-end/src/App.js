import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './components/Login'
import User from './components/User'
import UpdateUser from "./components/UpdateUser";
import './App.css';


function App() {
  return (
    <div className="App"> 
      <div className="App-content">
        <img src="https://cdn1.vintepila.com.br/arquivos/2020/08/20233114/01-1-1.png" height={150}/>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/user" component={User} />
            <Route exact path="/user/update/:id" component={UpdateUser} />
          </Switch>
        </Router>   
      </div>
    </div>
  );
}

export default App;
