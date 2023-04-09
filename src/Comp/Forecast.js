import React, { useState } from 'react'
import TwentyFourDet from './TwentyFourDet';
import FourteenDay from './FourteenDay';

function Forecast(props) {

  const [day, setday] = useState(0);
  const [format , setformat] = useState("fourteen")

  function onchange()
  {

  }


  return (
    <>
      <div className='my-4'>
        <h5>Forecast</h5>
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" className="btn-check" name="btnradio" id="btnradio1"  onClick={() => setformat("fourteen")} defaultChecked/>
          <label className="btn btn-outline-primary rounded-0" htmlFor="btnradio1">14 Day Format</label>

          <input type="radio" className="btn-check" name="btnradio" id="btnradio2" onClick={() => setformat("twentyfour")} />
          <label className="btn btn-outline-primary rounded-0" htmlFor="btnradio2">24 Hour</label>

        </div>
      </div>
      {format == "twentyfour" && <TwentyFourDet data={props.data.days[0]} unit={props.unit} />}
      {format == "fourteen" &&  <FourteenDay data={props.data.days} unit={props.unit} />}
    </>
  )
}

export default Forecast
