import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './LogIn';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignUp = (username, password) => {
    // Add logic for user registration
    // Update authentication state
    setAuthenticated(true);
  };

  const handleLogin = (username, password) => {
    // Add logic for user authentication
    // Update authentication state
    setAuthenticated(true);
  };

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <LandingPage authenticated={authenticated} />
          </Route>
          <Route path="/signup">
            <SignUp onSignUp={handleSignUp} />
          </Route>
          <Route path="/login">
            <Login onLogin={handleLogin} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;