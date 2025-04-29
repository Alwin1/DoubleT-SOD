import React from "react";
import "./FescueGrass.css";
import FescueImage from "../../assets/fescueImageProduct.jpg";
import GrassFooter from "../../assets/grassFooter.jpeg";

const FescueGrass = () => {
  return (
    <div className="fescueGrassContainer">
      <h2>Frontier Tall Fescue: Tough, Green, Reliable</h2>
      <div className="fescueGrassImageText">
        <div className="fescueGrassText">
          <p>
            Turf-Type Tall Fescue is the most commonly used and widely adapted
            turf grass variety in the southwest plains. Tall Fescues are a dark
            green, fine bladed Fescue with an upright leaf growth, and flatter
            crown. This bunch-type grass forms a dense growth pattern that
            enhances the overall look and quality of your lawn. It grows in a
            variety of soils and is the most heat and drought resistant of the
            cool season varieties.
          </p>
          <p>
            This narrow-bladed, cool season fescue is a specific blend grown by
            <span> KINGRANCH TURF FARMS</span> that is sturdy enough to survive
            hot temperatures and durable enough to withstand heavy traffic.
          </p>
          <p>
            Fescue maintains a beautiful hearty green color almost the entire
            year and does extremely well in shaded areas and in direct sunlight.
            It is a specific blend of proven varieties that offer uniformity,
            durability and disease resistance. These characteristic strengths
            assure you of a very adaptable turf grass.
          </p>
        </div>
        <img
          src={FescueImage}
          className="fescueImage"
          alt="Fontier Tall Fescue Image"
        />
      </div>
      <div className="fescueTipsContainer">
        <h2>Frontier Fescue Tips: Mowing, Fertilizing & Watering</h2>
        <p>
          <span>Mowing</span> - Increase the mowing height in the summer to 3 -
          3 1/2 inches to minimize heat stress.
        </p>
        <p>
          <span>Fertilizing</span> - Frontier Fescue in Zone 7 (USDA hardiness
          zone) or warmer SHOULD NOT BE fertilized with a nitrogen fertilizer
          during the summer months (June - August). To improve color or reduce
          heat stress during these months, a chelated iron product may be
          applied to Frontier Fescue as needed.
        </p>
        <p>
          <span>Watering</span> - After Frontier Fescue is established, deep,
          less frequent watering will encourage a deeper root system and
          healthier plant.
        </p>
      </div>
      <img src={GrassFooter} className="grassFooter" />
    </div>
  );
};

export default FescueGrass;
