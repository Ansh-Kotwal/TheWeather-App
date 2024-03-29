import React, { useEffect, useState } from 'react'


function Comp1(props) {


  function d() {
    const d = new Date(props.data.days[0].datetime);
    let x = d.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
    return x;
  }



  return (
    <div className='row justify-content-between '>
      <div className='col me-5'>
        <h2 style={{ display: 'inline' }}>{props.data.resolvedAddress}</h2> <br />{d()}
      </div>
      <div className="form-check form-switch col-md-1 ms-5" >
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onClick={props.unitbutton} />
        <label className="form-check-label" htmlFor="flexSwitchCheckChecked"><sup>o</sup> {props.unit === "metric" ? "C " : "F "}</label>
      </div>
    </div>
  )
}

export default Comp1
