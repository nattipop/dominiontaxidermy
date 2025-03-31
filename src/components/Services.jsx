import { useState } from "react";
import "../styles/Services.css"
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();
  const [deer, setDeer] = useState();
  const [bear, setBear] = useState();
  const [smallMammal, setSmallMammal] = useState();
  const [fish, setFish] = useState();
  const [birds, setBirds] = useState();
  const [misc, setMisc] = useState();

  useEffect(() => {
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
  }, [])

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
        <div id={service.service_id} key={service.service_id} className="service-box col" onClick={() => navigate(`/services/${service.service_id}`)}>
          <div className="row">
            <div className="col-3 photo-column">
              <img src={service.picture_url} alt="" className="service-display-picture" />
            </div>
            <div className="col service-header-column">
              <h1 className="service-title">{service.title}</h1>
              <h3 className="service-price">{service.price}</h3>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="page" id="services">
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
  )
}

export default Services;