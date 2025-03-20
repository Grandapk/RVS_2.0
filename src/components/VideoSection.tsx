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
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-left text-white">
            Строим с качеством
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-left text-yellow-400">
            Работаем с доверием
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 items-center sm:items-start">
            <a
              href="#portfolio"
              className="inline-block px-8 py-4 bg-yellow-400 font-bold text-lg text-gray-900 rounded-full hover:bg-yellow-500 transition-colors duration-300 w-auto"
            >
              НАШИ РАБОТЫ
            </a>
            <a
              href="#reviews"
              className="inline-block px-8 py-4 bg-transparent border-2 border-white font-bold text-lg text-white rounded-full hover:bg-white/10 transition-colors duration-300 w-auto"
            >
              ОТЗЫВЫ
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
