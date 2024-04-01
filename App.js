import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import AccountDashboard from './AccountDashboard';
import Settings from './Settings';
import Analytics from './Analytics';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav>
          <ul className="flex justify-between px-4 py-2 bg-gray-200">
            {/* Conditional rendering or a context check can go here to show/hide links based on authentication status */}
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/analytics">Analytics</Link></li>
            <li><button onClick={() => {/* handle sign out */}}>Sign Out</button></li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/register" component={RegisterPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={AccountDashboard} />
          <Route path="/settings" component={Settings} />
          <Route path="/analytics" component={Analytics} />
          {/* Redirect user to login page if not authenticated */}
          {/* This is a simplified approach. You might want to handle authentication and redirection more securely. */}
          <Route path="/" exact component={LoginPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
