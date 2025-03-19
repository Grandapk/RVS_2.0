'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { useState } from 'react'

const images = ['/slide1.webp', '/slide2.webp', '/slide3.webp', '/slide4.webp']

export default function ImageSlider() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="relative w-full h-[400px]">
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-700 p-2 text-center z-50">
          {error}
        </div>
      )}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-40">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      )}
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: 'bg-blue-600',
        }}
        className="w-full h-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover rounded-lg"
                onLoad={() => setIsLoading(false)}
                onError={(e) => {
                  console.error(`Error loading image: ${image}`)
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
  )
}
