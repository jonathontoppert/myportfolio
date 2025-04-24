const fetchBackendData = async () => {
  console.log("API base URL:", process.env.REACT_APP_API_URL);

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/projects`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return null;
  }
};


export default fetchBackendData;