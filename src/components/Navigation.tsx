'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'

interface NavigationProps {
  isTransparent?: boolean
}

export default function Navigation({ isTransparent = false }: NavigationProps) {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 150) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const handleServicesMouseEnter = useCallback(() => {
    setIsServicesOpen(true)
  }, [])

  const handleServicesMouseLeave = useCallback(() => {
    setIsServicesOpen(false)
  }, [])

  const handleMobileMenuToggle = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev)
  }, [])

  const handleServicesToggle = useCallback(() => {
    setIsServicesOpen((prev) => !prev)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-gray-500 shadow-lg' : 'bg-transparent backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="relative w-56 h-14">
            <Image
              src="/images/logo/main-logo.png"
              alt="Логотип"
              fill
              sizes="(max-width: 768px) 144px, 224px"
              className="object-contain"
              priority
            />
          </Link>
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
                    <Link
                      href="/services/delivery"
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
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              ДОСТАВКА МАТЕРИАЛА
                            </div>
                            <div className="text-sm text-gray-600">
                              Доставим ваш материал в любую точку
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
                href="/#about"
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
                href="/contact"
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
          {/* Мобильное меню */}
          <button
            className="md:hidden text-white font-semibold hover:text-gray-200 transition-colors duration-500"
            onClick={handleMobileMenuToggle}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
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
        </div>
        {/* Мобильное меню */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white rounded-xl shadow-lg mt-2 border border-yellow-200 overflow-hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative">
                <button
                  onClick={handleServicesToggle}
                  className="w-full text-left px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500 flex justify-between items-center"
                >
                  <span>Услуги</span>
                  <svg
                    className={`h-4 w-4 transform transition-transform duration-500 ${
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
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    isServicesOpen ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-4 py-2 space-y-2">
                    <Link
                      href="/services/construction"
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
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
                          <div className="font-semibold">АРЕНДА ТЕХНИКИ</div>
                          <div className="text-sm text-gray-600">
                            Арендуй строительную технику
                          </div>
                        </div>
                      </div>
                    </Link>
                    <Link
                      href="/services/delivery"
                      className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
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
                              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="font-semibold">
                            ДОСТАВКА МАТЕРИАЛА
                          </div>
                          <div className="text-sm text-gray-600">
                            Доставим ваш материал в любую точку
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link
                href="/#portfolio"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
              >
                Портфолио
              </Link>
              <Link
                href="/#about"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
              >
                О нас
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-yellow-50 rounded-lg transition-colors duration-500"
              >
                Связаться
              </Link>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  )
}
