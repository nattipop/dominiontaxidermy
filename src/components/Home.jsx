import { useEffect } from "react";
import "../styles/Home.css"

const Home = () => {
  useEffect(() => {
    document.title = "Dominion Taxidermy WI";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page" id="home">
      <img id="cover-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1745683005/Dominiontaxidermy/IMG_6852_xcoiay.jpg" width="100vw" />
      <div id="cover-header">
        <img id="logo-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1745682273/Dominiontaxidermy/DTwhitecircle_cen486.png" />
        <h2>High-Quality Taxidermy in<br/> Northwest Wisconsin</h2>
      </div>
      <section id="welcome">
        <h3>This is the welcome section. All you need is a short and to-the-point paragraph that says a little bit about your business.</h3>
      </section>
      <section id="what-we-offer">
        <div className="row">
          <div className="col">
            <img className="category-image-home" src="https://res.cloudinary.com/dawteptkh/image/upload//l_image:upload:Dominiontaxidermy:DTwhitecircle_cen486/c_scale,fl_relative,w_0.20/o_80/fl_layer_apply,g_south_east,x_0.03,y_0.04/v1748474639/Dominion-Photos/IMG_6337_hakhip.jpg" alt="" width="150px" />
            <h2>Deer</h2>
          </div>
          <div className="col">
            <img className="category-image-home" src="https://res.cloudinary.com/dawteptkh/image/upload//l_image:upload:Dominiontaxidermy:DTwhitecircle_cen486/c_scale,fl_relative,w_0.20/o_80/fl_layer_apply,g_south_east,x_0.03,y_0.04/v1748474638/Dominion-Photos/IMG_3160_j3d6rd.jpg" alt="" width="150px" />
            <h2>Fish</h2>
          </div>
          <div className="col">
            <img className="category-image-home" src="https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=" alt="" width="150px" />
            <h2>Birds</h2>
          </div>
        </div>
      </section>
      <section id="home-contact">
        <h1 className="contact-info" id="business-name">Dominion Taxidermy</h1>
        <h2 className="contact-info" id="contact-name">Matthew Jerabek</h2>
        <h2 className="contact-info" id="phone">(715) 642-4966</h2>
        <h2 className="contact-info" id="address">1234 Chippewa Trail, Bruce, WI 54757</h2>
        <h2 className="contact-info" id="email">dominiontaxidermywi@gmail.com</h2>
      </section>
    </div>
  )
}

export default Home;