'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import VideoSection from '@/components/VideoSection'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function Home() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransparentNav, setIsTransparentNav] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const videoSection = document.getElementById('home')
      if (videoSection) {
        const rect = videoSection.getBoundingClientRect()
        setIsTransparentNav(rect.bottom > 0)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const portfolioSlides = [
    {
      src: '/images/portfolio/portfolio-1.webp',
      alt: 'Наши работы 1',
    },
    {
      src: '/images/portfolio/portfolio-2.webp',
      alt: 'Наши работы 2',
    },
    {
      src: '/images/portfolio/portfolio-3.webp',
      alt: 'Наши работы 3',
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioSlides.length)
    }, 5000) // Меняем слайд каждые 5 секунд

    return () => clearInterval(timer)
  }, [portfolioSlides.length])

  const handleServiceClick = (path: string) => {
    router.push(path)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation isTransparent={isTransparentNav} />

      {/* Основной контент */}
      <main className="flex-grow">
        {/* Главная секция */}
        <VideoSection />

        {/* Секция О нас */}
        <motion.section
          id="about"
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="col-span-2">
                  <ImageSlider
                    images={[
                      {
                        src: '/slides/1/1.webp',
                        alt: 'Наши работы 1',
                      },
                      {
                        src: '/slides/1/2.webp',
                        alt: 'Наши работы 2',
                      },
                      {
                        src: '/slides/1/3.webp',
                        alt: 'Наши работы 3',
                      },
                      {
                        src: '/slides/1/4.webp',
                        alt: 'Наши работы 4',
                      },
                    ]}
                    height="h-[400px]"
                    paginationColor="white"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-gray-900 mb-6">О нас</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Мы предоставляем полный спектр строительных услуг, начиная от
                  проектирования и заканчивая отделкой помещений. Наша команда
                  профессионалов гарантирует высокое качество работ и соблюдение
                  всех сроков.
                </p>
                <p className="text-lg text-gray-600">
                  Мы используем современные технологии и материалы, чтобы
                  обеспечить долговечность и надежность наших проектов.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Секция Наши услуги */}
        <motion.section
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="flex items-center gap-4 mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-yellow-400">
                Наши услуги
              </h2>
              <div className="flex-grow h-1 bg-[#1B2A3B]"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Карточка 1 */}
              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Общестроительные работы
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Наши услуги охватывают все ключевые аспекты строительства,
                  начиная от подготовки строительной площадки и земляных работ
                  до возведения зданий и сооружений.
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => handleServiceClick('/services/construction')}
                    className="group relative px-6 py-2.5 bg-[#1B2A3B] text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
                  >
                    <span className="relative z-10 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                      УЗНАТЬ БОЛЬШЕ
                    </span>
                    <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                  </button>
                </div>
              </motion.div>

              {/* Карточка 2 */}
              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Аренда техники
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Мы предлагаем широкий выбор строительной техники для различных
                  задач, включая экскаваторы, бульдозеры, краны и другие
                  специализированные машины.
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => handleServiceClick('/services/equipment')}
                    className="group relative px-6 py-2.5 bg-[#1B2A3B] text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
                  >
                    <span className="relative z-10 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                      УЗНАТЬ БОЛЬШЕ
                    </span>
                    <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                  </button>
                </div>
              </motion.div>

              {/* Карточка 3 */}
              <motion.div
                className="flex flex-col h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Доставка материала и вывоз мусора
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Наши услуги охватывают все ключевые аспекты строительства, от
                  подготовки строительной площадки и земляных работ до
                  возведения зданий и сооружений.
                </p>
                <div className="mt-auto">
                  <button
                    onClick={() => handleServiceClick('/services/delivery')}
                    className="group relative px-6 py-2.5 bg-[#1B2A3B] text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
                  >
                    <span className="relative z-10 text-sm font-medium group-hover:text-gray-900 transition-colors duration-300">
                      УЗНАТЬ БОЛЬШЕ
                    </span>
                    <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Секция Наши работы */}
        <motion.section
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="container mx-auto px-4">
            <motion.div
              className="flex items-center gap-4 mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex-grow h-1 bg-yellow-400"></div>
              <h2 className="text-4xl font-bold text-gray-900">Наши работы</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Левая колонка со статистикой */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex gap-24">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        50
                      </span>
                      <span className="text-3xl font-bold text-yellow-400">
                        +
                      </span>
                    </div>
                    <div className="text-gray-600">
                      <p className="text-lg">
                        Реализованных
                        <br />
                        объектов
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        99
                      </span>
                      <span className="text-3xl font-bold text-yellow-400">
                        %
                      </span>
                    </div>
                    <div className="text-gray-600">
                      <p className="text-lg">
                        Довольных
                        <br />
                        заказчиков
                      </p>
                    </div>
                  </motion.div>
                </div>

                <motion.p
                  className="text-lg text-gray-600 mt-8 max-w-[400px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  Наши услуги охватывают все ключевые аспекты строительства,
                  начиная от подготовки строительной площадки и земляных работ
                  до возведения зданий и сооружений.
                </motion.p>
              </motion.div>

              {/* Правая колонка с фото */}
              <motion.div
                className="relative w-full"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <ImageSlider
                  images={portfolioSlides}
                  height="h-[400px]"
                  className="w-full max-w-100 xl:max-w-[800px] mx-auto"
                  paginationColor="white"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Секция отзывов */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <ReviewsSection />
        </motion.div>

        {/* Секция FAQ */}
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
