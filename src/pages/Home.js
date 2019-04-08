import React, { useState } from 'react'
import axios from 'axios'
import SearchInput from '../components/SearchInput'
import SearchResult from '../components/SearchResult'
import ErrorModal from '../components/ErrorModal'
const Home = () => {
  const [locations, setLocations] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState({
    message: '',
    active: false
  })
  const searchLocation = query => {
    setIsLoading(true)
    axios.get(`https://www.metaweather.com/api/location/search/?query=${query}`)
    .then(res => res.data)
    .then(
      res => {
        setIsLoading(false)
        setLocations(res)
      }
    ).catch(function (error) {
      console.log(error)
      setHasError({
        message: error.message,
        active: true
      })
    });
  }
  
  return (
    <section id="Home" className="hero is-dark is-fullheight">
      <div className="hero-body">
        <div className="container">
          <h1 className="title has-text-centered">
            FTW <small>(Forecast The Weather)</small>
          </h1>
          <div className="columns is-centered">
            <div className="column is-6-tablet is-5-desktop is-4-widescreen is-4-fullhd">
              <SearchInput isLoading={isLoading} searchLocation={searchLocation} />
            </div>
          </div>
          <div className="columns is-centered">
            <div className="column is-4">
              <SearchResult locations={locations}/>
            </div>
          </div>
        </div>
      </div>
      <ErrorModal hasError={hasError} setHasError={setHasError} setIsLoading={setIsLoading}/>
    </section>
  )
}

export default Home