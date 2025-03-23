'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ReviewsSection from '@/components/ReviewsSection'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const equipment = [
  {
    id: 1,
    name: 'Трактор',
    description: 'Мощный трактор для земляных работ и транспортировки грузов',
    image: '/images/equipment/tractor.webp',
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
    image: '/images/equipment/truck.webp',
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
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Аренда строительной техники
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Надежная техника для любых строительных работ. Гибкие условия
              аренды и профессиональные операторы.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-start">
              <button
                onClick={() => router.push('/services/equipment#contact')}
                className="group relative px-6 py-2.5 bg-[#1B2A3B] text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
              >
                <span className="relative z-10 text-lg font-medium group-hover:text-gray-900 transition-colors duration-300">
                  ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
              </button>
              <button
                onClick={() => router.push('/services/equipment#reviews')}
                className="group relative px-6 py-2.5 bg-[#1B2A3B] text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
              >
                <span className="relative z-10 text-lg font-medium group-hover:text-gray-900 transition-colors duration-300">
                  ОТЗЫВЫ
                </span>
                <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
              </button>
            </div>
          </motion.div>
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
                description: 'Удобные условия аренды и оплаты',
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="text-center p-6"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
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

      <Footer />
    </div>
  )
}
