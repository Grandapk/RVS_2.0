'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Данные о проектах
const projects = [
  {
    id: 1,
    title: 'Жилой комплекс',
    category: 'Строительство',
    description: 'Современный жилой комплекс с развитой инфраструктурой',
    images: [
      '/images/portfolio/portfolio-1.webp',
      '/slides/1/1.webp',
      '/slides/1/2.webp',
    ],
  },
  {
    id: 2,
    title: 'Коммерческий центр',
    category: 'Строительство',
    description: 'Торгово-офисный центр в деловом районе города',
    images: [
      '/images/portfolio/portfolio-2.webp',
      '/slides/1/3.webp',
      '/slides/1/4.webp',
    ],
  },
  {
    id: 3,
    title: 'Промышленный объект',
    category: 'Строительство',
    description: 'Производственный комплекс с современным оборудованием',
    images: [
      '/images/portfolio/portfolio-3.webp',
      '/slides/1/1.webp',
      '/slides/1/4.webp',
    ],
  },
]

export default function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation className="bg-black/25 backdrop-blur-[2px]" />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Наши проекты
                </h1>
                <p className="text-xl text-gray-600">
                  Каждый проект - это история успеха и доверия наших клиентов
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="relative h-[300px] overflow-hidden rounded-2xl">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-bold">
                        Смотреть проект
                      </span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2">{project.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal для просмотра проекта */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {projects.find((p) => p.id === selectedProject)?.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {projects
                  .find((p) => p.id === selectedProject)
                  ?.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative h-[200px] rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image}
                        alt={`Проект ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ))}
              </div>
              <div className="mt-6">
                <p className="text-gray-600">
                  {projects.find((p) => p.id === selectedProject)?.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
