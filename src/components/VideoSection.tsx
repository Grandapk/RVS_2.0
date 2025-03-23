'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'

const VideoBackground = dynamic(() => import('./VideoBackground'), {
  ssr: false,
})

export default function VideoSection() {
  const router = useRouter()

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
            <button
              onClick={() => router.push('/portfolio')}
              className="group relative px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
            >
              <span className="relative z-10 text-xl font-bold group-hover:text-white transition-colors duration-300">
                НАШИ РАБОТЫ
              </span>
              <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
            </button>
            <button
              onClick={() => router.push('/#reviews')}
              className="group relative px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105"
            >
              <span className="relative z-10 text-xl font-bold group-hover:text-gray-900 transition-colors duration-300">
                ОТЗЫВЫ
              </span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 bg-transparent transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
