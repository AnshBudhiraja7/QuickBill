import React from 'react'

const Title = (props) => {
  return (
    <div className="row">
    <div className="col-12">
      <div className="page-title-box d-sm-flex align-items-center justify-content-between">
        <h4 className="mb-sm-0">{props.Name}</h4>
      </div>
    </div>
  </div>
  )
}

export default Title
