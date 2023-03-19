import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Hamburger from './burger.js'
import "../css/aHome.css";

const Image = ({ imageName, width = "20px" }) => {
    return <img className="image imagesaturate" style={{ width: width }} src={`${imageName}`} alt="image not found" />;

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
const Catergory = ({imagesrc,categoryname}) => {
    const onclick = () =>{
        alert("clicked")
    }
    return(
        <Link to="/productslist">
        <button className="ProductCategory" ><b>{categoryname}</b>
            <Image imageName={imagesrc} width = "350px"/>
            
        </button>
        </Link>
    )
}


const AvaiableProducts = () => {
    
    return(
        <div className="Productcatergorys">
            <Catergory imagesrc="https://blog.tlsslim.com/wp-content/uploads/2018/08/shutterstock_478783216.jpg" categoryname="Protein powder"/>
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="Protein Bars"/>
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="Sport supplements"/>
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="Plant based"/>
        </div>
    )
}



export default function Products() {


    return (
        <div className='Productsroot'>
            <Mainnav />
            <div className='mainstuff title'>
                <b>Products</b>
                <AvaiableProducts/>
                
            <div style = {{width:"10px",height:"1000px"}}/>
                
            </div>

        </div>
    )
}

