'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext'

// Дефолтные вопросы и ответы, которые будут использоваться, если переводы не найдены
const defaultFaqItems = [
  {
    question: 'В каких регионах вы работаете?',
    answer:
      'Мы оказываем строительные услуги в Ида-Вирумаа. Если ваш объект находится за пределами этого региона, свяжитесь с нами для уточнения деталей.',
  },
  {
    question: 'Как заказать консультацию?',
    answer:
      "Вы можете оставить заявку на нашем сайте, позвонить по телефону (+372) 53 320 419 или заполнить форму на сайте в разделе 'связаться'. Наш специалист свяжется с вами для обсуждения деталей.",
  },
  {
    question: 'Вы помогаете с выбором материалов?',
    answer:
      'Да, мы подбираем оптимальные строительные и отделочные материалы с учетом бюджета и пожеланий клиента.',
  },
  {
    question: 'Работаете ли вы с материалами заказчика?',
    answer:
      'Да, если материалы соответствуют требованиям качества и безопасности. Однако мы рекомендуем проконсультироваться с нашими специалистами перед покупкой.',
  },
  {
    question: 'Оказываете ли вы услуги по благоустройству территории?',
    answer:
      'Да, мы выполняем ландшафтные работы, укладку тротуарной плитки, установку заборов и другие виды благоустройства.',
  },
]

export default function FAQSection() {
  const { translations } = useLanguage();
  const faq = translations.FAQ || {};
  
  // Используем переводы из файла переводов или дефолтные значения
  const faqItems = faq.items || defaultFaqItems;
  
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

      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {faq.title || 'Часто задаваемые вопросы'}
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item: { question: string; answer: string }, index: number) => (
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

          {/* Кнопка Узнать больше */}
          <motion.div
            className="flex justify-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-[#FFA800] via-[#FFB800] to-[#FFC700] rounded-full text-gray-900 font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                {faq.moreButton || 'УЗНАТЬ БОЛЬШЕ'}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
