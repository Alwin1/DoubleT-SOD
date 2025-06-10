import React from "react";
import "./TopDressingSand.css";
import GrassFooter from "../../assets/grassFooter.jpeg";

const TopDressingSand = () => {
  return (
    <div className="topDressingSandContainer">
      <h2>Top-Dressing & Sand Leveling: Precision Lawn Care</h2>
      <div className="topDressingSandText">
        <p>
          Top-dressing your lawn—applying a thin layer of material (typically
          compost, sand, or topsoil) over the grass—offers several key benefits
          that improve the health, appearance, and resilience of your lawn.
        </p>
        <p>Here are the main advantages:</p>

        <ol>
          <li>
            <strong>Improves Soil Quality</strong>
            <ul>
              <li>
                Adds Organic Matter: Compost-based top dressing enriches the
                soil with nutrients and beneficial microbes.
              </li>
              <li>
                Enhances Soil Structure: Helps sandy soils retain water and
                nutrients, and loosens compacted clay soils.
              </li>
            </ul>
          </li>

          <li>
            <strong>Promotes Healthier Grass Growth</strong>
            <ul>
              <li>
                Encourages deeper root growth, making your lawn more
                drought-resistant.
              </li>
              <li>
                Stimulates new shoot development for a denser, lusher lawn.
              </li>
            </ul>
          </li>

          <li>
            <strong>Aids in Thatch Breakdown</strong>
            <ul>
              <li>
                The microbial activity in compost helps break down excessive
                thatch (the layer of dead grass), reducing lawn disease risk.
              </li>
            </ul>
          </li>

          <li>
            <strong>Improves Drainage and Water Retention</strong>
            <ul>
              <li>
                Balances soil moisture: helps dry areas hold more water and wet
                areas drain better.
              </li>
            </ul>
          </li>

          <li>
            <strong>Levels the Lawn Surface</strong>
            <ul>
              <li>
                Fills in low spots or minor dips to create a smoother, more even
                lawn for mowing and appearance.
              </li>
            </ul>
          </li>

          <li>
            <strong>Reduces Disease and Pest Issues</strong>
            <ul>
              <li>
                Healthier soil and turf can naturally resist common lawn
                diseases and pests more effectively.
              </li>
            </ul>
          </li>

          <li>
            <strong>Enhances Seed Germination</strong>
            <ul>
              <li>
                When done in combination with overseeding, top dressing creates
                a favorable seedbed, improving seed-to-soil contact.
              </li>
            </ul>
          </li>

          <li>
            <strong>Reduces Compaction</strong>
            <ul>
              <li>
                Regular top dressing, especially when combined with aeration,
                helps relieve compacted soils over time.
              </li>
            </ul>
          </li>
        </ol>

        <p>
          Sand leveling - applying a thin layer of sand to low or uneven areas
          of your lawn—offers several targeted benefits, especially for
          improving surface smoothness and drainage. It’s a common practice on
          golf courses and increasingly used by homeowners seeking a pristine,
          level lawn.
        </p>
      </div>
      <img src={GrassFooter} className="grassFooter" />
    </div>
  );
};

export default TopDressingSand;
