'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useCallback } from 'react'

export default function Navigation() {
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
    <nav className="fixed top-0 left-0 right-0 bg-gradient-to-r from-yellow-400 to-yellow-500 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="relative w-48 h-12">
            <Image
              src="/logo.webp"
              alt="Логотип"
              fill
              sizes="(max-width: 768px) 120px, 192px"
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
                <button className="text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-300">
                  Услуги
                </button>
              </div>
              {isServicesOpen && (
                <div className="absolute top-full left-0 w-64 bg-yellow-400/95 backdrop-blur-md shadow-lg rounded-lg py-2 border border-yellow-300 -translate-x-1/2">
                  <Link
                    href="/services/construction"
                    className="block px-4 py-2 hover:bg-yellow-300/50 transition-colors duration-300"
                  >
                    <div className="font-semibold text-gray-900">
                      СТРОИТЕЛЬНЫЕ РАБОТЫ
                    </div>
                    <div className="text-sm text-gray-700">
                      Любая работа под ваш запрос.
                    </div>
                  </Link>
                  <Link
                    href="/services/equipment"
                    className="block px-4 py-2 hover:bg-yellow-300/50 transition-colors duration-300"
                  >
                    <div className="font-semibold text-gray-900">
                      АРЕНДА ТЕХНИКИ
                    </div>
                    <div className="text-sm text-gray-700">
                      Арендуй строительную технику.
                    </div>
                  </Link>
                  <Link
                    href="/services/delivery"
                    className="block px-4 py-2 hover:bg-yellow-300/50 transition-colors duration-300"
                  >
                    <div className="font-semibold text-gray-900">
                      ДОСТАВКА МАТЕРИАЛА
                    </div>
                    <div className="text-sm text-gray-700">
                      Доставим ваш материал в любую точку.
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="py-2">
              <Link
                href="/#portfolio"
                className="text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-300"
              >
                Портфолио
              </Link>
            </div>
            <div className="py-2">
              <Link
                href="/#about"
                className="text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-300"
              >
                О нас
              </Link>
            </div>
            <div className="py-2">
              <Link
                href="/contact"
                className="text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-300"
              >
                Контакты
              </Link>
            </div>
          </div>
          {/* Мобильное меню */}
          <button
            className="md:hidden text-gray-900 font-semibold hover:text-gray-700 transition-colors duration-300"
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
          <div className="md:hidden bg-yellow-400/95 backdrop-blur-md shadow-lg rounded-lg mt-2 border border-yellow-300">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="relative">
                <button
                  onClick={handleServicesToggle}
                  className="w-full text-left px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
                >
                  Услуги
                  <svg
                    className={`inline-block ml-1 h-4 w-4 transform ${
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
                  <div className="pl-4 space-y-1">
                    <Link
                      href="/services/construction"
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
                    >
                      СТРОИТЕЛЬНЫЕ РАБОТЫ
                    </Link>
                    <Link
                      href="/services/equipment"
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
                    >
                      АРЕНДА ТЕХНИКИ
                    </Link>
                    <Link
                      href="/services/delivery"
                      className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
                    >
                      ДОСТАВКА МАТЕРИАЛА
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/#portfolio"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
              >
                Портфолио
              </Link>
              <Link
                href="/#about"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
              >
                О нас
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-700 hover:bg-yellow-300/50 rounded-md transition-colors duration-300"
              >
                Контакты
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
