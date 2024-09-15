import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './searchbox.css';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#007BFF',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  transition: 'background-color 0.3s ease-in-out',
}));

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  
  const API_KEY = "ee743c13b5e2e46415b5481b5a31dc71";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  
    async function handleSubmit() {
        const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        const jsonresponse = await response.json();
        updateInfo(jsonresponse);
      }
  

 

  function handleInputChange(event) {
    setCity(event.target.value);
  }

  return (
    <div className="searchBox">
      <form action="submit" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <TextField
          id="outlined-basic"
          label="Enter City"
          variant="outlined"
          value={city}
          onChange={handleInputChange}
          style={{ flexGrow: 1 }}
        />
        <StyledButton variant="contained" onClick={handleSubmit}>
          Search
        </StyledButton>
        
      </form>
    </div>
  );
}
