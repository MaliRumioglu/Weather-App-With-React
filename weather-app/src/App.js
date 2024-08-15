import axios from 'axios';
import {useEffect, useState} from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Veriler } from './Veriler';


function App() {

  const key = "[YOUR API KEY]";
  const [search,setSearch] = useState();
  const [city, setCity] = useState(null);

  useEffect(()=>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  },[search])
  console.log(search)

  const background = () => {
    if (!city || !city.weather) return 'default-bg';
    const weather = city.weather[0].main.toLowerCase();
    return weather;
  };

  return (
    <div className={`App ${background()}`}>        
       <div >
        <input onChange={(e)=> setSearch(e.target.value)} className='search-input' type='text' placeholder='Şehir adı girin...' ></input>
        <Veriler city={city}></Veriler>
        
       </div>
    </div>
  );
}

export default App;
