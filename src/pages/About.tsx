import React from 'react';
import { Users, Target, TrendingUp, Award, ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "What is EthioSupply?",
      answer: "EthioSupply is Ethiopia's first digital B2B marketplace that connects local manufacturers with buyers and suppliers, streamlining the supply chain process and fostering industry collaboration."
    },
    {
      question: "How does EthioSupply work?",
      answer: "EthioSupply provides a platform where businesses can register, list their products or services, search for suppliers, and connect with potential partners. Our platform simplifies the entire B2B process, from sourcing to transaction."
    },
    {
      question: "What types of businesses can use EthioSupply?",
      answer: "EthioSupply caters to a wide range of businesses, including manufacturers, suppliers, and buyers across various industries in Ethiopia. Whether you're a small local producer or a large corporation, our platform is designed to meet your B2B needs."
    },
    {
      question: "Is EthioSupply only for businesses in Ethiopia?",
      answer: "While our primary focus is on the Ethiopian market, we also facilitate connections with global buyers and suppliers, helping to integrate Ethiopian businesses into the global supply chain."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Existing sections remain unchanged */}

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left font-semibold p-4 bg-white rounded-lg shadow-md"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp /> : <ChevronDown />}
                </button>
                {openFaq === index && (
                  <div className="mt-2 p-4 bg-gray-50 rounded-lg">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section remains unchanged */}
    </div>
  );
};

export default About;