import React from 'react'

const ErrorModal = props => (
  <div className={`modal ${props.hasError.active ? 'is-active' : ''}`}>
    <div className="modal-background"></div>
    <div className="modal-content">
      <article className="message is-dark">
        <div className="message-header">
          <p>Error</p>
          <button className="delete" aria-label="delete" onClick={() => {
            props.setHasError({
              ...props.hasError,
              active: false
            })
            props.setIsLoading(false)
          }}></button>
        </div>
        <div className="message-body">
          {props.hasError.message}
        </div>
      </article>
    </div>
  </div>
)

export default ErrorModal
