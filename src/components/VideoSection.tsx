'use client'

import dynamic from 'next/dynamic'

const VideoBackground = dynamic(() => import('./VideoBackground'), {
  ssr: false,
})

export default function VideoSection() {
  return (
    <section
      id="home"
      className="pt-16 min-h-screen flex items-center justify-center relative"
    >
      <VideoBackground />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-1 text-left text-white">
            Строим с качеством
          </h1>
          <p className="text-4xl md:text-5xl font-bold mb-3 text-left text-yellow-500">
            Работаем с доверием
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-yellow-400 font-bold text-blue-900 rounded-full hover:bg-gray-800 hover:text-white hover:border-gray-800 border-2 border-yellow-400 transition-colors duration-300"
            >
              НАШИ РАБОТЫ
            </a>
            <a
              href="/services"
              className="px-8 py-3 border-2 border-green-950 font-bold text-green-950 rounded-full hover:bg-blue-50 hover:border-green-800 transition-colors duration-300"
            >
              НАШИ УСЛУГИ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
