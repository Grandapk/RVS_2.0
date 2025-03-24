'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const equipment = [
  {
    id: 1,
    name: 'Трактор',
    description: 'Мощный трактор для земляных работ и транспортировки грузов',
    image: '/images/equipment/traktor.png',
    specs: {
      power: '150 л.с.',
      weight: '4.5 т',
      capacity: '2.5 т',
    },
    price: 'от 35€ / час',
  },
  {
    id: 2,
    name: 'Грузовик',
    description: 'Грузовой автомобиль для перевозки строительных материалов',
    image: '/images/equipment/truck.png',
    specs: {
      power: '200 л.с.',
      weight: '8 т',
      capacity: '5 т',
    },
    price: 'от 25€ / час',
  },
]

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(
    null
  )
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
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
            src="/images/equipment/equipment-bg.webp"
            alt="Строительная техника"
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
              Аренда строительной техники
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => router.push('/services/equipment#contact')}
                className="group relative px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
              >
                <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                </span>
                <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
              </button>
              <button
                onClick={() => router.push('/services/equipment#reviews')}
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

      {/* Features Section */}
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
              Почему выбирают нас
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предоставляем качественный сервис и надежную технику
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Современная техника',
                description:
                  'Вся техника регулярно обслуживается и обновляется',
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
                title: 'Опытные операторы',
                description:
                  'Профессиональные операторы с большим стажем работы',
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Гибкие условия',
                description:
                  'Удобные условия аренды и прозрачное ценообразование',
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
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
              Наша техника
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Мы предлагаем широкий выбор строительной техники для различных
              задач
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {equipment.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.3,
                  type: 'spring',
                  stiffness: 100,
                }}
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.3 },
                }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full aspect-[16/9]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    {item.name}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 min-h-[4.5rem]">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-yellow-500">
                      {item.price}
                    </div>
                    <button
                      onClick={() => setSelectedEquipment(item.id)}
                      className="px-8 py-3 bg-gray-900 text-white rounded-full hover:bg-yellow-500 transition-colors duration-300 text-lg"
                    >
                      Заказать
                    </button>
                  </div>
                </div>
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
