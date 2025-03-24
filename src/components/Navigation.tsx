'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  isTransparent?: boolean
  className?: string
}

export default function Navigation({
  isTransparent = false,
  className = '',
}: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Оптимизированный обработчик скролла с debounce
  useEffect(() => {
    let timeoutId: NodeJS.Timeout

    const handleScroll = () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }

      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY
        setIsScrolled(currentScrollY > 50)
      }, 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  // Мемоизируем обработчики
  const handleServicesMouseEnter = useCallback(() => {
    setIsServicesOpen(true)
  }, [])

  const handleServicesMouseLeave = useCallback(() => {
    setIsServicesOpen(false)
  }, [])

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
    // Закрываем подменю услуг при закрытии мобильного меню
    if (isServicesOpen) {
      setIsServicesOpen(false)
    }
  }, [isServicesOpen])

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 right-0 h-16 z-50 transition-all duration-500 will-change-transform backface-hidden ${
        isScrolled
          ? 'bg-gray-500 shadow-lg'
          : className || 'bg-black/20 backdrop-blur-sm'
      }`}
      style={{ transform: 'translateZ(0)' }}
    >
      <div className="h-full w-full">
        <div className="h-full w-full px-4 mx-auto max-w-7xl">
          <div className="relative h-full flex items-center justify-between">
            {/* Логотип */}
            <div className="flex-shrink-0">
              <Link href="/" className="block relative w-[120px] md:w-56 h-14">
                <Image
                  src="/images/logo/main-logo.png"
                  alt="Логотип"
                  fill
                  sizes="(max-width: 768px) 120px, 224px"
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* Десктопное меню */}
            <div className="hidden md:flex space-x-8">
              <div
                className="relative group"
                onMouseEnter={handleServicesMouseEnter}
                onMouseLeave={handleServicesMouseLeave}
              >
                <div className="py-2">
                  <button
                    className={`font-semibold transition-colors duration-500 flex items-center ${
                      isTransparent
                        ? 'text-white hover:text-gray-200'
                        : 'text-white hover:text-gray-200'
                    }`}
                  >
                    Услуги
                    <svg
                      className={`ml-1 h-4 w-4 transform transition-transform duration-500 ${
                        isServicesOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                </div>
                {/* Выпадающее меню услуг */}
                <div
                  className={`absolute top-full left-1/2 -translate-x-1/2 w-72 transform transition-all duration-500 ${
                    isServicesOpen
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 -translate-y-2 pointer-events-none'
                  }`}
                >
                  <div className="pt-4">
                    <div className="bg-white rounded-xl shadow-xl border border-yellow-200 overflow-hidden">
                      <Link
                        href="/services/construction"
                        className="block hover:bg-yellow-50 transition-colors duration-500"
                      >
                        <div className="px-6 py-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                              <svg
                                className="w-6 h-6 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                СТРОИТЕЛЬНЫЕ РАБОТЫ
                              </div>
                              <div className="text-sm text-gray-600">
                                Любая работа под ваш запрос
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                      <Link
                        href="/services/equipment"
                        className="block hover:bg-yellow-50 transition-colors duration-500"
                      >
                        <div className="px-6 py-4 border-t border-gray-100">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-yellow-100 rounded-lg">
                              <svg
                                className="w-6 h-6 text-yellow-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">
                                АРЕНДА ТЕХНИКИ
                              </div>
                              <div className="text-sm text-gray-600">
                                Арендуй строительную технику
                              </div>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <Link
                  href="/#portfolio"
                  className={`font-semibold transition-colors duration-500 ${
                    isTransparent
                      ? 'text-white hover:text-gray-200'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  Портфолио
                </Link>
              </div>
              <div className="py-2">
                <Link
                  href="/about"
                  className={`font-semibold transition-colors duration-500 ${
                    isTransparent
                      ? 'text-white hover:text-gray-200'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  О нас
                </Link>
              </div>
              <div className="py-2">
                <Link
                  href="/#contact"
                  className={`font-semibold transition-colors duration-500 ${
                    isTransparent
                      ? 'text-white hover:text-gray-200'
                      : 'text-white hover:text-gray-200'
                  }`}
                >
                  Связаться
                </Link>
              </div>
            </div>

            {/* Кнопка мобильного меню */}
            <button
              className="md:hidden p-2 -mr-2 text-white hover:text-gray-200 transition-colors duration-500"
              onClick={handleMobileMenuToggle}
              aria-label="Открыть меню"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>

            {/* Мобильное меню */}
            <motion.div
              id="mobile-menu"
              role="navigation"
              aria-label="Мобильное меню"
              initial={{ opacity: 0, y: -10 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : -10,
              }}
              transition={{ duration: 0.2 }}
              className={`absolute top-full left-0 right-0 ${
                isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
              }`}
            >
              <div className="mx-4 mt-2">
                <div className="bg-white rounded-xl shadow-lg border border-yellow-200 overflow-hidden">
                  <div className="px-2 pt-2 pb-3 space-y-1">
                    <div className="relative">
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500 flex items-center justify-between"
                      >
                        Услуги
                        <svg
                          className={`ml-1 h-4 w-4 transform transition-transform duration-500 ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {isServicesOpen && (
                        <div className="mt-2 space-y-2">
                          <Link
                            href="/services/construction"
                            className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
                            onClick={() => {
                              setIsServicesOpen(false)
                              handleMobileMenuToggle()
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                <svg
                                  className="w-5 h-5 text-yellow-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="font-semibold">
                                  СТРОИТЕЛЬНЫЕ РАБОТЫ
                                </div>
                                <div className="text-sm text-gray-600">
                                  Любая работа под ваш запрос
                                </div>
                              </div>
                            </div>
                          </Link>
                          <Link
                            href="/services/equipment"
                            className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
                            onClick={() => {
                              setIsServicesOpen(false)
                              handleMobileMenuToggle()
                            }}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="p-2 bg-yellow-100 rounded-lg">
                                <svg
                                  className="w-5 h-5 text-yellow-600"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                  />
                                </svg>
                              </div>
                              <div>
                                <div className="font-semibold">
                                  АРЕНДА ТЕХНИКИ
                                </div>
                                <div className="text-sm text-gray-600">
                                  Арендуй строительную технику
                                </div>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )}
                    </div>
                    <Link
                      href="/#portfolio"
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
                      onClick={handleMobileMenuToggle}
                    >
                      Портфолио
                    </Link>
                    <Link
                      href="/about"
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
                      onClick={handleMobileMenuToggle}
                    >
                      О нас
                    </Link>
                    <Link
                      href="/#contact"
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
                      onClick={handleMobileMenuToggle}
                    >
                      Связаться
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}
