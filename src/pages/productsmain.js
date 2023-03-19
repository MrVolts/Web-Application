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

const DropdownMenu = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(items[0]);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        setSelectedItem(item);
        setIsOpen(false);
    };

    return (
        <div className="dropdown">
            <button className="Filteroption dropdown-btn" onClick={toggleDropdown}>
                Dropdown: {selectedItem}
            </button>
            {isOpen && (
                <ul className="dropdown-menu">
                    {items.map((item, index) => (
                        <li key={index} onClick={() => handleItemClick(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};



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
            <div className='TopNavBarSeperator' />
            <div className='Filters'>
                <button className='Filteroption'>Protein Powder</button>
                <button className='Filteroption'>Protein Bars</button>
                <button className='Filteroption'>Plant based</button>
                <button className='Filteroption'>Suppliments</button>
                <DropdownMenu items={["Price decending","Price ascending", "Most recent","Rating","Trending"]} />

            </div>
            <div className='TopNavBarSeperator' />

        </div>
    )
}
const Catergory = ({ imagesrc, categoryname }) => {
    const onclick = () => {
        alert("clicked")
    }
    return (
        <Link to="/productslist/exampleproduct">
            <button className="ProductExampleThumbnail" ><b>{categoryname}</b>
                <Image imageName={imagesrc} width="183px" />

            </button>
        </Link>
    )
}


const AvaiableProducts = () => {

    return (
        <div className="Productcatergorys">
            <Catergory imagesrc="https://blog.tlsslim.com/wp-content/uploads/2018/08/shutterstock_478783216.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="A Product" />
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="A Product" />
            <Catergory imagesrc="https://blog.tlsslim.com/wp-content/uploads/2018/08/shutterstock_478783216.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="A Product" />
            <Catergory imagesrc="https://blog.tlsslim.com/wp-content/uploads/2018/08/shutterstock_478783216.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="A Product" />
            <Catergory imagesrc="https://blog.tlsslim.com/wp-content/uploads/2018/08/shutterstock_478783216.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="A Product" />
            <Catergory imagesrc="https://www.hollandandbarrett.com/the-health-hub/wp-content/uploads/2020/09/shutterstock_1130107643-1024x683.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.fitnessindiashow.com/wp-content/uploads/2021/06/Truth-Behind-Sports-Supplements.jpg" categoryname="A Product" />
            <Catergory imagesrc="https://www.petfoodprocessing.net/ext/resources/PFP-Images/Articles/Plant-based-proteins.jpg?1548711012" categoryname="A Product" />
        </div>
    )
}



export default function Productbrowser() {


    return (
        <div className='Productsroot'>
            <Mainnav />
            <div className='mainstuff title'>

                <AvaiableProducts />

                <div style={{ width: "10px", height: "1000px" }} />

            </div>

        </div>
    )
}

