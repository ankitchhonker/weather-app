import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  background: 'linear-gradient(to right, #f7f7f7, #cfd9df)',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  borderRadius: '15px',
}));

export default function WeatherCard({ weatherobj }) {
  const sunnyUrl = "https://media.istockphoto.com/id/917178010/photo/road-panorama-on-sunny-spring-day.webp?b=1&s=170667a&w=0&k=20&c=3Kgw3-hBJy9E0AtHFAELjVi3b3Hxa7VGpGF_qvMNWZk=";
  const rainyUrl = "https://media.istockphoto.com/id/105934727/photo/rain.webp?b=1&s=170667a&w=0&k=20&c=IroMBxRXyfm4K6sLvLaBBV3Wj6Bzv1kKJtDisEo5Jhg=";
  const coldUrl = "https://media.istockphoto.com/id/114313632/photo/rainy-day-apartments.webp?b=1&s=170667a&w=0&k=20&c=3xVpXXiXu7gTnNY_D13BmGaRsRdEOvOO2w3B_sdLqAQ=";

  function imageUrl() {
    if (weatherobj.main.temp > 40) {
      return sunnyUrl;
    } else if (weatherobj.main.temp > 25 && weatherobj.main.temp < 35) {
      return rainyUrl;
    } else {
      return coldUrl;
    }
  }

  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image={imageUrl()}
          alt="Weather image"
          style={{ borderRadius: '15px 15px 0 0' }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {weatherobj.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Current Temperature: {weatherobj.main.temp}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Minimum Temperature: {weatherobj.main.temp_min}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Maximum Temperature: {weatherobj.main.temp_max}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Feels Like: {weatherobj.main.feels_like}°C
          </Typography>
        </CardContent>
      </CardActionArea>
    </StyledCard>
  );
}
