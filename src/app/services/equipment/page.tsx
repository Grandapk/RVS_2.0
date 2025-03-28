'use client'

import dynamic from 'next/dynamic'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ReviewsSection from '@/components/ReviewsSection'
import FAQSection from '@/components/FAQSection'
import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import ScrollToTopButton from '@/components/ScrollToTopButton'
import { useLanguage } from '@/context/LanguageContext'

// Динамический импорт компонентов
const ReviewsSectionComponent = dynamic(
  () => import('@/components/ReviewsSection'),
  {
    loading: () => (
      <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
    ),
  }
)

const FAQSectionComponent = dynamic(() => import('@/components/FAQSection'), {
  loading: () => (
    <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg" />
  ),
})

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

// Оптимизированные варианты анимации
const animationConfig = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.5 },
}

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

const leftVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

const rightVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
}

// Оптимизация изображений
const IMAGES = {
  hero: {
    src: '/images/equipment/equipment-bg.webp',
    alt: 'Строительная техника',
  },
  road: {
    src: '/images/equipment/road.webp',
    alt: 'Дорожные работы',
  },
  delivery: {
    src: '/images/equipment/delivery.webp',
    alt: 'Перевозка стройматериалов',
  },
  metall: {
    src: '/images/equipment/metall.webp',
    alt: 'Сыпучие материалы',
  },
  traktor: {
    src: '/images/equipment/traktor.png',
    alt: 'Трактор',
    width: 800,
    height: 450,
  },
  truck: {
    src: '/images/equipment/truck.png',
    alt: 'Грузовик',
    width: 800,
    height: 450,
  },
}

export default function EquipmentPage() {
  const [selectedEquipment, setSelectedEquipment] = useState<number | null>(
    null
  )
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const lastScrollY = useRef(0)
  const { translations } = useLanguage()
  const services = translations.ServicesPage?.equipment || {}

  // Оптимизированный обработчик скролла с throttle
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY

    if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
      setIsScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }
  }, [])

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen flex flex-col">
        <Navigation isTransparent={!isScrolled} />

        {/* Hero Section */}
        <motion.section
          className="relative h-screen w-full flex items-center justify-center overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0">
            <Image
              {...IMAGES.hero}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={90}
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-left text-white">
                {services.title || 'Аренда строительной техники'}
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button
                  onClick={() => router.push('/contact')}
                  className="group relative px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                >
                  <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                    {services.ctaButton || 'ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ'}
                  </span>
                  <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
                <button
                  onClick={() => router.push('/services/equipment#reviews')}
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
        </motion.section>

        {/* Features Section */}
        <motion.section className="py-20 bg-white" {...animationConfig}>
          <div className="container mx-auto px-4">
            <motion.div variants={variants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {services.features?.title || 'Почему выбирают нас'}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {services.features?.subtitle || 'Мы предоставляем качественный сервис и надежную технику'}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Определяем данные для карточек - либо из переводов, либо дефолтные */}
              {(services.features?.items ? services.features.items : [
                {
                  title: 'Современная техника',
                  description: 'Вся техника регулярно обслуживается и обновляется'
                },
                {
                  title: 'Опытные операторы',
                  description: 'Профессиональные операторы с большим стажем работы'
                },
                {
                  title: 'Гибкие условия',
                  description: 'Удобные условия аренды и прозрачное ценообразование'
                }
              ]).map((feature, index) => {
                // Определяем иконку в зависимости от индекса
                let icon;
                if (index === 0) {
                  icon = (
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
                  );
                } else if (index === 1) {
                  icon = (
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
                  );
                } else {
                  icon = (
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
                  );
                }
                
                return (
                  <motion.div
                    key={index}
                    variants={variants}
                    custom={index}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.1)] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl mt-2"
                  >
                    <div className="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                      {icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.section>

        {/* Info Section with Gradient */}
        <motion.section
          className="relative w-full min-h-[600px] overflow-hidden"
          {...animationConfig}
        >
          <div className="absolute inset-0">
            <Image
              src="/images/equipment/road.webp"
              alt="Дорожные работы"
              fill
              className="object-cover"
              priority
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(110deg, rgba(27,42,59,0.95) 50%, rgba(255,186,0,0.95) 50.5%)',
              }}
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 py-24">
            <div className="flex flex-col md:flex-row justify-between gap-8">
              {/* Left Text Block */}
              <motion.div
                variants={leftVariants}
                className="w-full md:w-1/2 pr-0 md:pr-12"
              >
                <div className="mb-8">
                  <div className="w-16 h-[2px] bg-white mb-12"></div>
                </div>
                <div className="text-white">
                  <p className="text-lg mb-8 leading-relaxed">
                    {services.infoSection?.leftBlock?.paragraph1 || 'Отсутствие собственного автопарка грузовых автомобилей с большой грузоподъемностью может стать серьезным вызовом для компаний, работающих в сфере гражданского, промышленного или дорожного строительства. Без строительной техники сложно обеспечить своевременную доставку материалов, вывоз строительного мусора после демонтажных работ или транспортировку грунта, извлеченного при рытье котлованов.'}
                  </p>
                  <p className="text-lg leading-relaxed">
                    {services.infoSection?.leftBlock?.paragraph2 || 'Для тех, кто заказывает технику на долгий срок или берет несколько машин сразу, предусмотрены хорошие скидки.'}
                  </p>
                </div>
              </motion.div>

              {/* Right Text Block */}
              <motion.div
                variants={rightVariants}
                className="w-full md:w-1/2 pl-0 md:pl-24"
              >
                <div className="mb-8">
                  <div className="w-16 h-[2px] bg-white md:bg-gray-900 mb-12"></div>
                </div>
                <div className="text-white md:text-gray-900">
                  <p className="text-lg mb-8 leading-relaxed">
                    {services.infoSection?.rightBlock?.paragraph1 || 'Мы предоставляем наши услуги в регионе Ида-Вирумаа по выгодным ценам где спрос на ниже перечисленные услуги достаточно высокий:'}
                  </p>
                  <ul className="text-lg space-y-3 mb-8">
                    {(services.infoSection?.rightBlock?.services || [
                      'Аренда трактора',
                      'Аренда самосвала',
                      'Доставка материала',
                      'Вывоз мусора'
                    ]).map((service, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="font-bold">•</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                  <p className="text-lg leading-relaxed">
                    {services.infoSection?.rightBlock?.paragraph2 || 'Арендуя технику с водителем только тогда, когда он нужен - вы экономите деньги и не тратите ресурсы на содержание собственного транспорта. В стоимость аренды уже включены топливо и работа опытного водителя.'}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Additional Services Section */}
        <motion.section className="py-20 bg-white" {...animationConfig}>
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-2/3">
                <div className="grid md:grid-cols-2 gap-8">
                  {(services.additionalServices?.items || [
                    {
                      title: 'Трактор',
                      description:
                        'Мощный трактор для земляных работ и транспортировки грузов',
                      image: '/images/equipment/traktor.png',
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
                      title: 'Грузовик',
                      description:
                        'Грузовой автомобиль для перевозки строительных материалов',
                      image: '/images/equipment/truck.png',
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
                            d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                          />
                        </svg>
                      ),
                    },
                  ]).map((item, index) => (
                    <motion.div
                      key={index}
                      variants={variants}
                      custom={index}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_3px_10px_rgb(0,0,0,0.1)] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl mt-2"
                    >
                      <div className="relative w-full aspect-[16/9] mb-6">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover rounded-xl"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex flex-col justify-center">
                <motion.div
                  variants={leftVariants}
                  className="space-y-6 text-left"
                >
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {services.additionalServices?.cta?.title || 'Нет техники? Не проблема! Получите расчет стоимости уже сейчас.'}
                  </h2>
                  <p className="text-lg text-gray-600">
                    {services.additionalServices?.cta?.description || 'Мы предоставляем полный спектр услуг по аренде строительной техники и выполнению различных видов работ.'}
                  </p>
                  <button
                    onClick={() => router.push('/contact')}
                    className="group relative px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                  >
                    <span className="relative z-10 text-xl font-bold group-hover:text-white transition-colors duration-300">
                      {services.additionalServices?.cta?.buttonText || 'АРЕНДОВАТЬ'}
                    </span>
                    <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Blocks Section */}
        <motion.section className="py-20 bg-white" {...animationConfig}>
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={leftVariants}
                className="bg-white rounded-2xl p-8 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {services.servicesBlocks?.title || 'Избавьтесь от мусора – Закажите вывоз прямо сейчас!'}
                </h2>
                <button
                  onClick={() => router.push('/contact')}
                  className="group relative px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
                >
                  <span className="relative z-10 text-xl font-bold group-hover:text-white transition-colors duration-300">
                    {services.servicesBlocks?.buttonText || 'ЗАКАЗАТЬ ВЫВОЗ МУСОРА'}
                  </span>
                  <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
              </motion.div>

              <motion.div
                variants={rightVariants}
                className="bg-[#1B2A3B] rounded-2xl overflow-hidden relative aspect-[16/9] w-full order-2 md:order-1"
              >
                <Image
                  src="/images/equipment/metall.webp"
                  alt="Сыпучие материалы"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Materials Delivery Section */}
        <motion.section
          id="delivery"
          className="py-20 bg-white"
          {...animationConfig}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <motion.div
                variants={rightVariants}
                className="bg-[#1B2A3B] rounded-2xl overflow-hidden relative aspect-[16/9] w-full order-2 md:order-1"
              >
                <Image
                  src="/images/equipment/delivery.webp"
                  alt={services.materialsDelivery?.altText || 'Перевозка стройматериалов'}
                  fill
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                variants={leftVariants}
                className="flex flex-col items-start text-left order-1 md:order-2"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  {services.materialsDelivery?.title || 'Быстрая доставка и качественные материалы – Свяжитесь с нами!'}
                </h2>
                <button
                  onClick={() => router.push('/contact')}
                  className="group relative px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit self-start"
                >
                  <span className="relative z-10 text-xl font-bold group-hover:text-white transition-colors duration-300">
                    {services.materialsDelivery?.buttonText || 'ОФОРМИТЬ ДОСТАВКУ'}
                  </span>
                  <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
                </button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* How We Work Section */}
        <motion.section className="py-20 bg-white" {...animationConfig}>
          <div className="container mx-auto px-4">
            <motion.div variants={variants} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {services.howWeWork?.title || 'Как мы работаем'}
              </h2>
              <p className="text-lg text-gray-600">
                {services.howWeWork?.subtitle || 'Простой и понятный процесс доставки'}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {(services.howWeWork?.steps || [
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-yellow-500"
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
                  title: 'Заявка',
                  description: 'Оставьте заявку или позвоните нам',
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-yellow-500"
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
                  title: 'Расчет',
                  description: 'Рассчитаем стоимость и сроки',
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-yellow-500"
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
                  title: 'Доставка',
                  description: 'Доставим материалы точно в срок',
                },
                {
                  icon: (
                    <svg
                      className="w-8 h-8 text-yellow-500"
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
                  title: 'Оплата',
                  description: 'Удобные способы оплаты',
                },
              ]).map((step, index) => (
                <motion.div
                  key={index}
                  variants={variants}
                  custom={index}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-[0_3px_10px_rgb(0,0,0,0.1)] transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
                >
                  <div className="w-16 h-16 mx-auto bg-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                    {step.icon || (
                      <svg
                        className="w-8 h-8 text-yellow-500"
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
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.div variants={variants} {...animationConfig}>
          <ReviewsSectionComponent />
        </motion.div>

        <motion.div variants={variants} {...animationConfig}>
          <FAQSectionComponent />
        </motion.div>

        <Footer />
        <ScrollToTopButton />
      </div>
    </AnimatePresence>
  )
}
