import React from 'react'
import Card from './Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 8
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};



function TwentyFourDet(props) {

  return (



    <Carousel responsive={responsive}>
      {
        props.data.hours.map((element , index) => {
          return <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border' key={element.datetime}>
            <div className='my-1'>{index === 0 ? "12" : index>12 ? parseInt(element.datetime) -12 : parseInt(element.datetime)}  {index>12 ? "PM" : "AM"}</div>
            <Card data={element.icon} width={"50px"} />
            <div>{element.temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div>
            </div>
        })}
    </Carousel>





    // -------------------------------------- Hard Code -----------------------------------------------
    // <Carousel responsive={responsive}>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[0].icon} width={"50px"} /><div>{props.data.hours[0].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[1].icon} width={"50px"} /><div>{props.data.hours[1].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[2].icon} width={"50px"} /><div>{props.data.hours[2].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[3].icon} width={"50px"} /><div>{props.data.hours[3].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[4].icon} width={"50px"} /><div>{props.data.hours[4].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[5].icon} width={"50px"} /><div>{props.data.hours[5].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[6].icon} width={"50px"} /><div>{props.data.hours[6].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[7].icon} width={"50px"} /><div>{props.data.hours[7].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[8].icon} width={"50px"} /><div>{props.data.hours[8].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[9].icon} width={"50px"} /><div>{props.data.hours[9].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[10].icon} width={"50px"} /><div>{props.data.hours[10].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[11].icon} width={"50px"} /><div>{props.data.hours[11].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[12].icon} width={"50px"} /><div>{props.data.hours[12].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[13].icon} width={"50px"} /><div>{props.data.hours[13].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[14].icon} width={"50px"} /><div>{props.data.hours[14].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[15].icon} width={"50px"} /><div>{props.data.hours[15].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[16].icon} width={"50px"} /><div>{props.data.hours[16].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[17].icon} width={"50px"} /><div>{props.data.hours[17].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[18].icon} width={"50px"} /><div>{props.data.hours[18].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[19].icon} width={"50px"} /><div>{props.data.hours[19].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[20].icon} width={"50px"} /><div>{props.data.hours[20].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[21].icon} width={"50px"} /><div>{props.data.hours[21].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[22].icon} width={"50px"} /><div>{props.data.hours[22].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    //   <div className='d-flex flex-column align-items-center border mx-1 py-1 rounded border'> <br /><Card data={props.data.hours[23].icon} width={"50px"} /><div>{props.data.hours[23].temp}  <sup>o</sup> {props.unit === "metric" ? "C " : "F "} </div></div>
    // </Carousel>

  )
}

export default TwentyFourDet
