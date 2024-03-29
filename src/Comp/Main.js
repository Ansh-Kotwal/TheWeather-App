import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import City from './City';
import CurrentCond from './CurrentCond';
import Forecast from './Forecast';




function Main(props) {

  const [wdata, setwdata] = useState(null)
  const [unit, setunit] = useState("metric")
  const [limit, setlimit] = useState(1)


  const unitbutton = () => 
  {
    if (unit === "metric")
      setunit("us");
    else
      setunit("metric");

  }

 

  useEffect(() => {
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${props.location}?unitGroup=${unit}&key=TMKNQWKG2TU622H247R9SULFX&contentType=json`;
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setwdata(data); 
      } catch (error) {
        console.log('Api Limit Reached', error);
      }
    };

    fetchData();

  }, [props.location , unit]);

  const war = () => {
    return <div className='text-dark'><h2>API LIMIT REACHED PLEASE WAIT 24 HOUR !!!</h2></div>
  }


  return (
    // bg-transparent bg-gradient
    <div className='container  p-5 border border-secondary rounded'>
      {limit === 0 ? war() : ""}
      {wdata && <City data={wdata} unitbutton={unitbutton} unit={unit} />}
      {wdata && <CurrentCond data={wdata.currentConditions} unit={unit} />}
      {wdata && <Forecast data={wdata} unit={unit}/>}
      
    </div>
  )
}

export default Main
