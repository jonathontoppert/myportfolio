import { useEffect, useState } from 'react';
import fetchBackendData from '../api/api.js';

const ProjectsList  = () => {
  const [data, setData] = useState('');
  const [error, setError] = useState('');


useEffect(() => {
    fetch('/api/projects') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data); 
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }, []);
  

  return (
    <div>
      <h1>Backend Response</h1>
      {error ? <p>{error}</p> : <p>{data}</p>}
    </div>
  );
};

export default ProjectsList ;
