import React from 'react';

const Profile = ({ image, name }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '16px',
  }}>
    <img src={image} alt={name} style={{ width: '200px', height: 'auto', borderRadius: '50%' }} />
    <h3>{name}</h3>
  </div>
);

export default function ProfilePage() {
  const harry = {
    name: 'Harry',
    image: 'https://media.discordapp.net/attachments/367743597237501952/1087468505638641684/Haris_Persona_Profile.png?width=810&height=400',
  };

  return (
    <div className='Profile-root'>
      <div className='main-content'>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '32px',
          padding: '32px',
        }}>
          <h2>Profile</h2>
          <Profile
            name={harry.name}
            image={harry.image}
          />
        </div>
      </div>
    </div>
  );
}