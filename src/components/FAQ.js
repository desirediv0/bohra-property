'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const faqs = [
  {
    question: 'What services does BOHRA Property offer?',
    answer: 'We offer a comprehensive range of real estate services including property buying, selling, renting, and investment consulting. Our team provides personalized guidance throughout your real estate journey.',
  },
  {
    question: 'How do I schedule a property viewing?',
    answer: 'You can schedule a property viewing by contacting us through our website, calling our office, or sending us an email. Our team will arrange a convenient time for you to visit the property.',
  },
  {
    question: 'What areas do you cover?',
    answer: 'We primarily focus on prime locations in major cities, offering luxury properties in exclusive neighborhoods. Contact us to learn more about our current property listings in your desired area.',
  },
  {
    question: 'Do you offer property management services?',
    answer: 'Yes, we provide comprehensive property management services for property owners, including tenant screening, rent collection, maintenance coordination, and regular property inspections.',
  },
  {
    question: 'What makes BOHRA Property different from other real estate agencies?',
    answer: 'We distinguish ourselves through our commitment to excellence, personalized service, and extensive market knowledge. Our team of experienced professionals ensures a seamless and satisfying real estate experience.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-primary-light">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-accent-light max-w-2xl mx-auto">
            Find answers to common questions about our services and processes.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="text-lg font-medium text-accent">{faq.question}</span>
                <span className="text-secondary">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-accent-light">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 