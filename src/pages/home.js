import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hamburger from './burger.js'
import "../css/aHome.css";

const Image = ({ imageName, width = "20px" }) => {
    return <img className="image" style={{  height: width }} src={`${imageName}`} alt="image not found" />;

}

const Hbutton = ({ text, link }) => {
    return (
        <div className="button">
            <Link to={link}>
                <button className="HomePageNavigationButton" variant="primary" size="lg"><b>{text}</b></button>

            </Link>
        </div>
    )
}

const Mainnav = ({ text, link }) => {
    return (
        <div className='TopNavBar'>
            <div className='TopNavBarMain'>
                <div style={{ width: "50px", height: "50px", backgroundColor: "red" }}></div>
                <div className='Logobox'>
                    <div className='CompanyNameNav'><b>Green</b></div>
                    <div className='CompanyNameNav'><b>Cart</b></div>
                </div>
                <div />
                <Hamburger menuItems={[
          { name: "Home", link: "/" },
          { name: "Products", link: "/products" },
          { name: "Checkout", link: "/checkout" },
          { name: "About", link: "about" }
        ]} />
            </div>
            <div className='TopNavBarSeperator'>
            </div>
        </div>
    )
}





export default function Home() {


    return (
        <div style={{ width: "100%", height: "100%" }}>
            <Mainnav />
            <div className='mainstuff'>

                <div className='HomeMainImage'>
                    <Image width='100%' imageName="https://fedandfit.com/wp-content/uploads/2020/05/Protein-Powder-SMALL-01.jpg" />
                </div>
                <div className='slogan'><b>Performance of the body is Performance of the mind</b></div>
                <div className='Homebuttons'>
                    <Hbutton
                        text={"Not sure where to start?"}
                        link={"/QandA"} />
                    <Hbutton
                        text={"Explore Our product range"}
                        link={"products/"} />
                
                </div>
                
            </div>

        </div>
    )
}

