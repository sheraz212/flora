/* eslint-disable react/jsx-pascal-case */
import React, { useState } from "react";

import Optin_Trigger from "./Optin_Trigger";
import "./flora.css";
import miniFlat from "../../assets/floracity_7.jpg";
import mezzazine from "../../assets/mezzazine.jpg";
import header from "../../assets/flora-images/header2.jpg";
import rocket from "../../assets/rocket.svg";
import background from "../../assets/background.jpg";
import gal1 from "../../assets/flora-images/flora-gal1.jpg";
import gal2 from "../../assets/flora-images/flora-gal2.jpg";
import gal3 from "../../assets/flora-images/flora-gal3.jpg";
import gal4 from "../../assets/flora-images/flora-gal4.jpg";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import OptinModal from "../../SharedComponents/OptinModal";
import OptinForm from "../../SharedComponents/OptinForm";
// import Footer from "../../layouts/Footer";

const FloraEcopolis = () => {
  const [bookingDetail, setbookingDetail] = useState({});
  return (
    <>
      <section className="banner-meetup">
        <div
          className="bg-pattern"
          style={{ backgroundImage: `url(${header})` }}
        />
        <div className="layer-outer">
          <div className="gradient-layer" />
        </div>
        <div className="auto-container">
          <div className="content-box">
            <div className="address">
              <span className="icon fa fa-map-marker-alt" />
              Switch your living style to this{" "}
            </div>
            <h2>
              <font color="green">Green</font>
              <font color="white">City</font>
            </h2>
            <div className="address">
              {" "}
              with 24/7 zero-combustion electrified luxury smarthomes.{" "}
            </div>
          </div>
          <div className="btn-box">
            <button
              data-toggle="modal"
              data-target="#optinForm"
              className="theme-btn btn-style-two"
            >
              <span className="btn-title">
                For Enquiry, inspection or reservation, click here to fill the
                form
              </span>
            </button>
          </div>
          <div>
            <a
              href="tel:+2348024421356 "
              className="call-enquiry call-link-two"
              style={{ fontSize: "25px" }}
            >
              <h3 className="text-center call-link-one">
                {" "}
                OR CLICK HERE TO CALL +2348024421356
              </h3>
            </a>
          </div>
        </div>
      </section>

      <section
        className="welcome"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="center text-center mt-5">
          {/* <h2>Welcome message </h2> */}
          <div className="content p-3">
            <h4 className="text-light" style={{ lineHeight: "40px" }}>
              Be part of this{" "}
              <span
                style={{
                  textDecoration: "underline",
                  fontWeight: "400",
                  fontSize: "30px",
                }}
              >
                {" "}
                premium-secured, luxury, energy-efficient, serviced and smart{" "}
              </span>
              Ecopolis. It’s perfect for live-in, home-away-from-home
              relaxation, and for rentals with up to 25% annual income for
              Nigerians at home and in diaspora.
            </h4>
          </div>
        </div>
      </section>

      <section className="images-gallery">
        <div className="images-gallery-container">
          <img src={gal1} alt="" />
          <img src={gal2} alt="" />
          <img src={gal3} alt="" />
          <img src={gal4} alt="" />
        </div>
      </section>
      <section className="about-section-two">
        <div className="anim-icons full-width">
          <span
            className="icon icon-circle-blue wow fadeIn animated"
            style={{ visibility: "visible", animationName: "fa-spin" }}
          />
          <span
            className="icon icon-dots wow fadeInleft animated"
            style={{ visibility: "visible" }}
          />
          <span
            className="icon icon-circle-1 wow zoomIn animated"
            style={{ visibility: "visible", animationName: "zoomIn" }}
          />
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">Description</span>
                  {/* <h2>Ultra-Modern Estate <br />in the Heart of Ibeju-Lekki</h2> */}
                  <h4 className="font-weight-bold">
                    The FloraCity is a luxury residential estate conceptualized
                    to provide homeliness, technology, energy efficiency, class,
                    executive security, recreation, daily needs, and social
                    lives enhanced by community living in a natural ambiance for
                    its occupants.
                  </h4>

                  <div className="text">
                    The development is targeted for singles, young couples,
                    parents who want a lasting legacy for their wards and who
                    need regular income sources for children expenses, a safe
                    haven for Nigerians residing abroad during home visits,
                    Nigeria residents who want a home away from home, and for
                    investors who would like to earn high yield short-let and
                    annual rental income from the hundreds of monthly affordable
                    luxury rental demands within our strategically targeted
                    locations.
                  </div>
                </div>

                {/* <div className="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSe9tp_xEJnKY2yitoCzRp7t6oj9yKF_Y2M6uzQ7nvoFzu6GHw/viewform" className="theme-btn btn-style-three"><span className="btn-title">Download  Our ebrochure here</span></a></div> */}
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12">
              <div className="image-box">
                <figure
                  className="image wow fadeIn animated"
                  style={{ visibility: "visible", animationName: "fadeIn" }}
                >
                  <img src={header} alt="Overview" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section-three no-pd-top">
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="title">FEATURES AND FACILITIES</span>
                  {/* <h2>Why Buy Property in The Fern Island?</h2> */}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li>
                  Recreation area: Private Swimming pool, Snooker, table-tennis
                  etc.
                </li>
                <li>Each apartment with terrace and well ventilated rooms .</li>
                <li>Village Kitchen (to order freshly prepared food).</li>
                <li>Mart (Mart, grocery and first aid) .</li>
                <li>24/7 Executive Security System.</li>
                <li>24/7 data service.</li>
                <li>Sewage system.</li>
                <li>Open sit-out.</li>
                <li>Gym.</li>
                <li>Crèche.</li>
                <li>Children library.</li>
              </ul>
            </div>
            {/* Feature Block */}
            <div className="feature-block-three col-lg-6 col-md-12 col-sm-12">
              <ul className="list-style-one">
                <li>Children play area.</li>
                <li>Fully fitted Kitchen.</li>
                <li>Central Water System.</li>
                <li>Central Car Parking area.</li>
                <li>Perimeter fence and gatehouse.</li>
                <li>Management/ Maintenance office.</li>
                <li>24/7 Zero-combustion Electricity Supply.</li>
                <li>Nature design Landscaping with palm trees .</li>
                <li>Affordable Luxury, smart & energy efficient homes.</li>
                <li>
                  Fitted bathroom with modern bathtub, water heater and shower.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="subplan-section">
        <div className="auto-container">
          <div className="sec-title text-center">
            <h2>Apartment Options With Prices </h2>
          </div>
          <div className="outer-box">
            <div className="row justify-content-between">
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan">Mini-flat</h4>
                    <h6 className="subplan-info">
                      1 Bedroom Fully Finished Luxury Mini Flat
                    </h6>
                  </div>
                  <div>
                    <img src={miniFlat} className="img-fluid my-2" alt="" />
                  </div>

                  <h6 className="subplan-desc">
                    A finely balanced and spacious home , this mini apartment
                    features a living room, guest wc, work area, a bedroom and a
                    well equipped bathroom.
                  </h6>
                  {/* <ul className="features ">
                                         <li class="true">Available No of Units: 17</li> 
                                        <li className="true"> Available units: 32</li>
                                        <li className="true"> Upper floor: N200,000 extra. </li>
                                        <li className="true" style={{ textDecoration: "line-through" }}>Current Market Price: N10m</li>
                                        <li className="true">Off plan price: N8.5m</li>
                                        <li> Off Plan outright: N7.5m </li>

                                    </ul>
                                    <h6 className="pl-3">Other Fee:</h6>
                                    <ul className="features">
                                        <li className="true">  Development: N2.2m </li>
                                        <li className="true"> Documentation: N1m </li>
                                    </ul> */}
                </div>
              </div>
              {/* subplan Block */}
              <div
                className="subplan-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp animated"
                style={{ visibility: "visible", animationName: "fadeInUp" }}
              >
                <div className="inner-box ">
                  <div className="subplan-box">
                    <h4 className="subplan"> Mezzanine apartment</h4>
                    <h6 className="subplan-info">
                      1 Bedroom fully finished terrace luxury Loft Apartment
                    </h6>
                  </div>
                  <div>
                    <img src={mezzazine} className="img-fluid my-2" alt="" />
                  </div>

                  <h6 className="subplan-desc">
                    Truly stunning to behold, this mezzanine home features a
                    living room, guest wc, work area, a suspended -floor bedroom
                    and a well equipped bathroom.
                  </h6>
                  {/* <ul className="features ">
                                        *<li class="true">Available No of Units: 30</li> 
                                        <li className="true">Available units: 20</li>
                                        <li className="true">Corner piece: N500,000 extra</li>
                                        <li className="true" style={{ textDecoration: "line-through" }}>Current Market Price: N12m</li>
                                        <li className="true">Off plan price: N10m</li>
                                        <li>Off Plan outright: N9m</li>

                                    </ul>
                                    <h6 className="pl-3">Other Fee:</h6>
                                    <ul className="features">
                                        <li className="true">Development: N2.7m </li>
                                        <li className="true"> Documentation: N1m </li>
                                    </ul> */}
                </div>
              </div>
              {/* subplan Block */}
            </div>
          </div>
        </div>
      </section>

      <section className="register-section" id="reserve">
        <div className="auto-container">
          <div className="anim-icons full-width">
            <span
              className="icon icon-circle-3 wow zoomIn animated animated"
              style={{ visibility: "visible", animationName: "zoomIn" }}
            />
          </div>
          <div className="outer-box">
            <div className="row no-gutters align-items-center">
              <div className="title-column col-lg-4 col-md-6 col-sm-12">
                <div className="inner">
                  <div className="sec-title light">
                    <div className="icon-box">
                      {/* <span className="icon flaticon-rocket-ship" /> */}
                      <figure>
                        <img
                          style={{ objectFit: "contain", width: "100px" }}
                          src={rocket}
                          alt=""
                        />
                      </figure>
                    </div>
                    <span className="title">Few Space Remaining...</span>
                    <h2>Reserve Now!!!</h2>
                    <div className="text">
                      Fill and Submit the form to reserve plot(s) of land or
                      building.
                    </div>
                  </div>
                </div>
              </div>
              {/*Register Form*/}
              <div className="register-form col-lg-8 col-md-6 col-sm-12">
                <div className="form-inner text-center">
                  <Optin_Trigger onSubmit={""} />
                  <a
                    href="tel:+2348024421356 "
                    className="call-enquiry call-link-three"
                    style={{ fontSize: "25px" }}
                  >
                    {" "}
                    OR CLICK HERE TO CALL +2348024421356{" "}
                  </a>
                  {/* <div class="btn-box ml-3"></div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OptinModal
        bookingDetail={bookingDetail}
        setbookingDetail={setbookingDetail}
        componentId="optinForm"
        title="PLEASE ENTER YOUR CORRECT DETAIL AND YOU'LL BE CONTACTED"
        component={<OptinForm />}
      />
      <PaymentDetails />
      {/* <Footer/> */}
    </>
  );
};

export default FloraEcopolis;
