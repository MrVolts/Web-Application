import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from './burger.js';

const TeamMember = ({ image, name }) => (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '16px',
    }}>
      <a href={image} target="_blank" rel="noreferrer">
        <img src={image} alt={name} style={{ width: '200px', height: 'auto', borderRadius: '50%' }} />
      </a>
      <h3>{name}</h3>
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
            { name: "About", link: "/about" }
          ]} />
      </div>
      <div className='TopNavBarSeperator'>
      </div>
    </div>
  )
}

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Name 1',
      image: 'https://media.discordapp.net/attachments/367743597237501952/1087468505638641684/Haris_Persona_Profile.png?width=810&height=400',
    },
    {
      name: 'Name 2',
      image: 'https://media.discordapp.net/attachments/367743597237501952/1087469058963820703/Jamess_Persona_Profile_1.png?width=810&height=373',
    },
    {
      name: 'Name 3',
      image: 'https://media.discordapp.net/attachments/367743597237501952/1087469185426272416/Lucys_Persona_Profile.png?width=810&height=396',
    },
    {
      name: 'Name 4',
      image: 'https://media.discordapp.net/attachments/367743597237501952/1087470186354978866/Ians_Persona_Profile.png?width=810&height=395',
    },
    {
      name: 'Name 5',
      image: 'https://media.discordapp.net/attachments/367743597237501952/1087470389975851018/Hinsons_Persona_Profile.png?width=810&height=373',
    },
  ];

  return (
    <div className='Aboutroot'>
      <Mainnav />
      <div className='mainstuff title'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          padding: '32px',
        }}>
          <h2>About Us</h2>
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '32px',
          }}>
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                image={member.image}
              />
            ))}
          </div>
          <div style={{ height: '2000px' }}></div>
        </div>
      </div>
    </div>
  );
}