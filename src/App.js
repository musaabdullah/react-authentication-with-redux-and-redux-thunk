import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NavBar from './components/NavBar';
import { useState, useEffect } from 'react';

function App() {
  const [user, setUser ] = useState();
  const handleUser  = () => {
    setUser(JSON.parse(localStorage.getItem("user")));
    console.log(user);
  }

  useEffect(() => {
    handleUser();
  }, [])
  
  return (
    <div className="app">
      <Router>
        {/* <NavBar /> */}
        <Switch>
           <Route exact path="/" >
             {user ? <Home /> : <Login />}
             </Route>
           <Route path="/login">
            {user ? <Home /> : <Login />}
           </Route>
           <Route path="/register">
             {user ? <Home /> : <Register/>}
             </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
