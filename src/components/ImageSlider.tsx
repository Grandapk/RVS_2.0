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
}

export default function ImageSlider({
  images = [],
  height = 'h-[400px]',
  cornerRadius = 'rounded-[30px]',
  paginationColor = 'white',
  className = '',
}: ImageSliderProps) {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  if (!images || images.length === 0) {
    return (
      <div
        className={`relative w-full ${height} ${cornerRadius} bg-gray-100 flex items-center justify-center ${className}`}
      >
        <div className="text-gray-400">Нет изображений</div>
      </div>
    )
  }

  return (
    <div className={`relative w-full ${height} ${className}`}>
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-700 p-2 text-center z-50">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400"></div>
        </div>
      )}
      <div className={`${cornerRadius} overflow-hidden w-full h-full relative`}>
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
          pagination={{
            clickable: true,
            bulletActiveClass: `!bg-yellow-400`,
            bulletClass: `swiper-pagination-bullet !bg-white hover:!bg-yellow-400 transition-colors duration-300 !w-8 !h-2 !rounded-lg`,
          }}
          className="w-full h-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative w-full h-full ${cornerRadius} overflow-hidden`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
      </div>

      <style jsx global>{`
        .swiper-pagination {
          bottom: 20px !important;
        }
        .swiper-pagination-bullet {
          margin: 0 4px !important;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 32px !important;
        }
      `}</style>
    </div>
  )
}
