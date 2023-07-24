import React from 'react'

import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log('El usuario se perdió ');
    navigate('/');
  };

  return (
    <div>Not Found! Go 
      <button type='button' onClick={handleClick}>
        Home
      </button>
    </div>
  )
}

export default NotFound