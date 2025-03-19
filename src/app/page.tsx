import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

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
                href="/services"
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition"
              >
                Наши услуги
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
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <ImageSlider />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция Портфолио */}
        <section id="portfolio" className="py-20 bg-gray-50">
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
        <section id="contact" className="py-20 bg-white">
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

      <Footer />
    </div>
  )
}
