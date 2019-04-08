import React from 'react'

const SearchResult = props => {

  const Header = props => {
    if(!props.hasLocations) {
      return false
    }

    return (
      <thead>
        <tr>
          <th>Locations</th>
          <th>Type</th>
          <th>Lattitude / Longitude</th>
        </tr>
      </thead>
    )
  }

  const Footer = props => {
    if(!props.hasLocations) {
      return false
    }
    return (
      <tfoot>
        <tr>
          <th>Locations</th>
          <th>Type</th>
          <th>Lattitude / Longitude</th>
        </tr>
      </tfoot>
    )
  }

  const Rows = props =>
    props.locations.map((location, index) => 
      <tr key={index} onClick={() => window.location.href=`/location/${location.woeid}`}>
        <td>{location.title}</td>
        <td>{location.location_type}</td>
        <td>{location.latt_long}</td>
      </tr>
    )

  return (
    <div id="SearchResult" >
      <table className="table is-hoverable is-fullwidth is-bordered">
        <Header hasLocations={props.locations.length}/>
        <tbody>
          <Rows locations={props.locations}/>
        </tbody>
        <Footer hasLocations={props.locations.length}/>
      </table>
    </div>
  )
}

export default SearchResult