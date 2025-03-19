import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Навигация */}
      <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold">Логотип</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-600">
                Главная
              </a>
              <a href="#about" className="hover:text-blue-600">
                О нас
              </a>
              <a href="#services" className="hover:text-blue-600">
                Услуги
              </a>
              <a href="#portfolio" className="hover:text-blue-600">
                Портфолио
              </a>
              <a href="#contact" className="hover:text-blue-600">
                Контакты
              </a>
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

      {/* Основной контент */}
      <main className="flex-grow">
        {/* Главная секция */}
        <section
          id="home"
          className="pt-16 min-h-screen flex items-center justify-center bg-gray-50"
        >
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Добро пожаловать
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Мы рады видеть вас на нашем сайте
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              >
                Связаться с нами
              </a>
              <a
                href="#about"
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
              >
                О нас
              </a>
            </div>
          </div>
        </section>

        {/* Секция О нас */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              О нас
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-lg mb-4">
                  Мы - команда профессионалов, стремящихся к совершенству в
                  каждом проекте.
                </p>
                <p className="text-lg">
                  Наш опыт и преданность делу позволяют нам создавать уникальные
                  решения для наших клиентов.
                </p>
              </div>
              <div className="bg-gray-200 h-64 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Секция Услуги */}
        <section id="services" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Наши услуги
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">Услуга {i}</h3>
                  <p className="text-gray-600">
                    Описание услуги и её преимущества для клиента.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция Портфолио */}
        <section id="portfolio" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Портфолио
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-gray-200 h-64 rounded-lg"></div>
              ))}
            </div>
          </div>
        </section>

        {/* Секция Контакты */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Контакты
            </h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Имя</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Сообщение
                  </label>
                  <textarea className="w-full px-4 py-2 border rounded-lg h-32"></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Отправить
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">О нас</h3>
              <p className="text-gray-400">
                Краткое описание компании и её миссии.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <p className="text-gray-400">Email: info@example.com</p>
              <p className="text-gray-400">Телефон: +7 (999) 123-45-67</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  VK
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Telegram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
