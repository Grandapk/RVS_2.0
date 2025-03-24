'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface ImageSliderProps {
  images: Array<{
    src: string
    alt: string
  }>
  height?: string
  cornerRadius?: string
  paginationColor?: string
  className?: string
  showDots?: boolean
  sizes?: string
}

export default function ImageSlider({
  images = [],
  height = 'h-[400px]',
  cornerRadius = 'rounded-2xl',
  paginationColor = 'white',
  className = '',
  showDots = true,
  sizes = '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw',
}: ImageSliderProps) {
  const [isClient, setIsClient] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (loadedImages.size === images.length) {
      setIsLoading(false)
    }
  }, [loadedImages, images.length])

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => {
      const newSet = new Set(prev)
      newSet.add(src)
      return newSet
    })
  }

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

  if (!isClient) {
    return (
      <div
        className={`relative w-full ${height} ${cornerRadius} ${className} bg-gray-100`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-8 w-8 sm:h-12 sm:w-12 border-b-2 border-yellow-400"></div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative w-full ${height} ${cornerRadius} ${className} overflow-hidden`}
    >
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
        className={`w-full h-full ${cornerRadius}`}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className={`${cornerRadius}`}>
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className={`object-cover ${cornerRadius}`}
              sizes={sizes}
              priority={index === 0}
              onLoad={() => {
                if (index === 0) setIsLoading(false)
                handleImageLoad(image.src)
              }}
              onError={(e) => {
                console.error(`Error loading image: ${image.src}`)
                setError(`Ошибка загрузки изображения ${index + 1}`)
                setIsLoading(false)
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        .swiper {
          position: relative !important;
          width: 100% !important;
          height: 100% !important;
          min-height: 200px !important;
        }
        .swiper-wrapper {
          width: 100% !important;
          height: 100% !important;
        }
        .swiper-slide {
          width: 100% !important;
          height: 100% !important;
          position: relative !important;
        }
        .swiper-pagination {
          position: absolute !important;
          bottom: 20px !important;
          left: 0 !important;
          right: 0 !important;
          display: flex !important;
          justify-content: center !important;
          align-items: center !important;
          gap: 8px !important;
          z-index: 10 !important;
          padding: 4px 12px !important;
          margin: 0 !important;
          background: rgba(0, 0, 0, 0.3) !important;
          border-radius: 20px !important;
          width: fit-content !important;
          left: 50% !important;
          transform: translateX(-50%) !important;
          backdrop-filter: blur(4px) !important;
          height: 32px !important;
        }
        .last-slider .swiper-pagination {
          bottom: 45px !important;
        }
        @media (max-width: 768px) {
          .first-slider .swiper-pagination {
            bottom: 45px !important;
          }
        }
        .swiper-pagination-bullet {
          width: 10px !important;
          height: 10px !important;
          background: rgba(255, 255, 255, 0.5) !important;
          border-radius: 50% !important;
          cursor: pointer !important;
          padding: 0 !important;
          margin: 0 !important;
          border: none !important;
          transition: all 0.3s ease !important;
          opacity: 1 !important;
        }
        .swiper-pagination-bullet:hover {
          background: rgba(250, 204, 21, 0.7) !important;
          transform: scale(1.1) !important;
        }
        .swiper-pagination-bullet-active {
          background: #facc15 !important;
          transform: scale(1.2) !important;
        }
        .swiper-pagination-bullet-active:hover {
          cursor: default !important;
          transform: scale(1.2) !important;
        }
      `}</style>
    </div>
  )
}
