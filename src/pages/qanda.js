// QAPage.js
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from './burger.js';


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

const QAItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleAnswer = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <div onClick={toggleAnswer} className="info-dropdown-item">
        {question}
        <span>{expanded ? '▲' : '▼'}</span>
      </div>
      {expanded && <div>{answer}</div>}
    </div>
  );
};

export default function QAPage ()  {
  // Sample questions and answers
  const qaList = [
    {
      question: 'How do I return a product?',
      answer: 'To return a product, please follow the steps in our return policy.',
    },
    {
      question: 'What is the shipping time?',
      answer: 'Shipping time varies depending on your location and chosen shipping method.',
    },
    {
      question: 'Do you offer discounts?',
      answer: 'Yes, we offer various discounts and promotions throughout the year.',
    },
  ];

  return (
    <div className="Productsroot">
      <Mainnav />
      <div className="mainstuff title">
        <div
          className="ProductInformationSeperator"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '32px',
            padding: '32px',
            alignItems: 'center',
          }}
        >
          <h2>Q&A</h2>
          {qaList.map((qa, index) => (
            <QAItem key={index} question={qa.question} answer={qa.answer} />
          ))}
        </div>
      </div>
    </div>
  );
};

