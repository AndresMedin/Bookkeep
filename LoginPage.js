import React from 'react';
import { useHistory } from 'react-router-dom';

function LoginPage() {
  let history = useHistory();

  const handleLogin = () => {
    // Perform login logic
    history.push('/dashboard'); // Navigate to Dashboard after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
