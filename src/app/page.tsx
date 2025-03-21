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

export default function Home() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
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
      <Navigation />

      {/* Основной контент */}
      <main className="flex-grow">
        {/* Главная секция */}
        <VideoSection />

        {/* Секция О нас */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="grid grid-cols-2 gap-4">
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
                    cornerRadius="rounded-[20px]"
                    paginationColor="white"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-4xl font-bold mb-6 text-gray-900">
                    Строим с душой,
                    <br />
                    работаем на результат
                  </h3>
                  <p className="text-lg text-gray-500">
                    Мы — ваш надежный партнер в строительстве. Наш путь — это
                    годы опыта, преданность делу и стремление к высокому
                    качеству. Мы строим не только здания, но и репутацию.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        10
                      </span>
                      <span className="text-3xl font-bold text-yellow-500 ml-1">
                        +
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">
                      Лет опыта
                      <br />
                      на рынке
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        50
                      </span>
                      <span className="text-3xl font-bold text-yellow-500 ml-1">
                        +
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">
                      Успешных
                      <br />
                      проектов
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        99
                      </span>
                      <span className="text-3xl font-bold text-yellow-400 ml-1">
                        %
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">
                      Счастливых
                      <br />
                      клиентов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция Наши услуги */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-4xl font-bold text-yellow-400">
                Наши услуги
              </h2>
              <div className="flex-grow h-1 bg-[#1B2A3B]"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Карточка 1 */}
              <div className="flex flex-col h-full">
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
              </div>

              {/* Карточка 2 */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Аренда строй-
                  <br />
                  техники
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  Мы предоставляем в аренду надежную строительную технику
                  которая регулярно обслуживается для выполнения различных видов
                  работ.
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
              </div>

              {/* Карточка 3 */}
              <div className="flex flex-col h-full">
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
              </div>
            </div>
          </div>
        </section>

        {/* Секция Наши работы */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-16">
              <div className="flex-grow h-1 bg-yellow-400"></div>
              <h2 className="text-4xl font-bold text-gray-900">Наши работы</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Левая колонка со статистикой */}
              <div className="space-y-8">
                <div className="flex gap-24">
                  <div>
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
                  </div>

                  <div>
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
                  </div>
                </div>

                <p className="text-lg text-gray-600 mt-8">
                  Наши услуги охватывают все ключевые аспекты строительства,
                  начиная от подготовки строительной площадки и земляных работ
                  до возведения зданий и сооружений.
                </p>
              </div>

              {/* Правая колонка с фото */}
              <div className="relative w-full">
                <ImageSlider
                  images={portfolioSlides}
                  height="h-[400px]"
                  cornerRadius="rounded-[30px]"
                  paginationColor="white"
                  className="w-full max-w-[800px] mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Секция отзывов */}
        <ReviewsSection />

        {/* Секция FAQ */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  )
}
