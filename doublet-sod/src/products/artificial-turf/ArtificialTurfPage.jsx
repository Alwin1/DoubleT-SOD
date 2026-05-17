import React from "react";
import "./ArtificialTurfPage.css";
import GrassFooter from "../../assets/grassFooter.jpeg";
import ArtificialTurfInstallationImage from "../../assets/artificialTurfInstallationImage.jpg";
import ArtificialTurfTextImage from "../../assets/artificialTurfTextImage.png";
const ArtificialTurfPage = () => {
  return (
    <div className="artificialTurfPageContainer">
      <h2>Artificial Turf</h2>
      <div className="artificialTurfPageText">
        <p>
          Upgrade your yard with low-maintenance, year-round green grass. We
          provide professional artificial turf installation designed to handle
          West Texas weather while giving your property a clean, finished look.
          Built for durability and everyday use, our turf stands up to heat,
          foot traffic, and pets without fading or wearing down. It’s a
          long-lasting solution that eliminates the need for constant watering,
          mowing, and upkeep—so you can enjoy a consistently great-looking yard
          with minimal effort.
        </p>

        <div className="artificialTurfImageWrapper">
          <img
            src={ArtificialTurfTextImage}
            className="artificialTurfTextImage"
            alt="ArtificialTurf"
          />
        </div>
        <p>
          <strong>Our Artificial Turf Options:</strong>
        </p>
        <p className="artificialTurfItalics">
          We offer a variety of turf options depending on your needs and budget.
        </p>

        <div className="artificialTurfOptionsContainer">
          <p>
            <span>Residential Turf </span> - Great for front yards, backyards,
            and new construction homes. Designed to look natural and last for
            years.
          </p>
          <p>
            <span>Pet Turf</span> - Made with enhanced drainage and odor
            control, perfect for homes with dogs or pet areas.
          </p>
          <p>
            <span>Premium Turf</span> - A softer, more realistic option for
            homeowners looking for a high-end finish.
          </p>
          <p>
            <span>Budget-Friendly Turf</span> - An affordable option that still
            provides a clean and consistent look.
          </p>
          <p>
            <span>Putting Green Turf</span> - Custom-installed putting greens
            designed for performance, practice, and fun.
          </p>
        </div>

        <div className="artificialTurfInstallationContainer">
          <div className="artificialTurfInstallationText">
            <strong>Our Installation Process:</strong>
            <p className="artificialTurfItalics">
              We focus on doing the job right so your turf lasts.
            </p>
            <ol>
              <li>Excavation and removal of existing grass and debris</li>
              <li>Base preparation for proper drainage and stability</li>
              <li>Grading and leveling for a smooth finish</li>
              <li>Turf installation with tight seams and secure edges</li>
              <li>Infill and final grooming for a natural look</li>
            </ol>
          </div>
          <div className="artificialTurfInstallationImage">
            <img
              src={ArtificialTurfInstallationImage}
              className="artificialTurfInstallationImage"
              alt="ArtificialTurf"
            />
          </div>
        </div>
      </div>
      <img src={GrassFooter} className="grassFooter" alt="Grass Footer Image" />
    </div>
  );
};

export default ArtificialTurfPage;
