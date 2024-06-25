import React from "react";
import { RiSofaLine } from "react-icons/ri";
import { MdOutlineWaterDrop } from "react-icons/md";
import { GiLockedDoor } from "react-icons/gi";
import { FaBath } from "react-icons/fa";
import { BsCompass } from "react-icons/bs";
import { FaRegBuilding } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

import "./Similar.css";

const Similar = () => {
  return (
    <>
      <section className="second-section">
        <div className="overview-container">
          <div className="overview">
            <h2>Overview</h2>
            <div>
              <RiSofaLine />
              <h4>Furnishing Status</h4>
              <p>Full</p>
            </div>
            <div>
              <MdOutlineWaterDrop />
              <h4>Water Supply</h4>
              <p>Corporation & Borewell</p>
            </div>
            <div>
              <FaBath />
              <h4>Bathroom</h4>
              <p>common</p>
            </div>
            <div>
              <GiLockedDoor />
              <h4>Gated Security</h4>
              <p>Yes</p>
            </div>
            <div>
              <BsCompass />
              <h4>Facing</h4>
              <p>North-West</p>
            </div>
            <div>
              <FaRegBuilding />
              <h4>Floor</h4>
              <p>1/4</p>
            </div>
            <div>
              <IoFastFoodOutline />
              <h4>Non-Veg-Allowed</h4>
              <p>No</p>
            </div>
          </div>
          <div className="description">
          Fully Furnished 3BHK  with modern amenities
- 7 Seater Sofa, Center Table, 6 Seater Dining Table With TV & Sound Bar In Living Room
- 2 Double Beds with Branded mattress, Fitted wardrobes,  AC in two Bedroom & Workstation for IT professionals
- Modern Kitchen with Modular racks, Chimney, RO & Gas Connection
- Also has a Store room + Laundry room
- Inverter is also available
This spacious three bedroom flat for rent in Sector 14 for 40,000 is the perfect choice for companies This North West facing home is on the 4th floor & comes with a parking space for car. Spread over 1250 sqft. this home is an ideal place to live in.

You are viewing the right home if you would prefer a house with visitor parking, air conditioner & fire security. If you need amenities such as generator back up, intercom, security, lift & Wi-Fi access you will be happy to note that this home has this & more.

Never miss out on lifestyle as Looks, Satyam Plaza and CouponDekho are so close by. With Payal Cinema, Movies,TV,Celebrity Photos Videos & Entertainment News :OyeYes & Adesign Creative and Releasing close by, you can catch your favourite movies running & never worry about missing a show because of traffic.
          </div>
        </div>

        <section className="similar-properties-section">
          <h2>Similar Properties</h2>
          <div className="property">
            <img src={img2} alt="Property" />
            <div className="property-details">
              <h3>3 BHK Flat In Standalone Building for Rent</h3>
              <p>Old, Delhi Rd , Near Raj Cinema</p>
              <p className="distance">Within a km</p>
              <div className="price-area">
                <p>Rent ₹35000</p>
                <p>Area 1300 Sqft</p>
              </div>
            </div>
          </div>
          <div className="property">
            <img src={img3} alt="Property" />
            <div className="property-details">
              <h3>3 BHK Flat In Shagun Villa for Rent</h3>
              <p>Shagun Villa</p>
              <p className="distance">Within a km</p>
              <div className="price-area">
                <p>Rent ₹45000</p>
                <p>Area 1800 Sqft</p>
              </div>
            </div>
          </div>
          <div className="property">
            <img src={img4} alt="Property" />
            <div className="property-details">
              <h3>3 BHK Flat In Shagun Villa for Rent</h3>
              <p>Old DLF Colony Near Kalyani Hospital</p>
              <p className="distance">Within a km</p>
              <div className="price-area">
                <p>Rent ₹40000</p>
                <p>Area 1917 Sqft</p>
              </div>
            </div>
          </div>
          <button className="more-properties-button">
            More 3 BHK Properties for rent in Sector 14
          </button>
        </section>
      </section>

      <section className="map">
        <h2>Neighbourhood</h2>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21620.32358572226!2d76.65606600116371!3d30.68651943921201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef154b91a85b%3A0x4d8b9df97e986631!2sChandigarh%20Group%20of%20Colleges%20(CGC)%20-%20Landran!5e0!3m2!1sen!2sin!4v1719052549474!5m2!1sen!2sin"
    width="90%"
    height="450"
    style={{ border: 0 }}
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</section>

    </>
  );
};

export default Similar;

