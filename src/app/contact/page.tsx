'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'construction',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Здесь будет логика отправки формы
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitStatus('success')

    // Сброс формы
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'construction',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navigation isTransparent={!isScrolled} />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
              className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-transparent to-yellow-300/20"
            ></motion.div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Свяжитесь с нами
              </h1>
              <p className="text-xl text-gray-800 max-w-2xl mx-auto mb-12">
                Мы готовы помочь реализовать ваши проекты. Оставьте заявку, и мы
                свяжемся с вами в ближайшее время.
              </p>

              {/* Contact Cards */}
              <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-lg p-6 rounded-xl border border-yellow-200 shadow-lg"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2">Телефон</h3>
                  <a
                    href="tel:+37253320419"
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    +372 533 20 419
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-lg p-6 rounded-xl border border-yellow-200 shadow-lg"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2">Email</h3>
                  <a
                    href="mailto:info@rvs.ee"
                    className="text-gray-600 hover:text-yellow-600 transition-colors"
                  >
                    info@rvs.ee
                  </a>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/90 backdrop-blur-lg p-6 rounded-xl border border-yellow-200 shadow-lg"
                >
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-gray-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-gray-900 font-semibold mb-2">Адрес</h3>
                  <p className="text-gray-600">Tammi, Estonia</p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Gradient Overlay for smooth transition */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>
        </section>

        {/* Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-xl"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Оставьте заявку
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ваше имя
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-gray-900 placeholder-gray-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-gray-900 placeholder-gray-500"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-gray-900 placeholder-gray-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Интересующая услуга
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-gray-900 placeholder-gray-500"
                    >
                      <option value="construction">Строительные работы</option>
                      <option value="equipment">Аренда техники</option>
                      <option value="delivery">Доставка материалов</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition-all text-gray-900 placeholder-gray-500 resize-none"
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-yellow-400 text-gray-900 font-semibold py-4 px-6 rounded-lg hover:bg-yellow-500 transition-all"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Отправка...
                      </span>
                    ) : (
                      'Отправить сообщение'
                    )}
                  </motion.button>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-50 text-green-800 rounded-lg p-4 mt-4"
                    >
                      Сообщение успешно отправлено! Мы свяжемся с вами в
                      ближайшее время.
                    </motion.div>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-gray-100">
          <div className="w-full h-[400px] relative overflow-hidden rounded-t-3xl">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Здесь будет карта</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
