import React, { useState } from 'react';
import { FaHome, FaMapMarkerAlt, FaBuilding, FaBath, FaCamera, FaCalendarAlt } from 'react-icons/fa';
import './AddPost.css';

const AddPost = () => {
  const [currentSection, setCurrentSection] = useState('propertyDetails');

  const renderSection = () => {
    switch (currentSection) {
      case 'propertyDetails':
        return (
          <div className="form-section">
          <h2>Property Details</h2>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label>Apartment Type*</label>
                <select required>
                  <option value="">Select</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                </select>
                <span className="error">Apartment type Required</span>
              </div>
              <div className="form-group">
                <label>BHK Type*</label>
                <select required>
                  <option value="">Select</option>
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                </select>
                <span className="error">Information Required</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Floor*</label>
                <select required>
                  <option value="">Select</option>
                  <option value="ground">Ground</option>
                  <option value="1">1</option>
                </select>
                <span className="error">Floor Required</span>
              </div>
              <div className="form-group">
                <label>Total Floor*</label>
                <select required>
                  <option value="">Select</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
                <span className="error">Total Floor Required</span>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Property Age*</label>
                <select required>
                  <option value="">Select</option>
                  <option value="0-1">0-1 Years</option>
                  <option value="1-5">1-5 Years</option>
                </select>
                <span className="error">Property Age Required</span>
              </div>
              <div className="form-group">
                <label>Facing</label>
                <select>
                  <option value="">Select</option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Built Up Area*</label>
                <div className="input-group">
                  <input type="number" required />
                  <span className="unit">Sq.ft</span>
                </div>
                <span className="error">Built Up Area Required</span>
              </div>
            </div>
          </form>
        </div>
        );
      case 'localityDetails':
        return (
          <div className="form-section">
            <h2>Locality Details</h2>
            <form>
            <div className="form-group">
                <label>Location*</label>
                <input type="text" required />
                <span className="error">Location Required</span>
              </div>
              <div className="form-group">
                <label>Nearby Facilities</label>
                <input type="text" />
              </div>
            </form>
          </div>
        );
      case 'rentalDetails':
        return (
          <div className="form-section">
          <h2>Rental Details</h2>
          <form>
            <div className="form-group">
              <label>Property available for</label>
              <div>
                <input type="radio" id="rent" name="propertyAvailableFor" value="onlyRent" />
                <label htmlFor="rent">Only rent</label>
                <input type="radio" id="lease" name="propertyAvailableFor" value="onlyLease" />
                <label htmlFor="lease">Only lease</label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Expected Rent *</label>
                <div className="input-group">
                  <input type="number" required placeholder="Enter Amount" />
                  <span className="unit">/ Month</span>
                </div>
                <div>
                  <input type="checkbox" id="rentNegotiable" />
                  <label htmlFor="rentNegotiable">Rent Negotiable</label>
                </div>
              </div>
              <div className="form-group">
                <label>Expected Deposit *</label>
                <input type="number" required placeholder="Enter Amount" />
              </div>
            </div>
            <div className="form-group">
              <label>Monthly Maintenance</label>
              <select required>
                <option value="">Select</option>
                <option value="1000">1000</option>
                <option value="2000">2000</option>
              </select>
            </div>
            <div className="form-group">
              <label>Available From *</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Preferred Tenants *</label>
              <div>
                <input type="checkbox" id="anyone" />
                <label htmlFor="anyone">Anyone</label>
                <input type="checkbox" id="family" />
                <label htmlFor="family">Family</label>
                <input type="checkbox" id="bachelorFemale" />
                <label htmlFor="bachelorFemale">Bachelor Female</label>
                <input type="checkbox" id="bachelorMale" />
                <label htmlFor="bachelorMale">Bachelor Male</label>
                <input type="checkbox" id="company" />
                <label htmlFor="company">Company</label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Furnishing *</label>
                <select required>
                  <option value="">Select</option>
                  <option value="furnished">Furnished</option>
                  <option value="semiFurnished">Semi-Furnished</option>
                  <option value="unFurnished">Unfurnished</option>
                </select>
              </div>
              <div className="form-group">
                <label>Parking *</label>
                <select required>
                  <option value="">Select</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea placeholder="Write a few lines about your property..." />
            </div>
          </form>
        </div>
        );
      case 'amenities':
        return (
          <div className="form-section">
            <h2>Amenities</h2>
            <form>
              <div className="form-row">
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Lift
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Air Conditioner
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Internet Services
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Swimming Pool
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Shopping Center
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Park
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" /> Power Backup
                  </label>
                </div>
              </div>
            </form>
          </div>
        );
      case 'gallery':
        return (
          <div className="form-section">
            <h2>Gallery</h2>
            <form>
            <div className="form-group">
                <label>Upload Images*</label>
                <input type="file" multiple required />
                <span className="error">Images Required</span>
              </div>
            </form>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="add-post">
      <div className="addpost-sidebar">
        <div onClick={() => setCurrentSection('propertyDetails')} className={`sidebar-item ${currentSection === 'propertyDetails' ? 'active' : ''}`}>
          <FaHome className="icon" /> Property Details
        </div>
        <div onClick={() => setCurrentSection('localityDetails')} className={`sidebar-item ${currentSection === 'localityDetails' ? 'active' : ''}`}>
          <FaMapMarkerAlt className="icon" /> Locality Details
        </div>
        <div onClick={() => setCurrentSection('rentalDetails')} className={`sidebar-item ${currentSection === 'rentalDetails' ? 'active' : ''}`}>
          <FaBuilding className="icon" /> Rental Details
        </div>
        <div onClick={() => setCurrentSection('amenities')} className={`sidebar-item ${currentSection === 'amenities' ? 'active' : ''}`}>
          <FaBath className="icon" /> Amenities
        </div>
        <div onClick={() => setCurrentSection('gallery')} className={`sidebar-item ${currentSection === 'gallery' ? 'active' : ''}`}>
          <FaCamera className="icon" /> Gallery
        </div>
      </div>
      <div className="content">
        {renderSection()}
        <button className="save-continue">Save & Continue</button>
      </div>
    </div>
  );
};

export default AddPost;



