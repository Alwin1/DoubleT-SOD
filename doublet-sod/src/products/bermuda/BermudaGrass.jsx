import React from "react";
import Leaf from "../../assets/leaf.png";
import Sun from "../../assets/sun.png";
import Drought from "../../assets/drought.png";
import Mower from "../../assets/mower.png";
import Scheduling from "../../assets/scheduling.png";
import "./BermudaGrass.css";

const BermudaGrass = () => {
  const comparisonData = [
    {
      category: "Appearance",
      items: [
        {
          name: "Grass Texture",
          Tifway419: "Fine",
          Celebration: "Soft",
          icon: Leaf,
        },
        {
          name: "Grass Color",
          Tifway419: "Dark Green",
          Celebration: "Dark Blue Green",
          icon: Leaf,
        },
      ],
    },
    {
      category: "Environmental Adaptation",
      items: [
        {
          name: "Shade Tolerance",
          Tifway419: "Fair",
          Celebration: "Excellent",
          icon: Sun,
        },
        {
          name: "Drought Resistance",
          Tifway419: "Very Good",
          Celebration: "Excellent",
          icon: Drought,
        },
      ],
    },
    {
      category: "Culture",
      items: [
        {
          name: "Mowing Needs",
          Tifway419: "Medium",
          Celebration: "Low",
          icon: Mower,
        },
        {
          name: "Mowing Height",
          Tifway419: '1/4" - 2"',
          Celebration: '1/2" - 2"',
          icon: Mower,
        },
        {
          name: "Planting Schedule",
          Tifway419: (
            <>
              <span className="underLineTable">Year Round</span><br />Zone 7 South<br /><br /><span className="underLineTable">March - Sept</span><br />Zone 6
            </>
          ),
          Celebration: (
            <>
              <span className="underLineTable">Year Round</span><br />Zone 7 South<br /><br /><span className="underLineTable">March - Sept</span><br />Zone 6
            </>
          ),
          icon: Scheduling,
        },
      ],
    },
  ];

  return (
    <div className="bermudaGrassContainer">
      <div className="bermudaTextContainer">
        <h2 className="bermudaTitle">
          Premium Bermuda Grass: Durable, Lush, and Resilient
        </h2>
        <p className="bermudaParagraph">
          <span>Hybrid-Bermudas</span> has no equal for its ability to recover
          from heavy use during hot weather and it is the top choice for summer
          sports use.
        </p>
        <p className="bermudaParagraph">
          Hybrid Bermuda grass is an attractive, deep green turf grass that can
          be mowed short, is both drought and heat tolerant and has moderate
          water requirements.
        </p>
        <p className="bermudaParagraph">
          The Hybrid Bermuda turf grass is very dense, quick to establish and
          adaptable to all soil conditions. Hybrid Bermuda grasses are
          vegetatively propagated which helps to minimize any pollen production
          thus reducing hay fever or allergy irritations.
        </p>
        <p className="bermudaParagraph">
          There are two cultivars available:{" "}
          <span>Tifway 419 and Celebration Bermusa</span>
        </p>
      </div>
      <div className="bermudaTable">
        <table>
          <thead>
            <tr className="tableName">
              <th colSpan="3">Warm Season Grasses Comparison</th>
            </tr>
            <tr className="tableHeaders">
              <th></th>
              <th>Tifway 419</th>
              <th>Celebration</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((categoryData, index) => (
              <React.Fragment key={index}>
                <tr className="categoryRow">
                  <th colSpan="1">{categoryData.category}</th>
                  <th></th>
                  <th></th>
                </tr>
                {categoryData.items.map((item, itemIndex) => (
                  <tr key={itemIndex}>
                    <td>
                      {item.icon && (
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="tableIcon"
                        />
                      )}
                      {item.name}
                    </td>
                    <td>{item.Tifway419}</td>
                    <td>{item.Celebration}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BermudaGrass;
