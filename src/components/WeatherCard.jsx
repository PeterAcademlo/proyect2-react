import './weatherCard.css'
import React, {useState} from 'react'
import 'animate.css'

const WeatherCard = ({weather, temperature}) => {
    const [isCelsius, setIsCelsius] = useState(true)
    const handleChangeTemperature = () => setIsCelsius(!isCelsius)


  return (
    <div className='App2'>
      <article>
        <h2 class="animate__backInDown">{weather?.name}, {weather?.sys.country}</h2>
        <section>
          <header className='information'>
            <img className='imgclima' src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
            <article>
              <h3 class="animate__backInDown b1">"{weather?.weather[0].description}"</h3> 
                <div className='animate__fadeInUpBig'>
                  <ul>
                    <li className='li1'><span>Wind Speed:</span>{weather?.wind.speed}m/s</li>
                    <li><span>Clouds:</span>{weather?.clouds.all}%</li>
                    <li><span>Pressure:</span>{weather?.main.pressure}hPa</li>
                  </ul>
                </div>
            </article>
          </header> 
        </section>
        <footer className='grades'>
          <h2 className='grades-cf' class="animate__headShake">
            {
            isCelsius
            ? `${temperature?.celsius} °C`
            : `${temperature?.farenheit} °F`
            }
          </h2>
          <button className='button2' onClick={handleChangeTemperature}>Change to {isCelsius ? '°F' : '°C'}</button>
        </footer>
      </article>
    </div>    
  )
}

export default WeatherCard