import React from 'react'
import Moment from 'moment'

const WeatherCard = props => props.details.map((detail, index) => {
  let date = Moment(detail.applicable_date)
  return (
    <div className="column is-12-tablet is-4-desktop" key={index}>
      <div className="card">
        <div className="day-date">
          <span className="day">
            {
              date.calendar(null, {
                sameDay: '[Today]',
                nextDay: '[Tomorrow]',
                lastDay: '[Yesterday]',
                nextWeek: 'dddd'
              })
            }
          </span>
          <span className="date">({date.format('l')})</span>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{detail.weather_state_name}</p>
              <p>
              <strong>Max:</strong> {detail.max_temp.toFixed(2)} <br/>
              <strong>Min:</strong> {detail.min_temp.toFixed(2)}<br/>
              <strong>Humidity:</strong> {detail.humidity}% <br/>
              <strong>Wind:</strong> {detail.wind_direction_compass} {detail.wind_speed.toFixed(2)} <br/>
              <strong>Predictability:</strong> {detail.predictability}%
              </p>
            </div>
            <div className="media-right">
              <figure className="image is-64x64">
                <img src={`https://www.metaweather.com/static/img/weather/${detail.weather_state_abbr}.svg`} alt="Weather Icon" />
              </figure>
            </div>
          </div>

          <div className="content">
 
          </div>
        </div>
      </div>
    </div>
  )
})

WeatherCard.defaultProps = {
  details: []
}

export default WeatherCard