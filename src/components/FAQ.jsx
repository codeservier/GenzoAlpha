import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: 'What is your return policy?', answer: 'Our return policy allows for returns within 30 days of purchase.' },
    { question: 'How can I track my order?', answer: 'You can track your order using the tracking number provided in your order confirmation email.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we offer international shipping to most countries.' },
    { question: 'How do I contact customer support?', answer: 'You can contact our customer support via email at support@example.com or by calling (123) 456-7890.' },
    { question: 'What payment methods do you accept?', answer: 'We accept all major credit cards, PayPal, and Apple Pay.' },
    { question: 'Can I modify my order after placing it?', answer: 'Once an order is placed, we are unable to make changes to it. Please contact us as soon as possible if you need assistance.' },
  ];
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(openIndex);
    console.log(index);
  };



  return (
    <div className="container px-6 py-16 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-gray-800">Frequently Asked Questions</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-md">
            <button
              onClick={() => toggleAnswer(index)}
              className="w-full p-5 text-lg font-semibold text-left text-gray-800 bg-gray-50 hover:bg-gray-100 focus:outline-none"
            >
              {faq.question}
            </button>
            {openIndex === index && (
              <div className="p-5 text-gray-600 bg-gray-50">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
