import React, { useState } from 'react';
import './Hero.css';
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import { Link } from 'react-router-dom';

const Hero = () => {
  const [rentRange, setRentRange] = useState(10000);

  const handleRentChange = (event) => {
    setRentRange(event.target.value);
  };

  return (
    <div className='hero'>
      <aside className="filter-side">
        <h1>Filter</h1>

        <section className='location'>
          <h4>Location</h4>
          <ul>
            <li><label><input type="checkbox" name="Landran" value="Landran" />Landran</label></li>
            <li><label><input type="checkbox" name="Kharar" value="Kharar" />Kharar</label></li>
            <li><label><input type="checkbox" name="Jhanjeri" value="Jhanjeri" />Jhanjeri</label></li>
            <li><label><input type="checkbox" name="Chunni" value="Chunni" /> Chunni</label></li>
            <li><label><input type="checkbox" name="Shivalik" value="Shivalik" />Shivalik</label></li>
          </ul>
        </section>

        <section className='bhk-type'>
          <h4>BHK Type</h4>
          <ul>
            <li><label><input type="checkbox" name="bhk" value="1 RK" /> 1 RK</label></li>
            <li><label><input type="checkbox" name="bhk" value="1 BHK" /> 1 BHK</label></li>
            <li><label><input type="checkbox" name="bhk" value="2 BHK" /> 2 BHK</label></li>
            <li><label><input type="checkbox" name="bhk" value="3 BHK" /> 3 BHK</label></li>
            <li><label><input type="checkbox" name="bhk" value="4 BHK" /> 4 BHK</label></li>
          </ul>
        </section>

        <section className="rent-range">
          <h3>Rent Range: <span>$0 to ${rentRange}</span></h3>
          <form>
            <input
              type="range"
              min="0"
              max="20000"
              value={rentRange}
              onChange={handleRentChange}
            />
          </form>
        </section>



        <fieldset className="availability-box">
          <legend>Availability</legend>
          <form>
            <label><input type="radio" name="availability" value="immediate" /> Immediate</label>
            <label><input type="radio" name="availability" value="within_15_days" /> Within 15 Days</label>
            <label><input type="radio" name="availability" value="within_30_days" /> Within 30 Days</label>
            <label><input type="radio" name="availability" value="after_30_days" /> After 30 Days</label>
          </form>
        </fieldset>

        <fieldset className="tenants-box">
          <legend>Tenants</legend>
          <form>
            <label><input type="checkbox" name="tenants" value="boys" /> Boys</label>
            <label><input type="checkbox" name="tenants" value="girls" /> Girls</label>
            <label><input type="checkbox" name="tenants" value="family" /> Family</label>
          </form>
        </fieldset>

        <fieldset className="furnishing-box">
          <legend>Furnishing</legend>
          <form>
            <label><input type="checkbox" name="furnishing" value="Full" /> Full</label>
            <label><input type="checkbox" name="furnishing" value="Semi" /> Semi</label>
            <label><input type="checkbox" name="furnishing" value="None" /> None</label>
          </form>
        </fieldset>
        
        <fieldset className="Property-box">
          <legend>Property-Type</legend>
          <form>
            <label><input type="checkbox" name="property" value="PG" />PG</label>
            <label><input type="checkbox" name="property" value="Independent House" />Independent House</label>
            <label><input type="checkbox" name="property" value="Room" />Room</label>
          </form>
        </fieldset>

      </aside>

      <main className="main-side">
        <Link to = '/detailpage'>
       <div className="card">
        <h1>1 BHK House For Rent In Landran</h1>
        <p>Independent House, Near Chandigarh group of Colleges , Landran</p>
        <div className="item">
          <div className="img-side">
           <img src={img1} alt="" />
          </div>
          <div className="detail">
            <div>$6000 <span>Rent</span></div>
            <div>For Boys <span>Tenants</span></div>
            <div>Availabel <span>Availabilty</span></div>
            <div>Landran <span>location</span></div>
          </div>
        </div>
        <button>View Details</button>
       </div>

       <div className="card">
        <h1>1 BHK House For Rent In Landran</h1>
        <p>Independent House, Near Chandigarh group of Colleges , Landran</p>
        <div className="item">
          <div className="img-side">
           <img src={img2} alt="" />
          </div>
          <div className="detail">
            <div>$6000 <span>Rent</span></div>
            <div>For Boys <span>Tenants</span></div>
            <div>Availabel <span>Availabilty</span></div>
            <div>Landran <span>location</span></div>
          </div>
        </div>
        <button>View Details</button>
       </div>

       <div className="card">
        <h1>1 BHK House For Rent In Landran</h1>
        <p>Independent House, Near Chandigarh group of Colleges , Landran</p>
        <div className="item">
          <div className="img-side">
           <img src={img3} alt="" />
          </div>
          <div className="detail">
            <div>$6000 <span>Rent</span></div>
            <div>For Boys <span>Tenants</span></div>
            <div>Availabel <span>Availabilty</span></div>
            <div>Landran <span>location</span></div>
          </div>
        </div>
        <button>View Details</button>
       </div>

       <div className="card">
        <h1>1 BHK House For Rent In Landran</h1>
        <p>Independent House, Near Chandigarh group of Colleges , Landran</p>
        <div className="item">
          <div className="img-side">
           <img src={img4} alt="" />
          </div>
          <div className="detail">
            <div>$6000 <span>Rent</span></div>
            <div>For Boys <span>Tenants</span></div>
            <div>Availabel <span>Availabilty</span></div>
            <div>Landran <span>location</span></div>
          </div>
        </div>
        <button>View Details</button>
       </div>
       </Link>
      </main>
    </div>
  );
}

export default Hero;
