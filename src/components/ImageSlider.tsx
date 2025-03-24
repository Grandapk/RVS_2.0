'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import Image from 'next/image'
import { useState } from 'react'

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  height?: string
  cornerRadius?: string
  paginationColor?: string
  className?: string
  showDots?: boolean
}

export default function ImageSlider({
  images = [],
  height = 'h-[250px] sm:h-[300px] md:h-[400px]',
  cornerRadius = 'rounded-[10px] sm:rounded-[20px]',
  paginationColor = 'white',
  className = '',
  showDots = false,
}: ImageSliderProps) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative w-full ${height} ${cornerRadius} bg-gray-100 flex items-center justify-center`}
      >
        <div className="text-gray-400 text-sm sm:text-base">
          Нет изображений
        </div>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${height} ${cornerRadius} ${className}`}>
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-700 p-1 sm:p-2 text-sm sm:text-base text-center z-[60]">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-[55]">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-yellow-400"></div>
        </div>
      )}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={
          showDots
            ? {
                clickable: true,
                bulletActiveClass: `swiper-pagination-bullet-active`,
                bulletClass: `swiper-pagination-bullet`,
              }
            : false
        }
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                  console.error(`Error loading image: ${image.src}`)
                  setError(`Ошибка загрузки изображения ${index + 1}`)
                  setIsLoading(false)
                }}
                priority={index === 0}
                quality={90}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          min-height: 200px !important;
          z-index: 1 !important;
        }
        .swiper-wrapper {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          z-index: 1 !important;
          display: flex !important;
          box-sizing: content-box !important;
        }
        .swiper-slide {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          flex-shrink: 0 !important;
          transition-property: transform !important;
        }
        .swiper-pagination {
          position: absolute !important;
          text-align: center !important;
          transition: 300ms opacity !important;
          transform: translate3d(0, 0, 0) !important;
          z-index: 50 !important;
          bottom: 8px !important;
          left: 0 !important;
          right: 0 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 4px !important;
          padding: 0 !important;
          margin: 0 !important;
        }
        .swiper-pagination-bullet {
          width: 6px !important;
          height: 6px !important;
          display: inline-block !important;
          background-color: rgba(156, 163, 175, 0.9) !important;
          opacity: 1 !important;
          margin: 0 !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          border: 1px solid transparent !important;
        }
        @media (min-width: 640px) {
          .swiper-pagination {
            bottom: 16px !important;
            gap: 6px !important;
          }
          .swiper-pagination-bullet {
            width: 8px !important;
            height: 8px !important;
            border-width: 2px !important;
          }
        }
        .swiper-pagination-bullet:hover {
          background-color: rgba(250, 204, 21, 0.9) !important;
          transform: scale(1.1) !important;
        }
        .swiper-pagination-bullet-active {
          background-color: #facc15 !important;
          transform: scale(1.2) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
        }
      `}</style>
    </div>
  )
}
