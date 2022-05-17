import React, { useEffect, useState } from "react";
import tawkTo from "tawkto-react";
import "./style.css";
import partner from "../../assets/partner2.jpg";
// import optin_bg from "../../assets/optin-bg.jpg"
// import verification from "../../assets/verification.png";
// import background from "../../assets/background.jpg";
import price from "../../assets/price.png";
import customer1 from "../../assets/customers/1.png";
import customer2 from "../../assets/customers/2.png";
import customer3 from "../../assets/customers/3.png";
import customer4 from "../../assets/customers/4.png";
import verificationImage from "../../assets/verification/verification price.png";
// import iconShape from "../../assets/icon-shape.png";
import PaymentDetails from "../../SharedComponents/PaymentDetails";
import LandingPageOptinForm from "../../SharedComponents/LandingPageOptinForm";
import EngageInService from "../../SharedComponents/EngageInService";
import { useDispatch } from "react-redux";
import makeConsultation from "../../../actions/verificationConsultation";
import { useSelector } from "react-redux";
// import Footer from "../../layouts/Footer";

const Verification = () => {
  const tawkToPropertyId = "5a9e51824b401e45400d70e9";

  // Direct Chat Link
  // https://tawk.to/chat/tawkToPropertyId/tawkToKey

  const tawkToKey = "1cit1c3m8";

  useEffect(() => {
    tawkTo(tawkToPropertyId, tawkToKey);
  }, []);

  const [consultationDetails, setconsultationDetails] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    whatsaap_number: "",
    category: "",
    est_of_interest: "",
    contact_me: "",
    message: "",
    how_you_hear_about_us: "",
  });
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state) => state.verificationConsultation
  );

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(makeConsultation(consultationDetails));
    setconsultationDetails({
      full_name: "",
      email: "",
      phone_number: "",
      whatsaap_number: "",
      category: "",
      est_of_interest: "",
      contact_me: "",
      message: "",
      how_you_hear_about_us: "",
    });
  };

  return (
    <>
      <section style={{ background: "#541484",padding:15}}>
        <div className="heading-container">
          <h1>Welcome to Nigeria</h1>
        </div>
        <div className="heading-paragraph">
          <p style={{ color: "#fff", fontSize: 20, lineHeight: "1.4rem" }}>
            … where just doing "property search" or sending "Surveyors" to the
            land are no longer sufficient to keep you away from impending
            property losses and scams;
          </p>
        </div>
        <div className="heading-paragraph">
          <p style={{ color: "#fff", fontSize: 20, lineHeight: "1.4rem" }}>
            … where you won't have public access to certain property regulations
            until you're about to be penalised for an offence you didn't know
            you committed.
          </p>
        </div>
        <div className="heading-container">
          <h1>
            Don't Lose Your Money, Let Us Help You Verify Your Real Estate
            Investment.
          </h1>
        </div>
        <div className="heading-paragraph">
          <p style={{ color: "#fff", fontSize: 20, lineHeight: "1.4rem" }}>
            When we verify your property, you will have{" "}
            <span style={{ fontWeight: "bold" }}> 50 YEARS WARRANTY </span>
            against; any demolition issues, dispute issues, encumbrance issues,
            3rd party claimants, government acquisition, structural defects, any
            property related losses and any potential scams of your investments.
          </p>
        </div>

        <div
          className="phone-number"
          style={{
            textAlign: "center",
            display: "block",
          }}
        ></div>
        {/* <div className="img verification"> */}
        {/* <h4
          className="text-center"
          style={{ marginBottom: "20px", color: "white" }}
        >
          Affiliated Professional Bodies
        </h4> */}
        <img
          id="firstP"
          style={{ top: "-20px" }}
          className="mt-4"
          src={partner}
          alt="partners"
        />
        {/* </div> */}
      </section>
      <section>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h2 className="top-h2">
              Join the league of over 1000 Smart Property Investors who have
              trusted us to protect their real estate investments.
            </h2>
            <div className="heading-paragraph">
              <p style={{ color: "#000", fontSize: 20, lineHeight: "1.4rem" }}>
                Don't be a victim of fake C of O, fake Excision, fake
                Allocation, encumbered property, internal and external disputes,
                government acquisition, title issues, unregistered title issues,
                unregistered disputes, property encroaching road, wrong uses,
                incomplete documentation, fake "title under processing", price
                extortion, building with defective structure, property that is
                susceptible to flooding, untruthful professionals, dubious
                agents, dubious developers, greedy Omo-Onile, property with
                multiple owners or any potential scams of your investments…{" "}
                <br />
                Let us run a complete property verification for your Real Estate
                Investments irrespective of your location and get up to 50 years
                warranty for your property.
              </p>
            </div>

            {/* <p style={{ fontWeight: 'bold' }}>
                So how exactly do you know the genuinity of a property?
              </p> */}
          </div>
        </div>
      </section>

      <section style={{ background: "#541484" }}>
      <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <p
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "30px",
                paddingTop: "30px",
                textAlign: "center",
              }}
            >
              Starting from as little as N60,000…
            </p>

            <div className="heading-paragraph">
              <p style={{ color: "#fff", fontSize: 20, lineHeight: "1.4rem" }}>
                You will get your property completely verified and indemnified
                against all property related losses and scams.
              </p>
            </div>

            <div className="heading-paragraph">
              <p style={{ color: "#fff", fontSize: 20, lineHeight: "1.4rem" }}>
                Don't Lose Your Money, Let Us Help You Verify Your Real Estate
                Investment Before You Pay For That Next Property.
              </p>
            </div>
            <div className="heading-paragraph">
              <p style={{ color: "#fff", fontSize: 20, lineHeight: "1.4rem" }}>
                And if you have already paid for the property without carrying
                out professional due diligence, you still need to engage the
                Complete Property Verification now without delay, so that you
                can be rightly guided and protected against any future losses.
              </p>
            </div>
            <br />
            {/* <div className="content-column">
            <div className="inner-column">
              <div className="row">
                a comment: Bullet Listing Column 
                <div className="affiliate-block col-lg-12 col-md-12">
                  <div className="sec-title">
                    <h2 className="text text-light">ONLY WHEN EVERY REQUIRED LANDED PROPERTY PROFESSIONALS COME TOGETHER TO TAKE EVERY SINGLE PROPERTY THROUGH PROPER VERIFICATION PROCESSES…
                    </h2>
                    <h2 className="text text-light">
                      But Wait, Who are these professionals and What does the process entail?
                    </h2>
                  </div>
                </div>
              </div>
             a coment start: <div class="row">

                            <div class="container">

                                <div class="text-center">

                                    <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" class="theme-btn btn-style-four"><span class="btn-title">Engage Service</span></a></div>

                                </div>

                            </div>

                       ends: </div>

            </div>
          </div> */}
          </div>
          </div>
      </section>
      {/*       
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 mt-5 mb-5">
              comment: sana 
              <p>
                Due to the prevalence of demolition, eviction, dispute, collapse and scam issues relating to landed properties, our verification team which include but not limited to Estate Surveyors, Land Surveyors, Property Lawyers, Town-Planners, Civil Engineers, Architects, Researchers etc set out to help individuals and corporate investors to verify and clear their subject of interest either before paying for the new found property or for already existing property against government acquisition, title issues, ownership issues, Omo-Onile wahala, uses issues, dispute, third party claimants, structural defects etc. This we achieve by taking such properties through our systemised verification checklist.
              </p>
              <h5>
                Where else do you want to do your property verification aside from FloraHomesGC, the most trusted property verification company in Nigeria with the right hands, qualifications and years of experience?
              </h5>
              <br />
              <h2><b>Our property verification includes but not limited to the following:</b></h2>
              <br /><br />
              <h5> <b>1) STATUS VERIFICATION: This involves confirming if the land ( either unbuilt or built) is free from any government commitment.</b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>Physical land inspection with our land experts for picking Coordinates, and engaging in other field research.</li>
                <li>Correlating the document data with the actual site location data and determining the actual status of the land.
                </li>
                <li>Competitive analysis of similar adjoining Properties.</li>
                <li>Coordinate Charting at Surveyor General's office for updated information.</li>
              </ul>
              <br /><br />
              <h5> <b>2) TITLE &amp; OWNERSHIP VALIDATION (TOV): This involves confirming the genuity of the acclaimed property title, checking for debt, encumbrances or dispute of any kind, as well as confirming the real ownership of the said property.</b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>A comprehensive examination of all documents
                </li>
                <li>Confirming other government Property requirements
                </li>
                <li>Authentication of the claimed title.</li>
                <li>Authenticating the property ownership</li>
                <li>Unveiling any possible third-party ownership claims.</li>
                <li>Unraveling the property history.</li>
                <li>Root of title research</li>
                <li>Checking of taxes or collateral issues</li>
                <li>Checking any internal dispute.</li>
                <li>Presentation of Report at the end of the exercise.</li>
              </ul>
              <br /><br />
              <h5> <b>3)BUILDING DOCUMENTS, LAND USES &amp; STRUCTURAL VERIFICATION: All documents regarding building regulation are vetted, land uses that ensure structures are fixed according to regulated plans and the structure is vetted to ascertain that there's no structural weaknesses that may lead to collapse, meeting all standard regarding futuristic investment. Contradicting these plans usually lead to demolition, collapse, eviction or paying penal-fees. </b>
              </h5>
              <ul className="list-style-two mt-4">
                <li>Confirming all documents in relation to the structure.
                </li>
                <li>Ensure interest land use tally with existing use
                </li>
                <li>Confirming the site plan is in conformity with approved layout plan
                </li>
                <li>Confirming all planning tallies with the state master plan.
                </li>
                <li>Examining the Structural state of the interest building.
                </li>
                <li>Flooding susceptibility check.
                </li>
              </ul>
              <br />
            </div>
          </div>
        </div>
      </section> */}

      {/* <section style={{ backgroundImage: `url(${background})` }}> */}
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              {/* <p style={{ color: 'white' }}> You're still waiting…
              </p> */}
              {/* <p style={{ color: 'white' }}>
                We say
                Don't be a victim of fake C of O, fake Excision, fake Allocation, encumbered property, internal and external disputes, committed acquisition, property encroaching road, wrong uses, incomplete documentation, fake "title under processing", price extortion, building with defective structure, property that is susceptible to flooding, untruthful professionals, dubious agents, dubious developers, greedy Omo-Onile, property with multiple owners and many other issues…
              </p> */}
              <h5 style={{ color: "black", textDecoration: "underline" }}>
                <b>How it works</b>
              </h5>
              <br />
              <ol className="list-style-two ul-text-dark">
                <li>
                  Our verification team made up of professionals: Researchers,
                  Estate Surveyors, Land Surveyors, Property Lawyers, Town
                  Planners, Civil Engineers, Investigative Journalist,
                  Architects, Builders, Quantity Surveyors, etc are set to help
                  individuals and corporate investors to verify their land and
                  building(s) of interest before making payment for it.
                </li>
                <li>
                  At the completion of our verification exercise, if the subject
                  property is closable and/or perfectable, in addition to the
                  other post-verification activities that must be executed, this
                  property will as well be protected under our professional
                  indemnity cover (insurance) for the next 50 years. If any
                  losses occur within this period, we would be fully responsible
                  for your property investment at zero contribution from you.
                  And when nothing happens within this 50 years, you can be sure
                  that nothing will happen thereafter. You have 100% guaranteed
                  safe property investments with us.
                </li>
                <li>
                  <a style={{ fontWeight: "bold" }}>
                    Fill the form now to Request A Call-Back
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="about-section"> */}
      {/* <div className="auto-container"> */}
      {/* <section className="schedule-section">
            <div className="anim-icons">
              <span className="icon icon-circle-4 wow zoomIn animated animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
              <span className="icon icon-circle-3 wow zoomIn animated animated" style={{ visibility: 'visible', animationName: 'zoomIn' }} />
            </div>
            <div className="auto-container" style={{ overflowX: 'visible !important' }}>
              <div className="sec-title text-center" style={{ overflowX: "visible !important" }}>
                <span className="title">HOW TO</span>
                <h2>Engage Our Verification Service</h2>
              </div>
              <div className="schedule-tabs tabs-box" style={{ overflowX: "visible !important" }}>
                <div className="tabs-content" style={{ overflowX: "visible !important" }}>
                  {Tab}
                  <div className="tab active-tab" id="tab-1" style={{ overflowX: "visible !important" }}>
                    <div className="schedule-timeline" style={{ overflowX: "visible !important" }}>
                      { schedule Block }
                      <div className="schedule-block" style={{ overflowX: "visible !important" }}>
                        <div className="inner-box" style={{ overflowX: "visible !important" }}>
                          <div className="inner" style={{ overflowX: "visible !important" }}>
                            <div className="date" style={{ overflowX: "visible !important" }}>1ST <br /> STEP</div>
                            {   <h4>Click Button</h4> }
                            {   <div class="text" style="color: #000000">Enter your correct information <a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style="text-decoration: underline;">here</a> with all the necessary documents

                                            </div> }
                            <button className="theme-btn btn-style-three"><span className="btn-title">Get Your Free Consultation</span></button>
                            {  <div class="text" style="color: #000000; cursor: pointer !important;" ><strong id="form_caller">Get Your Free Consultation</strong>
                                            </div> }
                          </div>
                        </div>
                      </div>
                      schedule Block 
                      <div className="schedule-block even">
                        <div className="inner-box">
                          <div className="inner">
                            <div className="date">2ND <br /> STEP</div>
                           <h4>Payment</h4> 
                            <div className="text" style={{ color: '#000000' }}>Make Payment.</div>
                          </div>
                        </div>
                      </div>
                    schedule are comment ...schedule Block 
                      <div className="schedule-block">
                        <div className="inner-box">
                          <div className="inner">
                            <div className="date">3RD <br /> STEP</div>
                              comment starts... <h4>Service Information</h4>
                           <div class="text" style="color: #000000">Submit Service Information.</div>... comment ends
                            <a className="theme-btn btn-style-three" href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" style={{ textDecoration: 'none' }}><span className="btn-title">Submit Service Information.</span></a>
                          </div>
                        </div>
                      </div>
                      schedule Block= a comment
                      <div className="schedule-block even">
                        <div className="inner-box">
                          <div className="inner">
                            <div className="date">4TH <br /> STEP</div>
                             comment...<h4>Customer Care</h4> 
                            <div className="text" style={{ color: '#000000' }}>
                              Connect with Your Personal Manager.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              *comment start here...<br><br> 
              <div class="row">

                    <div class="container">

                        <div class="text-center">

                            <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform " class="theme-btn btn-style-three"><span class="btn-title">Engage Service</span></a></div>

                        </div> <br> <br>




                    </div>

                </div>
 *comment ends
              <div className="text-center">
                <h5 style={{ marginTop: '5px', color: '#3A005F !important' }}><b>NOW IT'S TIME TO TAKE YOUR FIRST STEP</b></h5>
                <div className="btn-box"><button id className="theme-btn btn-style-four pop_up_form_simple" style={{}}><span className="btn-title">CLICK HERE TO SCHEDULE YOUR 15 MINUTES FREE CONSULTATION NOW</span></button></div>
              </div>
            </div>
          </section> */}

      <section className style={{ background: "#541484" }}>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h5 style={{ color: "#fff", textDecoration: "underline" }}>
              <b>
                {" "}
                Our property verification includes but not limited to the
                following:
              </b>
            </h5>

            <ul
              className="list-style-two ul-text-white"
              style={{ color: "white" }}
            >
              <li>
                Physical land inspection with our land experts for picking
                Coordinates, and engaging in other field research.
              </li>
              <li>
                Correlating the document data with the actual site location data
                and determining the actual status of the land.
              </li>
              <li>Competitive analysis of similar adjoining Properties.</li>
              <li>
                Coordinate Charting at Surveyor General's office for updated
                information.
              </li>
              <li>A comprehensive examination of all documents</li>
              <li>Confirming other government Property requirements</li>
              <li>
                Checking for unregistered titles, disputes, transfers,
                encumbrance, ownerships etc.
              </li>
              <li>Authentication of the claimed title.</li>
              <li>Authenticating the property ownership</li>
              <li>Unveiling any possible third-party ownership claims.</li>
              <li>Unravelling the property history.</li>
              <li>Root of title research.</li>
              <li>Checking of taxes or collateral issues</li>
              <li>Checking any internal dispute.</li>
              <li>
                Examining both the major Structural status as well as any minor
                defects within the subject building .
              </li>
              <li>Flooding susceptibility check.</li>
              <li>
                Confirming and correlating all documents in relation to the
                structure.
              </li>
              <li>Ensure interest land use tally with masterplan use</li>
              <li>
                Confirming the existing building plan is in conformity with the
                approved plan.
              </li>
              <li>
                Confirming that all site planning tallies with any existing
                layout plan and/or the state masterplan.
              </li>
              <li>
                Measuring the sizes of the land, site, rooms and all spaces
                within the property.
              </li>
              <li>
                Determine the opinion of value as a basis for negotiation.
              </li>
              <li>General environmental assessment of the property. </li>
              <li>
                Road Encroachment/setback checks and conformity through both
                states and federal masterplan
              </li>
              <li>Negotiations</li>
              <li>
                Authentication of closure documents in the required offices.
              </li>
              <li>
                Production and execution of all contractual documents including
                deed of assignment, contract of sale, meeting agreement etc.
              </li>
              <li>
                Perfection of title document after the completion of
                transactions.
              </li>
              <li>And much more...</li>
            </ul>

            <p
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "25px",
                paddingTop: "30px",
                textAlign: "center",
              }}
            >
              FILL THE FORM NOW TO GET STARTED.
            </p>
            <br />

            {/* <div className="content-column">
            <div className="inner-column">
              <div className="row">
                a comment: Bullet Listing Column 
                <div className="affiliate-block col-lg-12 col-md-12">
                  <div className="sec-title">
                    <h2 className="text text-light">ONLY WHEN EVERY REQUIRED LANDED PROPERTY PROFESSIONALS COME TOGETHER TO TAKE EVERY SINGLE PROPERTY THROUGH PROPER VERIFICATION PROCESSES…
                    </h2>
                    <h2 className="text text-light">
                      But Wait, Who are these professionals and What does the process entail?
                    </h2>
                  </div>
                </div>
              </div>
             a coment start: <div class="row">

                            <div class="container">

                                <div class="text-center">

                                    <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform" class="theme-btn btn-style-four"><span class="btn-title">Engage Service</span></a></div>

                                </div>

                            </div>

                       ends: </div>
            </div>
          </div> */}
          </div>
        </div>
      </section>
      <section>
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-12 pt-5 pb-5 text-white">
              <h5 style={{ color: "black", textDecoration: "underline" }}>
                <b> What Customers Say About Us</b>
              </h5>

              <div className="row  justify-content-around">
                <img
                  id="verification-img-v"
                  className="customer-review-images"
                  src={customer1}
                  alt="Professional Charge"
                  width="100%"
                  height="100%"
                />
                <img
                  id="verification-img-v"
                  className="customer-review-images"
                  src={customer2}
                  alt="Professional Charge"
                  width="100%"
                  height="100%"
                />
                <img
                  id="verification-img-v"
                  className="customer-review-images"
                  src={customer3}
                  alt="Professional Charge"
                  width="100%"
                  height="100%"
                />
                <img
                  id="verification-img-v"
                  className="customer-review-images"
                  src={customer4}
                  alt="Professional Charge"
                  width="100%"
                  height="100%"
                />
              </div>

              {/* 
            <EngageInService
              first_step="Enter Your Detail Now To Request A Call-Back"
              second_step="  Make Payment."
              third_step="    Submit Service Information."
              fourth_step=" Connect with Your Personal Manager."
              call_to_action={
                <div
                  class="btn-box"
                  style={{
                    display: "block",
                    marginRight: "10px",
                    textAlign: "center",
                  }}
                >
                  <button
                    data-toggle="modal"
                    data-target="#landingModal"
                    class="theme-btn btn-style-three mb-4 mt-3"
                  >
                    <span class="btn-title">REQUEST A CALL-BACK NOW</span>
                  </button>
                </div>
              }
              call_to_action2={
                <div
                  className="phone-number"
                  style={{
                    color: "#ed6c11",
                    textAlign: "center",
                    display: "block",
                  }}
                >
                  <a href="tel:+2348094442019 " className="call-link-two">
                    {" "}
                    OR CLICK HERE TO CALL{" "}
                  </a>
                </div>
              }
            /> */}

              {/*    <br><br> */}
              {/* 
                    <div>
                        <h5 style="color: #541484 !important;"><b>CONTACTS </b></h5>
                        <p>
                            Mail: hello.florahomesgc@gmail.com<br>
                            Tel.: +234 809 444 2019<br>
                            +234 802 442 1356<br>
                        </p>

                    </div> */}
              {/*  <br><br> */}

              {/*   <div class="row">



                        <div class="container">

                            <div class="text-center">

                                <div class="btn-box"><a href="https://docs.google.com/forms/d/e/1FAIpQLSc8rf7DAg4Wb4-ghqM-IVMXglwR-M_CwMjLd3d3_sdeGUaxKA/viewform " class="theme-btn btn-style-three"><span class="btn-title">Engage Service</span></a></div>

                            </div> <br> <br>




                        </div>

                    </div>
 */}
            </div>
          </div>
        </div>
      </section>
      <section className style={{ background: "#541484" }}>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h5 style={{ color: "#fff", textDecoration: "underline" }}>
              <b>
                Our property verification includes but not limited to the
                following:
              </b>
            </h5>

            <ul
              className="list-style-two ul-text-white"
              style={{ color: "white" }}
            >
              <li>
                Physical land inspection with our land experts for picking
                Coordinates, and engaging in other field research.
              </li>
              <li>
                Correlating the document data with the actual site location data
                and determining the actual status of the land.
              </li>
              <li>Competitive analysis of similar adjoining Properties.</li>
              <li>
                Coordinate Charting at Surveyor General's office for updated
                information.
              </li>
              <li>A comprehensive examination of all documents</li>
              <li>Confirming other government Property requirements</li>
              <li>
                Checking for unregistered titles, disputes, transfers,
                encumbrance, ownerships etc.
              </li>
              <li>Authentication of the claimed title.</li>
              <li>Authenticating the property ownership</li>
              <li>Unveiling any possible third-party ownership claims.</li>
              <li>Unravelling the property history.</li>
              <li>Root of title research.</li>
              <li>Checking of taxes or collateral issues</li>
              <li>Checking any internal dispute.</li>
              <li>
                Examining both the major Structural status as well as any minor
                defects within the subject building .
              </li>
              <li>Flooding susceptibility check.</li>
              <li>
                Confirming and correlating all documents in relation to the
                structure.
              </li>
              <li>Ensure interest land use tally with masterplan use</li>
              <li>
                Confirming the existing building plan is in conformity with the
                approved plan.
              </li>
              <li>
                Confirming that all site planning tallies with any existing
                layout plan and/or the state masterplan.
              </li>
              <li>
                Measuring the sizes of the land, site, rooms and all spaces
                within the property.
              </li>
              <li>
                Determine the opinion of value as a basis for negotiation.
              </li>
              <li>General environmental assessment of the property. </li>
              <li>
                Road Encroachment/setback checks and conformity through both
                states and federal masterplan
              </li>
              <li>Negotiations</li>
              <li>
                Authentication of closure documents in the required offices.
              </li>
              <li>
                Production and execution of all contractual documents including
                deed of assignment, contract of sale, meeting agreement etc.
              </li>
              <li>
                Perfection of title document after the completion of
                transactions.
              </li>
              <li>And much more...</li>
            </ul>

            <p
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "25px",
                paddingTop: "30px",
                textAlign: "center",
              }}
            >
              FILL THE FORM NOW TO GET STARTED.
            </p>
            <br />
          </div>
        </div>
      </section>
      <section>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h5 style={{ color: "black", textDecoration: "underline" }}>
              <b> More Benefits:</b>
            </h5>
            <ul
              className="list-style-two ul-text-dark"
              style={{ color: "white" }}
            >
              <li>
                It protects you against scam, eviction, encumbrance, demolition
                or any kind of property losses.
              </li>
              <li>
                You get peace of mind on your property{" "}
                <span style={{ textDecorationLine: "line-through" }}>
                  {" "}
                  as you do not stand any risk of property losses
                </span>
                .
              </li>
              <li>Services are executed and delivered promptly.</li>
              <li>
                When your property is 100% protected, it translates to a
                guaranteed increase in the property value as well.
              </li>
              <li>There's ease of title transfer anytime there is need to.</li>
              <li>
                We deploy only experienced and qualified property professionals
                to handle our clients' projects so you have no fear of losses
                due to quackery.
              </li>
              <li>Everything is done on your behalf 100%</li>
              <li>
                We produce and execute the pre-purchase agreement and
                documentation.
              </li>
              <li>
                You enjoy stress-free, great value for less stress and you have
                more time to focus on other things that matter to you.
              </li>
              <li>
                We give you a perfect understanding of the true status of your
                interest property to create for you a good basis for negotiation
                or total decline from transactions.
              </li>
            </ul>
            <p
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: "25px",
                paddingTop: "30px",
                textAlign: "center",
              }}
            >
              ENTER YOUR DETAIL NOW TO GET STARTED
            </p>
          </div>
        </div>
      </section>
      <section style={{ background: "#541484" }}>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h5 style={{ color: "#fff", textDecoration: "underline" }}>
              <b> Price</b>
            </h5>
            <p
              style={{
                lineHeight: "2rem",
                fontSize: "16px",
                fontWeight: 200,
                color: "#fff",
              }}
            >
              Verification Price Table
            </p>
            <div className="row justify-content-center">
              <img
                id="verification-img-v"
                className="verification-image"
                src={verificationImage}
                alt="Verification Image"
              />
            </div>
            <br />
            <ul
              className="list-style-two ul-text-white"
              style={{ color: "white" }}
            >
              <li>N/A == Not Applicable</li>
              <li>
                Client pays all statutory fees as well as other ancillary
                expenses relating to taking property possession, Survey and
                title perfection, etc.
              </li>
            </ul>
            <p
              style={{
                color: "#fff",
                fontSize: "25px",
                paddingTop: "30px",
                textAlign: "center",
              }}
            >
              To know the kind of Verification type(s) suitable for your need,
              click this button now to enter your details and one of our team
              will get in touch with you almost immediately.
            </p>
            <br />
          </div>
        </div>
      </section>
      <section>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h5 style={{ color: "black", textDecoration: "underline" }}>
              <b> How To Engage This Service</b>
            </h5>
            <p
              style={{
                color: "#000",
                fontSize: "20px",
                paddingTop: "30px",
                textAlign: "left",
              }}
            >
              1ST STEP: Enter Your Detail Now To Request A Call-Back <br />
              2ND STEP: Make Payment.
              <br /> 3RD STEP: Submit Service Information.
              <br /> 4TH STEP: Connect with Your Personal Manager.
              <br />
              <br />
              NOW IT'S TIME TO TAKE YOUR FIRST STEP
            </p>
            <p
              style={{
                fontWeight: "bold",
                color: "#000",
                fontSize: "25px",
                paddingTop: "30px",
                textAlign: "center",
              }}
            >
              ENGAGE THIS SERVICE TO HAVE PEACE OF LANDED INVESTMENT, CLICK THIS
              BUTTON NOW TO REQUEST A CALL-BACK
            </p>
          </div>
        </div>
      </section>

      <section style={{ background: "#541484" }}>
        <div className="auto-container">
          <div className="col-lg-12 pt-5 pb-5 text-white">
            <h5 style={{ color: "#fff", textDecoration: "underline" }}>
              <b> WHO WE ARE</b>
            </h5>
            <p
              style={{
                color: "#fff",
                fontSize: "20px",
                paddingTop: "30px",
                textAlign: "left",
              }}
            >
              We are Nigeria's No. 1 Property Verification and Real Estate
              Investment company that gives professional end to end Real Estate
              and Property Development services across Nigeria through our
              experienced and ethical team of professionals which includes but
              not limited to; Land Surveyors, Estate Surveyors, Town Planners,
              Property Lawyers, Quantity Surveyors, Civil Engineers, Architects,
              Researchers. . .
            </p>
            <h5 style={{ color: "#fff", textDecoration: "underline" }}>
              <b>WE ARE KNOWN FOR:</b>
            </h5>
            <ul
              className="list-style-two ul-text-white"
              style={{ color: "white" }}
            >
              <li>
                Leading at providing the best real estate verification services
                across Nigeria that indemnifies buyers against both present and
                future losses of any kind.
              </li>
              <li>
                Offering end to end 100% done-for-you real estate and property
                development services to existing and aspiring stakeholders be it
                individuals, developers, organisations, clubs, groups.
              </li>
              <li>
                Delivering simplified quality information to the mobile phones
                of every property investor using technology.
              </li>
              <li>
                Engaging in community and town planning that protects against
                life and property loss.
              </li>
              <li>
                Engaging green architecture that revitalises every soul
                occupying the space.
              </li>
              <li>
                Ensuring all properties to be traded or to be developed go
                through a thorough Verification process so as to replace loss
                and fear with trust and peace in the minds of stakeholders.
              </li>
              <li>
                Giving excellent service and quality of materials that ensure
                all investments are aimed at futuristic sustainability and not
                just for short term advantage.
              </li>
              <li>
                Ensuring timely delivery that produces optimum return on fund
                input.
              </li>
              <li>
                Delivering excellent physical equivalents in any of our models.
              </li>
              <li>
                Ensuring confidentiality and security that protects us and our
                customers from danger through exposure.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <PaymentDetails />
      <LandingPageOptinForm
        onSubmit={onSubmit}
        consultationDetails={consultationDetails}
        setconsultationDetails={setconsultationDetails}
        data={data}
        loading={loading}
        error={error}
      />
      {/* <Footer/> */}
    </>
  );
};

export default Verification;
