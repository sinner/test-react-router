import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router';

function DoctorDetail() {
  const [name, setName] = useState('');
  const { doctorId } = useParams();

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${doctorId}`)
    .then(async (response) => {
        const json = await response.json();
        setName(json.name);
    });
  }, []);

  return (
    <div>Doctor Detail: {name}</div>
  )
}

export default DoctorDetail