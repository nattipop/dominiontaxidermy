import { useEffect } from "react";
import "../styles/Home.css"
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Dominion Taxidermy WI";
    window.scrollTo(0, 0);

    const script = document.createElement("script");
    
    script.src = "https://cdn.jsdelivr.net/npm/publicalbum@latest/embed-ui.min.js";
    script.async = true;
    
    document.body.appendChild(script);
  }, []);

  return (
    <div className="page" id="home">
      <img id="cover-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1745683005/Dominiontaxidermy/IMG_6852_xcoiay.jpg" width="100vw" />
      <div id="cover-header">
        <img id="logo-img" src="https://res.cloudinary.com/dawteptkh/image/upload/v1745682273/Dominiontaxidermy/DTwhitecircle_cen486.png" />
        <h2>High-Quality Taxidermy in<br/> Northwest Wisconsin</h2>
      </div>
      <div id="phone-banner">
        <h1><a href="tel:7156424966">(715) 642-4966</a></h1>
      </div>
      <section id="welcome">
        <h1>Dominion Taxidermy</h1>
        <h3>Trained in Wisconsin, refined in Montana. Serving the greater Blue Diamond area</h3>
      </section>
      <section id="what-we-offer">
        <div id="slideshow" className="pa-carousel-widget" style={{width: "100%", height: "480px", display: "none"}}
  data-link="https://photos.app.goo.gl/CydnKp4x6YEKWFYDA"
  data-title=""
  data-description="">
          <object data="https://lh3.googleusercontent.com/pw/AP1GczOcCWZUCKu3G41FTlAQX7kU1YEuYlLhC0fCX5yzdVNuez2nB1ddqdsa1VIb2xiLfwqSih2zQEPHv8qOlfFBbzgP8-AgIt7-W9npsbmE27PfVGh2zps=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczMmKSpVGquwWfkD4gDyXuRlxTUfugZE9wIZHuFg2hy_l2z9LzjrFb7dfWcIySnjuOr5UdHjP2SbW6LL_NqEZ1UkeYTvDmE06BfUN53Hi5ZnWQWxA5Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczMM8B3ntTmfQJb_jaEbUWDwqNt7O_tmFQAoDtUrqiKmx44WBni-8VzQaRLRuRv-hvypCK6aJVykk0zo0LalqT5H1cDdf1dUFpd4SSDteqOF9lyxNwc=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczOvAe6WAMMSdruMSW8Rc49-dJlN52fGQb6_dHyuymV1hsbu0ldUbWKtZdsz8UM04ZTO4TGmL2o1bKwz4ArD8I435UZwyFdyTj1boQwiUT_U25El-8I=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczPzTsAZlX_y70B6AhxD6QJJ3BkMfYoGkLvXYCNHsdNn4UcDczRtfEmEV-LqF2In3gLEm3UQYSffOhTjHuSiUt_j_lQ25I_0ToaHG-O6iR69GxIvklY=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczPUupPlf849OUsRkkvMxro1mHa6Smt9bFFRupsWkCmIf7yrLyttNUBwp34yUySV0JYKsl4yiR1t03dK0SsmX9bfN_RK1wLfX_czx-p-QS_HAiY-qkw=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczNgTSfcu4W4s1iT2HMLz2jV4CK9PuRlyrBSAMX1yG8f42ibMlK_EuIKM6x7zRMrZerlVLpHfZAc7GtjDLjFOTT7ygXOE6vi2tzh5dymWRKTk2nHQh4=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczMWO7nSGMf3xw5lEqcLe8CZPbqwiKfEkfKcGLJTgDVgaYvpMl1eUWyqmrj370ow036KGDpPnmJpkpSexXgzoktCpZns7RRQ1aJA1DGpFnrvFx1PUMY=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczNpQL66i5VPSowJQhN0bnBpkSO_cV3dh-pkKAEWy4wCg7qfznosdgSAy7DCabohJD8ShiB0B25pMRyBF2vF93r6cPGUYQ99QroFTUZOC3aLrw7AGS8=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczN99JmZe-B7sioO1wHlBSo4FGCU2AbA-kHSoby_HWPUq87d-jc-PLieD2BM9a7zvAAPPFmF9Zz0NYM3VReOigYXZALSXZtuaF1NekZub5g8cfArO7Q=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczMQvtnxC7rLGJXlszmcawxgt1kFZl43K-Yng6670lryomv83ntJs2rcLZ009hNJ1TnuQZFb9jL5CQdm1SZdvFgWGpjrsr6lltmEYX2YZyQYb6emKH0=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczMIcL0zmAKUP9Q2PktqXxvwfHIK2BhmdvsICpgv3klU7SHNf1ncVvWD3h-kRbFYNy1ysWJl1bejHiHVZ6kpJj-DcoqwUrDPVrmvVnLXWY8E19p2fZM=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczOL4z-bx5Hr3Wnn38Xsu2LOB-gRBnDmAeqbcDgML5SsKGPt971lMZTZqutySyF6rf814qp4F55EP31okIG8Af35mcgZ0Rz7QCI-_9mZDqjkbMJbO88=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczPupAjGHEmtOepjMR9KL75PVJ-O2LXsOURKmrPTtD3L0mNujYuQxHKJuysbdn2Tuq_1-Wkt4b-P4KPyxa1JtIr0m-V5k5U6U-GteDsJFd6tNcqHbOs=w1920-h1080"></object>
          <object data="https://lh3.googleusercontent.com/pw/AP1GczP_gfgArrQd7iAFaFPu154_qxFFLF6fLUfJfbqSA1b2nseM1H5jZSSVVtFSqRjU3aboKQi5hpxXhH0z-UWY-X9I4vLzX9Btk3b6aEZwq08u_FhXf9Y=w1920-h1080"></object>
        </div>
        <button onClick={() => navigate("/gallery")}>View full gallery</button>
      </section>
      {/* <section id="home-contact">
        <h1 className="contact-info" id="business-name">Dominion Taxidermy</h1>
        <h2 className="contact-info" id="contact-name">Matthew Jerabek</h2>
        <h2 className="contact-info" id="phone">(715) 642-4966</h2>
        <h2 className="contact-info" id="address">N485 Chippewa Trail, New Auburn, WI 54757</h2>
        <h2 className="contact-info" id="email">dominiontaxidermywi@gmail.com</h2>
      </section> */}
    </div>
  )
}

export default Home;