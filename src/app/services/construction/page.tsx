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

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow">
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/construction-bg.webm" type="video/webm" />
          </video>
          <div className="absolute inset-0 bg-black/50"></div>

          <div className="container mx-auto px-4 relative z-10">
            <div
              className={`transform transition-all duration-1000 max-w-2xl ${
                isVisible
                  ? 'translate-y-0 opacity-100'
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight drop-shadow-lg text-left">
                Общестроительные работы
              </h1>
              <div className="flex flex-col sm:flex-row gap-4 justify-start">
                <button
                  onClick={handleConsultation}
                  className="bg-yellow-400 border-2 border-yellow-400 text-gray-900 font-semibold py-4 px-8 rounded-full hover:bg-yellow-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  ЗАКАЗАТЬ КОНСУЛЬТАЦИЮ
                </button>
                <button
                  onClick={() => router.push('/portfolio')}
                  className="bg-transparent border-2 border-yellow-400 text-yellow-400 font-semibold py-4 px-8 rounded-full hover:bg-yellow-400/10 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-lg"
                >
                  ОТЗЫВЫ
                </button>
              </div>
            </div>
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
      </main>
      <Footer />
    </div>
  )
}
