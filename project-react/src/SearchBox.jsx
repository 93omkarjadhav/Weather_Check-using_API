import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateinfo}) {
   let[city, setCity]=useState("");
   let[error,setError]=useState(false)

   const API_URL="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY="f2205646a5414780f1c5bc166a4158c3"

   let getWeatherInfo=async ()=>{
    try{
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonresponse= await response.json();
      console.log(jsonresponse);
      let result={
        city:city,
        temp:jsonresponse.main.temp,
        tempMin:jsonresponse.main.temp_min,
        tempMax:jsonresponse.main.temp_max,
        humidity:jsonresponse.main.humidity,
        feelslike:jsonresponse.main.feels_like,
        weather: jsonresponse.weather[0].description,
  
  
      };
      console.log(result);
      return result;

    }catch(err){
      throw err
    }
   
   }

    const handleChange = (event) => {
        event.preventDefault(); // Prevents page reload
        setCity(event.target.value);
      };

    let handleSubmit=async (e)=>{
      try{
        e.preventDefault();
        console.log(city);
        setCity("");
        let newinfo=await getWeatherInfo();
        updateinfo(newinfo);


      }catch(err){
      setError(true);
       
      }
       
    }  


  return (
    <div >
       
       <form onSubmit={handleSubmit} >
       <TextField id="city" label="City Name" variant="outlined" value={city}
       onChange={handleChange} 
       />

       <br /><br />

       <Button variant="contained" type="submit">
       Search
      </Button>
      {error && <p style={{color:'red'}}>No such place exists!</p>}
       </form>
        </div>
  )
}
