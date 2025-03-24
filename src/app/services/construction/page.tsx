'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useRouter } from 'next/navigation'
import ImageSlider from '@/components/ImageSlider'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'

export default function ConstructionServices() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)

  const slides = [
    {
      src: '/images/constructions/construction1.webp',
      alt: 'Строительство 1',
    },
    {
      src: '/images/constructions/construction2.webp',
      alt: 'Строительство 2',
    },
    {
      src: '/images/constructions/construction3.webp',
      alt: 'Строительство 3',
    },
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleConsultation = () => {
    router.push('/contact')
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation isTransparent={!isScrolled} />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <Image
            src="/images/constructions/construction-hero-bg.webp"
            alt="Строительные работы"
            fill
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg text-left">
                Общестроительные работы
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-start w-full sm:w-auto">
                <button
                  onClick={handleConsultation}
                  className="group relative px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                >
                  <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                  </span>
                  <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
                <button
                  onClick={() => router.push('/services/construction#reviews')}
                  className="group relative px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                >
                  <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                    ОТЗЫВЫ
                  </span>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-transparent transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Почему выбирают нас
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Гарантия качества
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Мы гарантируем высокое качество всех выполняемых работ,
                  используя только проверенные материалы и современные
                  технологии
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Сроки выполнения
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Строгое соблюдение сроков выполнения работ и профессиональный
                  подход к каждому проекту
                </p>
              </div>
              <div className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                  <svg
                    className="w-6 h-6 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Опытная команда
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Наши специалисты имеют многолетний опыт работы и регулярно
                  повышают квалификацию
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Секция Строительство и Ремонт */}
        <section className="py-16 bg-yellow-400 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Текстовый контент */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-gray-900"
              >
                <h2 className="text-4xl font-bold mb-8">
                  СТРОИТЕЛЬСТВО И РЕМОНТ
                </h2>
                <ul className="space-y-4 text-xl">
                  <li>• Объектов различного назначения</li>
                  <li>• Профильных и черепичных крыш</li>
                  <li>
                    • Домов, квартир, офисов и других жилых и производственных
                    объектов
                  </li>
                </ul>
              </motion.div>

              {/* Слайдер */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden"
              >
                <ImageSlider images={slides} />
              </motion.div>
            </div>
          </div>
        </section>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <ReviewsSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <FAQSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
