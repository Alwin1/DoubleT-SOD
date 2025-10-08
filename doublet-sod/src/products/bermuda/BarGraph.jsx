import React, { useEffect, useRef, useState } from "react";
import "./BarGraph.css";
import CelebrationImage from "../../assets/celebrationBermuda.jpg";
import Tifway from "../../assets/testimonial-background.jpg";
import GrassFooter from "../../assets/grassFooter.jpeg";
import IronCut from "../../assets/ironcutBermuda.jpg";
import Tahoma from "../../assets/tahoma.png";

const data = [
  { label: "Drought Resistance", tifway: 6.0, celebration: 6.5, tahoma: 8.0},
  { label: "Heat Tolerance", tifway: 6.0, celebration: 6.0, tahoma: 7.0},
  { label: "Cold Tolerance", tifway: 4.0, celebration: 4.0, tahoma: 7.0},
  { label: "Reparability", tifway: 7.0, celebration: 7.0, tahoma: 8.0},
  { label: "Disease Resistance", tifway: 7.0, celebration: 7.0, tahoma: 7.5},
  { label: "Shade Resistance", tifway: 3.0, celebration: 5.0, tahoma: 6.0},
];

const BarGraph = () => {
  const containerRef = useRef();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setAnimate(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grassChartContainer">
      <div className="bermuda419Container">
        <img
          src={Tifway}
          className="bermudaImage"
          alt="Tifway 419 Bermuda Grass"
        />
        <div className="bermuda419TextContainer">
          <h2>Tifway 419 Bermuda</h2>
          <p>
            A very dense and fine textured hybrid Bermuda that exhibits very
            aggressive growth properties. Tifway 419 is a very soft yet durable
            turf grass that is appropriate for athletic and golf course use due
            to its ability to recover rapidly from injury.
            <br />
            <br />
            It exhibits moderately good cold tolerance, dark green coloration
            and has a very upright growth pattern.
          </p>
        </div>
      </div>
      <div className="celebrationBermudaContainer">
        <div className="celebrationTextContainer">
          <h2>Celebration Bermuda</h2>
          <p>
            The extra soft texture of Celebration Bermuda will undoubtedly give
            you happy feet. Besides the beautiful blue-green color this turf
            grass displays, it also has excellent drought, heat, salt and cold
            tolerance. This dense, easy maintenance variety is becoming a
            favorite among homes, businesses and playing fields alike. Because
            of it’s rapid horizontal growth and durability, this ‘self-healing’
            grass makes itself ideal for high traffic areas.
            <br />
            <br />
            Celebration is a perfect choice for the short growing season in the
            high plains area. Due to it’s dense and aggressive nature, it offers
            a superior soft texture yet is sturdy enough to survive hot
            temperatures as well as the cold.
            <br />
            <br />
            Early spring green-up and good fall color retention make it well
            suited to the Plains Area’s growing conditions a definite plus to
            the list of advantages of this amazing variety. Celebration requires
            less water and mowing and touts better shade tolerance than most
            Bermudagrass varieties.
          </p>
        </div>
        <img
          src={CelebrationImage}
          className="celebrationBermudaGrassImage"
          alt="Celebration Bermuda Grass"
        />
      </div>
      <div className="tahomaBermudaContainer">
        <div className="tahomaTextContainer">
          <h2>Tahoma 31 Bermuda</h2>
          <p>
            Tahoma 31 is a next-generation turf grass known for its superior
            drought tolerance, requiring significantly less water than most
            other varieties while maintaining its color and quality through long
            dry spells. With an ultra-dense, fine-bladed texture, it creates a
            lush, carpet-like appearance that not only looks premium but also
            helps naturally resist weeds.
            <br />
            <br />
            Unlike many warm-season grasses, Tahoma 31 is one of the most
            cold-hardy turf grasses available, thriving in regions with harsher
            winters such as West Texas. It’s also built to withstand heavy use,
            recovering quickly from foot traffic and making it ideal for sports
            fields, home lawns, and high-use areas. Trusted by professionals,
            Tahoma 31 has been installed on NFL and NCAA athletic fields thanks
            to its durability, fast recovery, and striking visual appeal.
          </p>
        </div>
      </div>
      {/* <div className="ironCutContainer">
        <div className="ironCutTextContainer">
          <h2>Iron Cutter Bermuda</h2>
          <p>
            Fine leaf texture, dark green color, and the production of a dense,
            low-growing canopy make Iron Cutter the ideal turf for homeowners
            and athletic fields alike. Early green-up make for a higher
            appealing golf courses. Unmatched drought tolerance and
            recoverability compared to existing Bermudas.
          </p>
        </div>
      </div> */}
      <div className="barChartContainer">
        <div className="chart-container" ref={containerRef}>
          <h3>Rating Scale (out of 10)</h3>
          <div className="legend">
            <div>
              <span className="legend-color tifway-color"></span> Tifway 419
            </div>
            <div>
              <span className="legend-color celebration-color"></span>{" "}
              Celebration
            </div>
            <div>
              <span className="legend-color tahoma-color"></span>{" "}
              Tahoma 31
            </div>
            {/* <div>
              <span className="legend-color iron-color"></span>{" "}
              Iron Cutter
            </div> */}
          </div>
          {data.map((item, index) => (
            <div className="chart-row" key={index}>
              <div className="barGraphLabel">{item.label}</div>
              <div className="bar-group">
                <div
                  className={`bar tifway ${animate ? "animate" : ""}`}
                  style={{ "--target-width": `${item.tifway * 10}%` }}
                >
                  <span>{item.tifway.toFixed(1)}</span>
                </div>
                <div
                  className={`bar celebration ${animate ? "animate" : ""}`}
                  style={{ "--target-width": `${item.celebration * 10}%` }}
                >
                  <span>{item.celebration.toFixed(1)}</span>
                </div>
                <div
                  className={`bar tahoma ${animate ? "animate" : ""}`}
                  style={{ "--target-width": `${item.tahoma * 10}%` }}
                >
                  <span>{item.tahoma.toFixed(1)}</span>
                </div>
                {/* <div
                  className={`bar iron ${animate ? "animate" : ""}`}
                  style={{ "--target-width": `${item.iron * 10}%` }}
                >
                  <span>{item.iron.toFixed(1)}</span>
                </div> */}
              </div>
            </div>
          ))}
          
        </div>
      </div>
      <div className="tipsContainer">
        <h2>Bermuda Grass Tips: Mowing and Fertilization</h2>
        <p>
          <span>Mowing</span> - Hybrid Bermuda offers the most versatility among
          turf grass varieties with respect to mowing heights. Bermuda that is
          maintained at the lowest recommended height will require frequent
          mowing and require the most maintenance, BUT will provide you with a
          luxurious carpet of pristine turf.
          <br />
          <br />
          <span>Fertilizing</span>- Do not fertilize too early in the spring,
          wait until your Hybrid Bermuda is 40-50% green as to discourage any
          competitive weed growth from your fertilizer application.
        </p>
      </div>
      
      <img src={GrassFooter} className="grassFooter" alt="Grass Footer Image" />
    </div>
  );
};

export default BarGraph;
