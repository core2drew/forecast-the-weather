import React, { useState, useEffect } from 'react'
import axios from 'axios'
import WeatherCard from '../components/WeatherCard'
import Preloader from '../components/Preloader'
import Moment from 'moment'

const Location = props => {
  const [details, setDetails] = useState({})
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://www.metaweather.com/api/location/${props.match.params.woeid}`)
    .then(res => res.data)
    .then(
      res => {
        setDetails(res)
        console.log(res)
        setIsLoading(false)
      }
    ).catch(function (error) {
      console.log(error);
      setIsLoading(false)
    });
  }, [])

  return isLoading ? 
    <Preloader /> : 
    <section className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div id="LocationWeather" className="container is-fluid">
          <div className="header">
            <a href="/">Back</a>
            <h1 className="title">
              {details.title} <br/> 
            </h1>
            <p><strong>Time:</strong> {Moment(details.time).format('hh:mm A Z')}</p>
            <p><strong>Sunrise:</strong> {Moment(details.sun_rise).format('hh:mm A')} / <strong>Sunset:</strong> {Moment(details.sun_set).format('hh:mm A')}</p>
          </div>
          <div className="columns is-multiline">
            <WeatherCard details={details.consolidated_weather}/>
          </div>
        </div>
      </div>
    </section>
}

export default Location