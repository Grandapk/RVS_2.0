import Link from 'next/link'

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="./" className="text-xl font-bold">
            Логотип
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="./" className="hover:text-blue-600">
              Главная
            </Link>
            <Link href="/#about" className="hover:text-blue-600">
              О нас
            </Link>
            <Link href="/services" className="hover:text-blue-600">
              Услуги
            </Link>
            <Link href="/#portfolio" className="hover:text-blue-600">
              Портфолио
            </Link>
            <Link href="/contact" className="hover:text-blue-600">
              Контакты
            </Link>
          </div>
          {/* Мобильное меню */}
          <button className="md:hidden">
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
