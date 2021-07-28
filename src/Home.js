import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12321341"
            title="The lean startup: How Constant Innovation Creates Radicallly Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61oscgd0KXL._SL1200_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Smart Band Fitness Tracker Watch with Heart Rate, Activity Tracker Heart Rate Monitor LED"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/61QoZCzMx3L._AC_UY218_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro with A12Z Bionic chip (11-inch, Wi-Fi + Cellular, 512GB) - Space Grey (2nd Generation)
            "
            price={598.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81uZx3TL29L._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49HG90DMUXEN 48.9-inch Ultra Wide Curved Monitor (Black)"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/71MlcO29QOL._AC_UY218_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
