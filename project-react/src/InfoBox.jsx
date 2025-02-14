import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

export default function InfoBox({info}) {
    const init_url="https://images.unsplash.com/photo-1672226405717-697c84f48f9e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    let COLD_URL="https://images.unsplash.com/photo-1607857673310-bcb3954b8d41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGR8ZW58MHx8MHx8fDA%3D";
    let HOT_URL="https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let RAIN_URL="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";


const handle=()=>{
  navigator.share({
    title:'my app',
    text:'check out my app',
    url:window.location.href,
  })
}

    
    

  return (
    <div className='Infobox'>
     
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={info.humidity>80? RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city }{info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <BeachAccessIcon /> : <AcUnitIcon />}
        </Typography>
        <Typography variant="body2"  color='text.secondary' component={'span'}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}</p>
          <p>Min Temp={info.tempMin}&deg;C</p>
          <p>Max Temp={info.tempMax}&deg;C</p>
          <p><b>
            The weather can be described as <i>{info.weather}</i>and feels like{info.feels_like}&deg;C
         </b> </p>



        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={handle} size="small">Share </Button>
        <Button size="small"><a href="https://www.weather.com">Learn More</a></Button>
      </CardActions>
    </Card>
        </div>
  );
}
