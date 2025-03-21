'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const reviews = [
  {
    id: 1,
    text: 'Отличная команда профессионалов! Выполнили ремонт нашего офиса точно в срок. Особенно порадовало внимание к деталям и чистота во время работ.',
    author: 'Андрей Михайлов',
    position: 'Директор IT-компании',
    rating: 5,
  },
  {
    id: 2,
    text: 'Заказывали строительство частного дома. Ребята сработали на высшем уровне - от проектирования до сдачи объекта. Всё чётко, прозрачно и качественно.',
    author: 'Елена Васильева',
    position: 'Владелец дома',
    rating: 5,
  },
  {
    id: 3,
    text: 'Арендовали у компании технику для земляных работ. Техника новая, в отличном состоянии. Операторы - настоящие профессионалы. Рекомендую!',
    author: 'Сергей Петров',
    position: 'Прораб строительной компании',
    rating: 5,
  },
]

export default function ReviewsSection() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)

  useEffect(() => {
    if (!isAutoplay) return

    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoplay])

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0px 0px', '100px 100px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage:
              'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white">Отзывы</h2>
          <div className="flex-grow h-1 bg-yellow-400"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 relative"
            >
              {/* Декоративные элементы */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full" />
              <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full" />

              <div className="flex flex-col items-center text-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="w-6 h-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-xl text-gray-300 italic mb-8"
                >
                  "{reviews[currentReview].text}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <p className="text-lg font-semibold text-white">
                    {reviews[currentReview].author}
                  </p>
                  <p className="text-sm text-gray-400">
                    {reviews[currentReview].position}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Навигация */}
          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentReview(index)
                  setIsAutoplay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReview === index
                    ? 'bg-yellow-400 w-6'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
