import React from 'react'
import home_logo from '../../assets/home_logo.png'
import './DetailPage.css'
import img1 from '../../assets/img1.jpg'
import img1_1 from '../../assets/img1.1.jpg'
import img1_2 from '../../assets/img1.2.jpg'
import img1_3 from '../../assets/img1.3.jpg'
import { IoBedOutline } from "react-icons/io5";
import { PiBuildingApartment } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDirectionsBike } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import Similar from '../../components/Similar/Similar'

const DetailPage = () => {
  return (
    <>
        <div className="head">
            <div>
            <img src={home_logo} alt="" />
            </div>
           
           <div>
           <h1>3 BHK flat in Landran</h1>
           <p>Near by Chandigarh group of colleges</p>
           </div>
         <div>
         <h3>$20000/M</h3>
         <p>Rent</p>
         </div>

         <div>
         <h3>$20000</h3>
         <p>Deposit</p>
         </div>
          
        </div>
        <section className='first-section'>
        <div className="image-slider">
            <img src={img1} alt="" />
            <img src={img1_1} alt="" />
            <img src={img1_2} alt="" />
            <img src={img1_3} alt="" />
        </div>
        <div className="img-detail">
            <div>
                <h4><IoBedOutline className='icon' />2 bedroom</h4>
                <p>No. of Bed </p>
            </div>
            <div>
                <h4><PiBuildingApartment className='icon'/>Apartment</h4>
                <p>property Type </p>
            </div>
            <div>
                <h4><FaRegUser className='icon'/> All</h4>
                <p>Prefeeref tenant </p>
            </div>
            <div>
                <h4><MdOutlineDirectionsBike className='icon'/> Car</h4>
                <p>Parking</p>
            </div>
            <div>
                <h4><FaRegCalendar className='icon' /> 2 July, 2024</h4>
                <p>Avialable on </p>
            </div>
            <div>
                <h4><FaRegBuilding className='icon'/> 1 Floor</h4>
                <p>Floor </p>
            </div>
     <div className="btns">
        <button>Contact</button>
        <button>Schedule visit</button>
     </div>

        </div>
        </section>
        <Similar/>
    </>
  )
}

export default DetailPage