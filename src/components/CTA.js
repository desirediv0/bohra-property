'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-primary">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-6">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-lg text-accent-light max-w-2xl mx-auto mb-8">
            Let us help you discover the perfect property that matches your lifestyle and preferences. Our expert team is here to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/properties"
              className="inline-block bg-secondary hover:bg-secondary-light text-primary px-8 py-3 rounded-md font-medium transition-colors"
            >
              View Properties
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent hover:bg-primary-light text-accent border-2 border-secondary px-8 py-3 rounded-md font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 