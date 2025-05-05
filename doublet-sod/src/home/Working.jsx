import React from "react";
import "./Working.css";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import Step1 from "../assets/step1.png";
import Step2 from "../assets/step2.png";
import Step3 from "../assets/step3.png";
import CalendarPic from "../assets/calendar.png";
import Nomoney from "../assets/nomoney.png";
import DeliveryPic from "../assets/deliveryPic.jpg";
import ArrowCircle from "../assets/arrow-circle.png";
import GrassFooter from "../assets/grassFooter.jpeg";

const Working = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLearnMoreClick = () => {
    navigate("/contact"); // Programmatically navigate to the /about route
  };

  return (
    <div className="workingContainer">
      <h2 className="workingTitle">How Does It Work?</h2>
      <div className="stepsContainer">
        <div className="stepContainer step1Container">
          <div className="stepTitleWrapper">
            <img src={Step1} className="step" />
            <h3 className="stepTitle">Tell Us What You Need</h3>
          </div>
          <p className="stepParagraph">
            Let us know the type of grass, square footage, and your preferred
            delivery date & location.
          </p>
        </div>
        <div className="stepContainer step2Container">
          <div className="stepTitleWrapper">
            <img src={Step2} className="step" />
            <h3 className="stepTitle">We Handle The Rest</h3>
          </div>
          <p className="stepParagraph">
            We coordinate with local sod farms to have your order cut fresh,
            picked up, and delivered directly to you!
          </p>
        </div>
        <div className="stepContainer step3Container">
          <div className="stepTitleWrapper">
            <img src={Step3} className="step" />
            <h3 className="stepTitle">
              Relax - We've Got The Heavy Lifting Covered
            </h3>
          </div>
          <p className="stepParagraph">
            We have installation crews ready to tackle any project! Schedule a
            quote to to receive pricing on your project. Let us do the heavy
            lifting for you!
          </p>
        </div>
      </div>
      <div className="noticesContainer">
        <div className="seasonsContainer">
          <div className="seasonsTitleContainer">
            <img src={CalendarPic} className="seasonsPic" />
            <h3 className="seasonsTitle">Peak Season Notice</h3>
          </div>
          <p className="seasonsParagraph">
            We usually are on a 2-week or more lead time. We will do
            everything we can to get orders as fast to you as possible.
          </p>
        </div>
        <div className="seasonsContainer">
          <div className="seasonsTitleContainer">
            <img src={Nomoney} className="seasonsPic" />
            <h3 className="seasonsTitle">No Upfront Payment</h3>
          </div>
          <p className="seasonsParagraph">
            Pay nothing up front to get on the schedule. Pay upon delivery via
            Cash, Check, Venmo, or Apple Pay.
          </p>
        </div>
      </div>
      <div className="pricingContainer">
        <div className="pricingParagraphs">
          <div className="orderParagraph">
            <h3 className="pricingTitle">
              Order by Square Foot or Full Pallet
            </h3>
            <ul className="pricingList">
              <li>
                Fescue & Bermuda available by square foot or full pallet (450
                sq. ft.).
              </li>
              <li>Full Pallet: $240</li>
              <li>Per Sq. Ft.: $0.53</li>
              <li>Minimum Delivery: ½ pallet ($150 minimum order)</li>
            </ul>
          </div>
          <div className="orderParagraph">
            <h3 className="pricingTitle">Delivery Pricing</h3>
            <ul className="pricingList">
              <li>Lubbock: $75 Local Delivery Fee</li>
              <li>Outside Lubbock? Contact us for a custom delivery quote.</li>
              <p>
                Please note a $120 cancellation fee per pallet will be applied
                to any orders canceled within 48 hours of the scheduled delivery
                date.
              </p>
            </ul>
          </div>
        </div>
        <img src={DeliveryPic} className="deliveryPic" alt="Bermuda Fescue Frontier" loading="lazy"/>
      </div>
      <div className="savingContainer">
        <h2 className="savingTitle">Save Time & Money with Double-T Sod</h2>
        <p className="savingParagraph">
          Call or text us today at 806-577-1510 to schedule your sod delivery.
          Choose the perfect sod for a lush, beautiful lawn—we’ll handle the
          hard work for you!
        </p>
        <button className="freeQuoteButton" onClick={handleLearnMoreClick}>
          <p>Get a Free Quote Now</p>
          <img src={ArrowCircle} />
        </button>
      </div>
      <img src={GrassFooter} className="grassFooter" />
    </div>
  );
};

export default Working;
