import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react'

export default function WeatherBox() {
  const [weatherinfo, setweatherinfo]=useState({
    city:"Pune",
    feels_like:24.84,
    temp:25.05,
    tempMin:25.05,
    tempMax:25.05,
    humidity:47,
    weather:"haze",
})

let updateinfo=(newinfo)=>{
    setweatherinfo(newinfo);
}

  return (
    <div  style={{textAlign:'center'}}>
        <h2>WeatherBox</h2>
        <p>Check out your favourite city Current Weather!!</p>
        <SearchBox updateinfo={updateinfo}/>
        <InfoBox info={weatherinfo}/>
        </div>
  )
}
