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
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { useLanguage } from '@/context/LanguageContext'

export default function ConstructionServices() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const { translations } = useLanguage()
  const services = translations.ServicesPage?.construction || {}

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

  const roofSlides = [
    {
      src: '/images/constructions/1.png',
      alt: 'Крыша 1',
    },
    {
      src: '/images/constructions/2.png',
      alt: 'Крыша 2',
    },
    {
      src: '/images/constructions/3.png',
      alt: 'Крыша 3',
    },
  ]

  const interiorSlides = [
    {
      src: '/images/constructions/in1.webp',
      alt: 'Внутренняя отделка 1',
    },
    {
      src: '/images/constructions/in2.webp',
      alt: 'Внутренняя отделка 2',
    },
    {
      src: '/images/constructions/in3.webp',
      alt: 'Внутренняя отделка 3',
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
                {services.title || 'Общестроительные работы'}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-start w-full sm:w-auto">
                <button
                  onClick={handleConsultation}
                  className="group relative px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                >
                  <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {services.cta || 'ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ'}
                  </span>
                  <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
                <button
                  onClick={() => router.push('/services/construction#reviews')}
                  className="group relative px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                >
                  <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                    {services.reviewsButton || 'ОТЗЫВЫ'}
                  </span>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-transparent transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

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
                {services.subtitle || 'Почему выбирают нас'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {services.description || 'Мы предоставляем качественные услуги и гарантируем результат'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Карточка 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {services.advantages?.quality?.title || 'Качество работ'}
                </h3>
                <p className="text-gray-600">
                  {services.advantages?.quality?.description || 'Мы используем только качественные материалы и современные технологии для достижения лучшего результата.'}
                </p>
              </motion.div>

              {/* Карточка 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-gray-900"
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
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {services.advantages?.timing?.title || 'Сроки выполнения'}
                </h3>
                <p className="text-gray-600">
                  {services.advantages?.timing?.description || 'Мы всегда соблюдаем оговоренные сроки и выполняем работы в установленное время.'}
                </p>
              </motion.div>

              {/* Карточка 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="w-8 h-8 text-gray-900"
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
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {services.advantages?.pricing?.title || 'Доступные цены'}
                </h3>
                <p className="text-gray-600">
                  {services.advantages?.pricing?.description || 'Мы предлагаем конкурентные цены и гибкую систему скидок для наших клиентов.'}
                </p>
              </motion.div>
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
                  {services.constructionAndRepair?.title || 'СТРОИТЕЛЬСТВО И РЕМОНТ'}
                </h2>
                <ul className="space-y-4 text-xl">
                  {services.constructionAndRepair?.items ? (
                    services.constructionAndRepair.items.map((item, index) => (
                      <li key={index}>• {item}</li>
                    ))
                  ) : (
                    <>
                      <li>• Объектов различного назначения</li>
                      <li>• Профильных и черепичных крыш</li>
                      <li>• Домов, квартир, офисов и других жилых и производственных объектов</li>
                    </>
                  )}
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
                <ImageSlider
                  images={slides}
                  showDots={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="first-slider"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Секция с карточками услуг */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* Карточка ФУНДАМЕНТЫ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border-2 border-yellow-400 hover:border-yellow-500 transition-colors group min-h-[400px] flex flex-col"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 shrink-0">
                  {services.serviceCards?.foundations?.title || 'ФУНДАМЕНТЫ'}
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  {services.serviceCards?.foundations?.items ? (
                    services.serviceCards.foundations.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • {item}
                      </motion.li>
                    ))
                  ) : (
                    <>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • монолитные
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • блочные
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • из фибо-блоков
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • утепление фундаментов
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • гидроизоляция фундаментов
                      </motion.li>
                    </>
                  )}
                </ul>
              </motion.div>

              {/* Карточка ФАСАДЫ И СТЕНЫ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-8 rounded-2xl border-2 border-yellow-400 hover:border-yellow-500 transition-colors group min-h-[400px] flex flex-col"
              >
                <h3 className="text-3xl font-bold text-gray-900 mb-6 shrink-0">
                  {services.serviceCards?.facades?.title || 'ФАСАДЫ И СТЕНЫ'}
                </h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  {services.serviceCards?.facades?.items ? (
                    services.serviceCards.facades.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * (index + 1) }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • {item}
                      </motion.li>
                    ))
                  ) : (
                    <>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • каменные и деревокаркасные
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • утепление и штукатурка
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • вагонка
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • металлопрофиль
                      </motion.li>
                    </>
                  )}
                  {services.serviceCards?.facades?.items ? (
                    services.serviceCards.facades.items.slice(4).map((item, index) => (
                      <motion.li
                        key={index + 4}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + (index * 0.1) }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • {item}
                      </motion.li>
                    ))
                  ) : (
                    <>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • фасадные плиты
                      </motion.li>
                      <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center group-hover:text-gray-900"
                      >
                        • ремонт старых стен
                      </motion.li>
                    </>
                  )}
                </ul>
              </motion.div>
            </div>

            {/* Карточка КРОВЕЛЬНЫЕ РАБОТЫ с маленьким слайдером */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.01 }}
              className="bg-white p-4 sm:p-8 rounded-2xl border-2 border-yellow-400 hover:border-yellow-500 transition-colors group"
            >
              <div className="grid lg:grid-cols-2 gap-4 sm:gap-8">
                <div className="flex flex-col">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 break-words hyphens-auto">
                    {services.serviceCards?.roofing?.title || 'КРОВЕЛЬНЫЕ РАБОТЫ / КРЫШИ'}
                  </h3>
                  <ul className="space-y-2 sm:space-y-4 text-base sm:text-lg text-gray-700">
                    {services.serviceCards?.roofing?.items ? (
                      services.serviceCards.roofing.items.slice(0, 3).map((item, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * (index + 1) }}
                          className="flex items-center group-hover:text-gray-900"
                        >
                          • {item}
                        </motion.li>
                      ))
                    ) : (
                      <>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 }}
                          className="flex items-center group-hover:text-gray-900"
                        >
                          • установка стропил
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="flex items-center group-hover:text-gray-900"
                        >
                          • установка мансардных окон
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex items-center group-hover:text-gray-900 break-words"
                        >
                          • устройство профильных и черепичных крыш
                        </motion.li>
                      </>
                    )}
                    {services.serviceCards?.roofing?.items ? (
                      services.serviceCards.roofing.items.slice(3, 5).map((item, index) => (
                        <motion.li
                          key={index + 3}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + 0.1 * index }}
                          className="flex items-center group-hover:text-gray-900"
                        >
                          • {item}
                        </motion.li>
                      ))
                    ) : (
                      <>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 }}
                          className="flex items-center group-hover:text-gray-900"
                        >
                          • установка ветровых ящиков
                        </motion.li>
                        <motion.li
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                          className="flex items-center group-hover:text-gray-900"
                        >
                          • монтаж водосливных систем
                        </motion.li>
                      </>
                    )}
                  </ul>
                </div>
                <div className="h-[200px] sm:h-[300px] mt-4 sm:mt-0">
                  <ImageSlider
                    images={roofSlides}
                    height="h-[200px] sm:h-[300px]"
                    cornerRadius="rounded-xl"
                    showDots={true}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="roof-slider"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Секция Строительная техника */}
        <section className="py-16 bg-[#1B2A3B] relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Текстовый контент */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-[2px] w-16 bg-white self-center"></div>
                  <h2 className="text-4xl font-bold leading-none">
                    {services.serviceCards?.roads?.title || 'ДОРОГИ И ПАРКОВКИ'}
                  </h2>
                </div>
                <ul className="space-y-4 text-xl pl-20">
                  {services.serviceCards?.roads?.items ? (
                    services.serviceCards.roads.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-yellow-400">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))
                  ) : (
                    [
                      'асфальтное покрытие',
                      'шоссейных дорог',
                      'парковки',
                      'лесные дороги',
                      'тротуарная плитка',
                      'устранение ям',
                      'площади',
                      'реконструкция дворов',
                      'расширение территории',
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-yellow-400">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))
                  )}
                </ul>
              </motion.div>

              {/* Изображение */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative h-[500px]"
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className="relative h-full rounded-3xl overflow-hidden"
                >
                  <Image
                    src="/images/equipment/road.webp"
                    alt="Дороги и парковки"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2A3B] to-transparent opacity-50"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Секция ВНУТРЕННЯЯ ОТДЕЛКА */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* Слайдер */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative w-full h-full min-h-[400px]"
              >
                <ImageSlider
                  images={interiorSlides}
                  height="h-full"
                  cornerRadius="rounded-2xl"
                  showDots={true}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="last-slider"
                />
              </motion.div>

              {/* Текстовый контент */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col min-h-[400px]"
              >
                <div className="flex items-center gap-4 mb-4 sm:mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    {services.serviceCards?.interior?.title ? (
                      services.serviceCards.interior.title.split(' ')[0]
                    ) : (
                      'ВНУТРЕННЯЯ'
                    )}
                  </h2>
                  <div className="h-[2px] bg-[#1B2A3B] flex-grow"></div>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">
                  {services.serviceCards?.interior?.title ? (
                    services.serviceCards.interior.title.split(' ').length > 1 ? (
                      services.serviceCards.interior.title.split(' ')[1]
                    ) : (
                      ''
                    )
                  ) : (
                    'ОТДЕЛКА'
                  )}
                </h2>
                <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg md:text-xl text-gray-700">
                  {services.serviceCards?.interior?.items ? (
                    services.serviceCards.interior.items.map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-yellow-400">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))
                  ) : (
                    [
                      'демонтажные работы',
                      'межкомнатных перегородки и потолки',
                      'двери, окна, подоконники',
                      'штукатурные и малярные работы',
                      'укладка любого полового покрытия',
                      'установка сантехоборудования',
                      'строительство саун',
                    ].map((item, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-yellow-400">•</span>
                        <span>{item}</span>
                      </motion.li>
                    ))
                  )}
                </ul>
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
      <ScrollToTopButton />
    </div>
  )
}
