import React, { useState } from 'react';
import { HelpCircle, Info, CheckCircle, Settings } from 'lucide-react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const faqData = [
    {
      question: 'What is BioTree?',
      answer: 'BioTree is a powerful platform that enables you to efficiently manage all your social media links in one convenient location, helping you enhance your online presence.',
      icon: <HelpCircle className="w-8 h-8 text-blue-600" />
    },
    {
      question: 'How can I create a BioTree?',
      answer: 'To create your BioTree, simply sign up, create an account, and start adding your social media links to your profile. It\'s quick and easy!',
      icon: <Info className="w-8 h-8 text-green-600" />
    },
    {
      question: 'Is BioTree free to use?',
      answer: 'Yes, BioTree offers a free plan that includes essential features. Additionally, we provide premium features in our paid plans for those looking for advanced functionalities.',
      icon: <CheckCircle className="w-8 h-8 text-yellow-600" />
    },
    {
      question: 'Can I customize my BioTree?',
      answer: 'Absolutely! You can customize the appearance of your BioTree by selecting from various themes and layouts to match your personal style or brand.',
      icon: <Settings className="w-8 h-8 text-purple-600" />
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-8">
        {faqData.map((faq, index) => (
          <div
  key={index}
  className={`faq-item-container bg-white rounded-lg shadow-lg p-6 transition-transform transform
  cursor-pointer hover:scale-105 hover:shadow-xl hover:bg-gray-50 duration-300 ease-in-out
  ${activeIndex === index ? 'bg-gray-100 border border-gray-300' : ''}`}
  onMouseEnter={() => handleMouseEnter(index)}
  onMouseLeave={handleMouseLeave}
  onClick={() => setActiveIndex(activeIndex === index ? null : index)} // Add this line
>
  <div className="flex items-start mb-4 space-x-4 justify-between">
  <div className='flex'>
    <div className="flex-shrink-0">
      <span
        style={{
          display: 'inline-block',
          transition: 'transform 0.3s ease-in-out',
          transform: activeIndex === index ? 'rotate(360deg)' : 'rotate(0deg)',
        }}
      >
        {faq.icon}
      </span>
    </div>
   
      <h3 className="text-2xl font-semibold text-gray-800 ml-4">{faq.question}</h3>
    </div>
    <span className="text-sm text-gray-500 mt-2 ml-auto">{activeIndex === index ? 'Hide' : 'Show'} Answer</span>
  </div>
  <div
    className={`overflow-hidden transition-all duration-700 ease-in-out
      ${activeIndex === index ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}
    style={{ height: activeIndex === index ? 'auto' : '0px' }}
  >
    <p className="text-gray-600 leading-relaxed transition-opacity duration-500 ml-12">{faq.answer}</p>
  </div>
</div>
        ))}
      </div>
    </div>
  );
};

export default Faq;