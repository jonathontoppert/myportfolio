import { useEffect } from 'react';
import fetchBackendData from '../api/api.js';

const ProjectsList = () => {
  useEffect(() => {
    fetchBackendData();
  }, []);

  return (
    <div>
      <h1>Backend Response</h1>
      <p>Check console for output.</p>
    </div>
  );
};

export default ProjectsList;
