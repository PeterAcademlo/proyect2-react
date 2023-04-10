import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import WeatherCard from './components/WeatherCard'
import Loading from './components/Loading'



function App() {
  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [search, setSearch] = useState()
  const [error, setError] = useState(false)

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.input.value.toLowerCase().trim())
    e.target.input.value = ''
  }

  useEffect(() => {

    const success  = pos => {
      const obj = {
        lat: pos.coords.latitude ,
        lon: pos.coords. longitude,
      }
      setLatlon(obj)
    }
    const error = () => {}
    navigator.geolocation.getCurrentPosition(success, error)
  },[search])

  useEffect(() => {
    if (!search) {
      if(latlon) {
          const Apikey= '41de66e93f4d67d5bc8d92f4cf9594a3'
          const url =`https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${Apikey} `
        axios
        .get(url)
        .then((res) => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9/ 5 + 32).toFixed(1)
          setTemperature({ celsius, farenheit })
          setWeather(res.data)
        })
        .catch(err => {
          console.log(err)
        });
      }
    } else {
      if (latlon) {
        const apikey = "a6f139938d4bc72a171fbf83d3bcb13b";
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apikey}&q=${search}`;
        axios
          .get(url)
          .then((res) => {
            const celsius = (res.data.main.temp - 273.15).toFixed(1);
            const farenheit = ((celsius * 9) / 5 + 32).toFixed(1);
            setTemperature({ celsius, farenheit });
            setWeather(res.data);
          })
          .catch((err) => {
            console.log(err)
            setError(true);
            setTimeout(() => {
              setError(false);
            }, 3000);});
            
            
          
          }
        }
      }, [latlon])




      

  return (
    <div className="App">
      
      {weather ?(
        <>
      {!error ? (
        ""
      ) : (
        <span className="animate__animated animate__lightSpeedInLeft error">
        CIUDAD NO ENCONTRADA
      </span>
      )}
        <div  className="container-b">
            <h1 data-text="WEATHER-APP" className="title">WEATHER-APP</h1>
            <form className="search" onSubmit={handleSearch} action="">
              <input className="search-space" name='' placeholder='search     dity      name' id="input" type="text" autoComplete="off" required />
              <button className='button1'>search</button>
            </form>
        <WeatherCard weather={weather}temperature = {temperature}/>
        </div>
        </>
  ) : (
     <Loading/>
      )}
      
    </div>
  )
}

export default App
