import React from 'react'

export const Veriler = ({city}) => {
    console.log(city)

    if (!city) {
        return <div>Veri bekleniyor...</div>;
      }

  return (
    <div>
        <div className="weather-container" >
          <h1 className="city">{city.name} {city.sys.country}</h1>
          <h1 className="temp" >Sıcaklık: {city.main.temp} °C</h1>         
          <h1 className="feels-like" >Hissedilen Sıcaklık: {city.main.feels_like} °C</h1>
          <h1 className="weather">{city.weather[0].main}</h1>
        </div>
    </div>
  )
}
