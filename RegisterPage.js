import React from 'react';
import { useHistory } from 'react-router-dom';

function RegisterPage() {
  let history = useHistory();

  const handleRegister = () => {
    // Perform registration logic
    history.push('/login'); // Navigate to Login page after successful registration
  };

  return (
    <div>
      <h2>Register Page</h2>
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}

export default RegisterPage;
