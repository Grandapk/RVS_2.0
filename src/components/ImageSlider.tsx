'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import Image from 'next/image'
import { useState } from 'react'

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
  '/images/slide4.jpg',
]

export default function ImageSlider() {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className="relative w-full h-[400px]">
      {error && (
        <div className="absolute top-0 left-0 right-0 bg-red-100 text-red-700 p-2 text-center">
          {error}
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
                className="object-cover rounded-lg"
                onError={(e) => {
                  console.error(`Error loading image: ${image}`)
                  setError(`Ошибка загрузки изображения ${index + 1}`)
                }}
                priority={index === 0}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
