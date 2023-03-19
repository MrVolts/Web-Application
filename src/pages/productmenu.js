import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from './burger.js';

const Image = ({ imageName, width = "20px" }) => {
  return <img className="image" style={{ width: width }} src={`${imageName}`} alt="image not found" />;
};

const nutritionalInfo = 'Nutritional information...';
const activeIngredientsInfo = 'Active ingredients information...';

const InfoDropdown = () => {
  const [expandedSection, setExpandedSection] = useState('');

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection('');
    } else {
      setExpandedSection(section);
    }
  };

  return (
    <div>
      <div
        onClick={() => toggleSection('nutritional')}
        style={{
          cursor: 'pointer',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '5px',
          marginBottom: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Nutritional Information
        <span>▼</span>
      </div>
      {expandedSection === 'nutritional' && (
        <div>
          <table border="1" cellPadding="5">
            <thead>
              <tr>
                <th>Nutrient</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Calories</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Protein</td>
                <td>5g</td>
              </tr>
              <tr>
                <td>Fat</td>
                <td>2g</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
      <div
        onClick={() => toggleSection('activeIngredients')}
        style={{
          cursor: 'pointer',
          border: '1px solid black',
          borderRadius: '5px',
          padding: '5px',
          marginTop: '5px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        Active Ingredients Information
        <span>▼</span>
      </div>
      {expandedSection === 'activeIngredients' && (
        <div>
          <ul>
            <li>Active Ingredient 1</li>
            <li>Active Ingredient 2</li>
            <li>Active Ingredient 3</li>
          </ul>
        </div>
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
            <div className='TopNavBarSeperator'>
            </div>
        </div>
    )
}

const ProductDetails = ({ children }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '8px',
    }}>{children}</div>
  );
  
  const Rating = ({ children }) => (
    <div style={{
      color: 'gold',
      fontSize: '18px',
    }}>{children}</div>
  );
  
  export default function ExampleProductDesc() {
    return (
      <div className='Productsroot'>
        <Mainnav />
        <div className='mainstuff title'>
          <div
            className='ProductInformationSeperator'
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
              padding: '32px',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', gap: '32px', alignItems: 'top', width: '100%' }}>
              <Link to="/products" style={{ marginLeft: '16px' }}>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/0/340.png"
                  alt="Back arrow"
                  style={{ width: '24px' }}
                />
              </Link>
              <Image imageName="https://th.bing.com/th/id/R.d10c3d238f9e53f2996224909e1c01ce?rik=cu9DkTJYkCRC4A&riu=http%3a%2f%2fwww.southernexposure.com%2fblog%2fwp-content%2fuploads%2f2013%2f07%2fcosmo-lettuce-photoshopped.jpg&ehk=ghs%2fMv1sawafy4SDPy6hjIkrt3Je14pMPZs0gLPG9ns%3d&risl=&pid=ImgRaw&r=0" width="300px" />
              <div
                className='Verticalbox'
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px',
                  width: '100%',
                  maxWidth: '480px',
                }}
              >
                <ProductDetails>
                  <div><b>Product Name</b></div>
                  <div>Description</div>
                  <Rating>☆☆☆☆☆</Rating>
                  <div><b>£00.00</b> <span style={{ marginLeft: '16px' }}>Quantity: - 1 +</span></div>
                </ProductDetails>
                <button className='Filteroption AddtoCartButton' style={{ alignSelf: 'flex-start' }}>Add to cart</button>
              </div>
            </div>
            <div style={{ paddingLeft: '32px' }}>
              <InfoDropdown />
            </div>
          </div>
        </div>
      </div>
    );
  }

