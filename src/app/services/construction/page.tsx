'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function ConstructionServices() {
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleConsultation = () => {
    router.push('/contact')
  }

  const services = [
    {
      title: 'Возведение зданий',
      description:
        'Строительство жилых домов, коммерческих зданий и промышленных объектов с учетом всех современных требований.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: 'Ремонтные работы',
      description:
        'Комплексный ремонт помещений любой сложности, включая капитальный ремонт и реконструкцию.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
    {
      title: 'Отделочные работы',
      description:
        'Высококачественная внутренняя и внешняя отделка с использованием современных материалов.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: 'Монтажные работы',
      description:
        'Профессиональный монтаж конструкций, оборудования и инженерных систем.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      title: 'Проектирование',
      description:
        'Разработка проектной документации, планирование и дизайн строительных объектов.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
      ),
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 pt-16 md:pt-0">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            <div className="absolute inset-0 rotate-45 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
            <div className="absolute inset-0 rounded-full bg-white blur-3xl animate-pulse"></div>
            <div className="absolute inset-0 rounded-full bg-yellow-300 blur-3xl animate-pulse delay-700"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10 pt-20 md:pt-0">
            <div
              className={`text-center transform transition-all duration-1000 ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow-sm">
                Строительные работы
              </h1>
              <p className="text-xl md:text-2xl text-gray-800 max-w-3xl mx-auto mb-8 leading-relaxed drop-shadow-sm">
                Мы предоставляем полный спектр строительных работ любой
                сложности. Наша команда профессионалов готова выполнить ваш
                проект с высоким качеством и в установленные сроки.
              </p>
              <button
                onClick={handleConsultation}
                className="bg-white/95 backdrop-blur-lg text-gray-900 font-semibold py-4 px-8 rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border border-gray-200 mb-8 cursor-pointer"
              >
                Заказать консультацию
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent via-transparent to-white"></div>
        </section>

        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.1)_1px,transparent_1px)] bg-[length:40px_40px]"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 shadow-lg transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group ${
                    isVisible
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mb-6 transform transition-transform duration-300 group-hover:rotate-12">
                    <div className="text-gray-900">{service.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100/30 to-transparent"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Почему выбирают нас
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:rotate-12">
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
                  <h3 className="text-lg font-semibold mb-2">
                    Гарантия качества
                  </h3>
                  <p className="text-gray-600">
                    Мы гарантируем высокое качество всех выполняемых работ
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:rotate-12">
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
                  <h3 className="text-lg font-semibold mb-2">Точные сроки</h3>
                  <p className="text-gray-600">
                    Выполняем работы строго в установленные сроки
                  </p>
                </div>
                <div className="p-6 bg-white rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
                  <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mx-auto mb-4 transform transition-transform duration-300 group-hover:rotate-12">
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
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Честные цены</h3>
                  <p className="text-gray-600">
                    Прозрачное ценообразование без скрытых платежей
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
