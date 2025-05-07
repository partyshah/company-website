import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "Is this for high schoolers?",
      answer: "Yes, only rising 9th graders through rising college freshmen are eligible to apply for the teams"
    },
    {
      question: "Is Pike Teams for beginners?",
      answer: "No, Pike Teams is not for intro computer science students. We are selecting the top 150 high school students from across the country this summer. Building products is really hard so we look not only for technical ability but also how well a student can collaborate with teammates. Only the most exceptional students will earn a spot."
    },
    {
      question: "What do the advanced and intermediate levels mean?",
      answer: "Advanced students need to have at least completed AP CS A (or equivalent) and have usually done some amount of coding outside of the classroom. Intermediate students need to have at least completed AP CS Principles (or equivalent) and have done some coding outside of the classroom. They've sometimes also completed AP CS A. They should know functions, conditionals, loops, lists/2d-arrays."
    },
    {
      question: "How much does it cost?",
      answer: "$1250 for the 6-week season. We also offer financial aid for all families under $200k in household income."
    },
    {
      question: "Is this individual mentorship?",
      answer: "No, Pike Teams is teams of 6-8 students, coached by a professional software engineer from top companies like Amazon, Google, Draft Kings, and Activision-Blizzard. There is individual attention where coaches are helping students learn important technical concepts, but a core part of the experience is collaborating with peers, just like what is expected in college, internships, and full-time jobs."
    },
    {
      question: "What programming languages do students need to know?",
      answer: "Students can come in with experience in any language, so students can complete the technical interview coding exam in whatever language you feel most comfortable."
    },
    {
      question: "Where are the teams based? Where is the competition?",
      answer: "We are selecting the top 150 students from across the nation so our students are all over the country. The team meetings are all remote on Zoom. The competition is also remote on Zoom."
    },
	{
      question: "Are there other coding resources for students provided after the program ends?",
      answer: "Yes! Alumni gain access to exclusive career resources, coding tutorials, and community support to continue growing after the summer ends."
    },
	{
      question: "How is this different from other computer science summer programs?",
      answer: "Pike Teams emphasizes hands-on product development, teamwork, and mentorship from real-world engineers, making it more rigorous and practical than most traditional programs."
    },
	{
      question: "Can I join Pike Teams if I’ve already done other coding programs for students?", 
      answer: "Absolutely. Many of our participants have attended other programs but come to Pike for a more challenging, product-focused experience."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-header">Frequently Asked Questions</h2>
      <p className="faq-subheader">Everything you need to know about Pike Teams</p>
      <div className="faq-grid">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleQuestion(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ; 