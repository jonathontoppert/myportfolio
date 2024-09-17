const fetchBackendData = async () => {
    try {
      const response = await fetch('/api');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json(); 
      console.log(data); 
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };
  
  export default fetchBackendData;
  