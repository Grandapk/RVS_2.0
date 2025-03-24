'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const deliveryServices = [
  {
    id: 1,
    title: 'Доставка сыпучих материалов',
    description:
      'Песок, гравий, щебень и другие материалы с точной дозировкой и быстрой доставкой',
    image: '/images/delivery/bulk.webp',
    price: 'от 30€',
    features: ['Точное взвешивание', 'Любой объем', 'Быстрая доставка'],
  },
  {
    id: 2,
    title: 'Перевозка стройматериалов',
    description:
      'Безопасная транспортировка строительных материалов любого размера',
    image: '/images/delivery/construction.webp',
    price: 'от 35€',
    features: ['Надежная упаковка', 'Страховка груза', 'Точно в срок'],
  },
  {
    id: 3,
    title: 'Спецтехника с доставкой',
    description: 'Доставка строительной техники прямо на ваш объект',
    image: '/images/delivery/equipment.webp',
    price: 'от 40€',
    features: ['Профессиональные водители', 'GPS-мониторинг', 'Круглосуточно'],
  },
]

export default function DeliveryPage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation isTransparent={!isScrolled} />

      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/delivery/delivery-hero.webp"
            alt="Доставка материалов"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-left text-white">
              Доставка строительных материалов
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => router.push('/services/delivery#contact')}
                className="group relative px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
              >
                <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  ЗАКАЗАТЬ ДОСТАВКУ
                </span>
                <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
              </button>
              <button
                onClick={() => router.push('/services/delivery#reviews')}
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши услуги доставки
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Предоставляем полный спектр услуг по доставке строительных
              материалов
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {deliveryServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <div className="text-yellow-400 font-bold">
                      {service.price}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center text-gray-700"
                      >
                        <svg
                          className="w-5 h-5 text-yellow-500 mr-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {feature}
                      </motion.li>
                    ))}
            </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Как мы работаем
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Простой и понятный процесс доставки
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Заявка',
                description: 'Оставьте заявку или позвоните нам',
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Расчет',
                description: 'Рассчитаем стоимость и сроки',
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Доставка',
                description: 'Доставим материалы точно в срок',
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Оплата',
                description: 'Удобные способы оплаты',
                icon: (
                  <svg
                    className="w-12 h-12 text-yellow-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    />
                  </svg>
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex justify-center mb-4"
                >
                  {step.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
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

      <Footer />
    </div>
  )
}
