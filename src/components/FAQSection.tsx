'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqItems = [
  {
    question: 'Какие виды строительных работ вы выполняете?',
    answer:
      'Мы выполняем полный спектр строительных работ: от фундамента до отделки, включая земляные работы, возведение стен, кровельные работы, внутреннюю и внешнюю отделку, а также благоустройство территории.',
  },
  {
    question: 'Предоставляете ли вы гарантию на выполненные работы?',
    answer:
      'Да, мы предоставляем гарантию на все виды выполненных работ. Срок гарантии зависит от типа работ и используемых материалов. Подробные условия гарантии обсуждаются при заключении договора.',
  },
  {
    question: 'Как происходит расчет стоимости проекта?',
    answer:
      'Стоимость рассчитывается индивидуально для каждого проекта. Мы учитываем объем работ, сложность, используемые материалы и сроки выполнения. После осмотра объекта предоставляем детальную смету.',
  },
  {
    question: 'Какая спецтехника доступна для аренды?',
    answer:
      'У нас доступны экскаваторы, погрузчики, самосвалы и другая строительная техника. Вся техника проходит регулярное обслуживание и предоставляется с опытными операторами.',
  },
  {
    question: 'Работаете ли вы по официальному договору?',
    answer:
      'Да, все работы выполняются только по официальному договору, где прописаны все условия, сроки, стоимость и гарантийные обязательства. Это обеспечивает правовую защиту обеих сторон.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0px 0px', '20px 20px', '0px 0px'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            backgroundImage:
              'linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-4xl font-bold text-white">
            Часто задаваемые вопросы
          </h2>
          <div className="flex-grow h-1 bg-yellow-400"></div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 rounded-lg opacity-0"
                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-700/50"
                whileHover={{ scale: 1.01 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-lg font-medium text-white">
                    {item.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{
                      duration: 0.3,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    className="flex items-center justify-center w-6 h-6"
                  >
                    <span className="text-2xl text-yellow-400">+</span>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-4 border-t border-gray-700/50">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-gray-300"
                        >
                          {item.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
