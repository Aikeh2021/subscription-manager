import { useEffect } from 'react';
import axios from 'axios';
import UserDashboard from './components/UserDashboard/UserDashboard';

function App() {
  useEffect(() => {
    axios.get("/api/config").then((response) => {
      console.log(response.data);
    })
  }, [])
  return (
    <UserDashboard />
  );
}

export default App;
