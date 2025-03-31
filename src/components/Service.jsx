import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/Services.css"

const Service = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState();

  useEffect(() => {
    if(!service) {
      fetchService()
    }
  }, [])

  const fetchService = async () => {
    try {
      const response = await axios.get(`https://dominion-server-4490ee5fc0ce.herokuapp.com/dominion-service-by-id/${serviceId}`);
  
      setService(response.data)
    } catch(err) {
      console.log(err)
    }
  };
  console.log(service)

  const renderService = () => {
    return (
      <div id={service.service_id} key={service.service_id} className="container single-service">
          <div className="row">
            <div className="photo-column">
              <img src={service.picture_url} alt="" className="service-single-picture" />
            </div>
            <div className="service-header-column">
              <h1 className="service-title">{service.title}</h1>
              <h3 className="service-description">{service.description}</h3>
              <h3 className="service-price">{service.price}</h3>
              <h1>Call (715) 642-4966 with any questions on pricing</h1>
            </div>
          </div>
      </div>
    )}

  return service ? (
    <div id="services">{renderService()}</div>
  ) : "404 Service Not Found"
}

export default Service;