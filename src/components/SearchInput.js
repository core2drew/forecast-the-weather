import React, { useRef } from 'react'

const SearchInput = props => {
  const location = useRef('');

  return(
    <div id="SearchInput" className="field is-vertical">
      <div className="field-label is-normal has-text-left">
        <label className="label">Location</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input ref={location} className="input" type="text"/>
          </p>
        </div>
        <a className={`button is-info is-flex-mobile ${props.isLoading ? 'is-loading' : ''}`} onClick={() => props.searchLocation(location.current.value)}>Search</a>
      </div>
    </div>
  )
}

export default SearchInput