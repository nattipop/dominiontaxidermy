import { useState } from "react";
import "../styles/Services.css"
import axios from "axios";
import { useEffect } from "react";

const Services = () => {
  const [deer, setDeer] = useState();
  const [bear, setBear] = useState();
  const [smallMammal, setSmallMammal] = useState();
  const [fish, setFish] = useState();
  const [birds, setBirds] = useState();
  const [misc, setMisc] = useState();

  useEffect(() => {
    document.title = "Dominion Taxidermy | Services";
    window.scrollTo(0, 0);

    if(!deer) {
      fetchDeer()
    }
    if(!bear) {
      fetchBear()
    }
    if(!smallMammal) {
      fetchSmallMammal()
    }
    if(!fish) {
      fetchFish()
    }
    if(!birds) {
      fetchBirds()
    }
    if(!misc) {
      fetchMisc()
    }
  }, [deer, fish, birds, misc, bear, smallMammal])

  const fetchDeer = async () => {
    try {
      const response = await axios.get("https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service/DEER");
  
      setDeer(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchBear = async () => {
    try {
      const response = await axios.get("https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service/BEAR");
  
      setBear(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchSmallMammal = async () => {
    try {
      const response = await axios.get("https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service/SMALL MAMMAL");
  
      setSmallMammal(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchFish = async () => {
    try {
      const response = await axios.get("https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service/FISH");
  
      setFish(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchBirds = async () => {
    try {
      const response = await axios.get("https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service/BIRDS");
  
      setBirds(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const fetchMisc = async () => {
    try {
      const response = await axios.get("https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service/MISC");
  
      setMisc(response.data)
    } catch(err) {
      console.log(err)
    }
  };

  const renderServices = (array) => {
    return array?.map(service => {
      return (
        <div id={service.service_id} key={service.service_id} className="service-box col">
          <div className="row">
            <div className="col service-header-column">
              <h1 className="service-title">{service.title}</h1>
              <h3 className="service-price">{service.price}</h3>
              <h3 className="service-description">{service.description}</h3>
            </div>
          </div>
        </div>
      )
    })
  }

  return misc ? (
    <div className="page" id="services">
      <img id="services-cover" className="header-images" src="https://res.cloudinary.com/dawteptkh/image/upload/v1748818810/Dominiontaxidermy/IMG_6256-preview_zfywih.jpg" alt="" />
      <div id="services-title">
        <h1>Services</h1>
        <h2 id="questions">Call <a href="tel:7156424966">(715) 642-4966</a> with any questions on pricing</h2>
      </div>
      <p className="notice">Pricing subject to change without notice</p>
      <p className="notice-2">Pricing is for mount only and does not include habitat</p>
      <h1 className="service-header">Deer</h1>
      <div className="container service-list">
        {renderServices(deer)}
      </div>
      <h1 className="service-header">Bear</h1>
      <div className="container service-list">
        {renderServices(bear)}
      </div>
      <h1 className="service-header">Small Mammals</h1>
      <div className="container service-list">
        {renderServices(smallMammal)}
      </div>
      <h1 className="service-header">Fish</h1>
      <div className="container service-list">
        {renderServices(fish)}
      </div>
      <h1 className="service-header">Birds</h1>
      <div className="container service-list">
        {renderServices(birds)}
      </div>
      <h1 className="service-header">Misc</h1>
      <div className="container service-list">
        {renderServices(misc)}
      </div>
    </div>
  ) : (
    
    <div className="page" id="services">
      <img id="services-cover" className="header-images" src="https://res.cloudinary.com/dawteptkh/image/upload/v1748818810/Dominiontaxidermy/IMG_6256-preview_zfywih.jpg" alt="" />
      <div id="services-title">
        <h1>Services</h1>
        <h2 id="questions">Call <a href="tel:7156424966">(715) 642-4966</a> with any questions on pricing</h2>
      </div>
      <p className="notice">Pricing subject to change without notice</p>
      <p className="notice-2">Pricing is for mount only and does not include habitat</p>
      <img id="loading" width="400px" src="https://res.cloudinary.com/dawteptkh/image/upload/v1756839513/Dominion-Photos/Dominion_Animation_udk7hs.gif" alt="" />
    </div>
  )
}

export default Services;