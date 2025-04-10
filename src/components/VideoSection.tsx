'use client'

import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

const VideoBackground = dynamic(() => import('./VideoBackground'), {
  ssr: false,
})

export default function VideoSection() {
  const router = useRouter()
  const { translations } = useLanguage()
  const video = translations.VideoSection || {}

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <VideoBackground />
      <div className="container mx-auto px-4 relative z-10 pt-16">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-left text-white">
            {video.title || 'Строим с качеством'}
          </h1>
          <p className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-left text-yellow-400">
            {video.subtitle || 'Работаем с доверием'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <button
              onClick={() => router.push('#works')}
              className="group relative px-6 sm:px-8 py-3 bg-yellow-400 text-gray-900 rounded-full hover:bg-[#1B2A3B] transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
            >
              <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {video.ourWorksButton || 'НАШИ РАБОТЫ'}
              </span>
              <div className="absolute inset-0 bg-[#1B2A3B] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
            </button>
            <a
              href="#reviews"
              className="group relative px-6 sm:px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-yellow-400 transition-all duration-300 overflow-hidden cursor-pointer hover:scale-105 w-fit"
            >
              <span className="relative z-10 text-lg sm:text-xl font-bold group-hover:text-gray-900 transition-colors duration-300 whitespace-nowrap">
                {video.reviewsButton || 'ОТЗЫВЫ'}
              </span>
              <div className="absolute inset-0 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              <div className="absolute inset-0 bg-transparent transform scale-x-100 group-hover:scale-x-0 transition-transform duration-300 origin-right"></div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
