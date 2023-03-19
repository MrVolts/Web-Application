import { Link } from 'react-router-dom';
import Hamburger from './burger.js';

const BasketItem = ({ image, title, price, quantity }) => (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #ccc',
      padding: '16px 0',
    }}>
      <img src={image} alt={title} style={{ width: '100px' }} />
      <div style={{ flex: '1', marginLeft: '16px', marginRight: '8px' }}>{title}</div>
      <div>£{price.toFixed(2)}</div>
      <div style={{ marginLeft: '8px' }}>Quantity: {quantity}</div>
    </div>
  );

const Mainnav = () => {
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

export default function BasketPage() {
    // Example basket items
    const basketItems = [
      {
        image: 'https://th.bing.com/th/id/R.d10c3d238f9e53f2996224909e1c01ce?rik=cu9DkTJYkCRC4A&riu=http%3a%2f%2fwww.southernexposure.com%2fblog%2fwp-content%2fuploads%2f2013%2f07%2fcosmo-lettuce-photoshopped.jpg&ehk=ghs%2fMv1sawafy4SDPy6hjIkrt3Je14pMPZs0gLPG9ns%3d&risl=&pid=ImgRaw&r=0',
        title: 'Product Name',
        price: 10.00,
        quantity: 1
      }
    ];

  const totalPrice = basketItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className='Basketroot'>
      <Mainnav />
      <div className='mainstuff title'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '32px',
        }}>
          <h2>Your Basket</h2>
          {basketItems.map((item, index) => (
            <BasketItem
              key={index}
              image={item.image}
              title={item.title}
              price={item.price}
              quantity={item.quantity}
            />
          ))}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '16px',
          }}>
            <h3>Total:</h3>
            <h3>£{totalPrice.toFixed(2)}</h3>
          </div>
          <button className='Filteroption AddtoCartButton'>Proceed to Checkout
          </button>
          <div style={{ height: '2000px' }}></div>
        </div>
      </div>
    </div>
  );
}
