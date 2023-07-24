import React, { useState } from 'react'
import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const [isUserLoggedIn, setUserLoggedIn] = useState(true);


  const toggleUser = () => {
    setUserLoggedIn((isLoggedIn) => !isLoggedIn);
  }

  return (
    <div>
      <button type="button" onClick={toggleUser}>Login</button>
      {!isUserLoggedIn && <Navigate to="/login" />}
      {isUserLoggedIn && element}
    </div>
  )
}

export default PrivateRoute