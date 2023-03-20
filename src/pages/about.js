import { Link } from 'react-router-dom';
import Hamburger from './burger.js';

const PersonImage = ({ image, name }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    borderBottom: '1px solid #ccc',
    padding: '16px 0',
  }}>
    <img src={image} alt={name} style={{ width: '100%', height: 'auto' }} />
    <div style={{ marginTop: '8px' }}>{name}</div>
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

export default function AboutPage() {
  const teamMembers = [
    { image: 'https://media.discordapp.net/attachments/367743597237501952/1087468505638641684/Haris_Persona_Profile.png?width=810&height=400', name: 'Harry' },
    { image: 'https://media.discordapp.net/attachments/367743597237501952/1087469058963820703/Jamess_Persona_Profile_1.png?width=810&height=373', name: 'James' },
    { image: 'https://media.discordapp.net/attachments/367743597237501952/1087469185426272416/Lucys_Persona_Profile.png?width=810&height=396', name: 'Lucy' },
    { image: 'https://media.discordapp.net/attachments/367743597237501952/1087470186354978866/Ians_Persona_Profile.png?width=810&height=395', name: 'Ian' },
    { image: 'https://media.discordapp.net/attachments/367743597237501952/1087470389975851018/Hinsons_Persona_Profile.png?width=810&height=373', name: 'Hinson' },
  ];

  return (
    <div className='Aboutroot'>
      <Mainnav />
      <div className='mainstuff title'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px',
          padding: '32px',
        }}>
          <h2>About Us</h2>
          {teamMembers.map((member, index) => (
            <PersonImage
              key={index}
              image={member.image}
              name={member.name}
            />
          ))}
          <div style={{ height: '2000px' }}></div>
        </div>
      </div>
    </div>
  );
}