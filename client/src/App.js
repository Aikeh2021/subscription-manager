import { useEffect } from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    })
  }, [])
  return (
    "you're ready to rumble!"
  );
}

export default App;
