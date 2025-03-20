import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import ImageSlider from '@/components/ImageSlider'
import VideoSection from '@/components/VideoSection'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Основной контент */}
      <main className="flex-grow">
        {/* Главная секция */}
        <VideoSection />

        {/* Секция О нас */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <ImageSlider />
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                    Строим с душой,
                    <br />
                    работаем на результат
                  </h3>
                  <p className="text-xl sm:text-2xl text-gray-500">
                    Мы — ваш надежный партнер в строительстве. Наш путь — это
                    годы опыта, преданность делу и стремление к высокому
                    качеству. Мы строим не только здания, но и репутацию.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        10
                      </span>
                      <span className="text-3xl font-bold text-yellow-500 ml-1">
                        +
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">
                      Лет опыта
                      <br />
                      на рынке
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        50
                      </span>
                      <span className="text-3xl font-bold text-yellow-500 ml-1">
                        +
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">
                      Успешных
                      <br />
                      проектов
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        99
                      </span>
                      <span className="text-3xl font-bold text-gray-900 ml-1">
                        %
                      </span>
                    </div>
                    <p className="text-base text-gray-500 mt-2">
                      Счастливых
                      <br />
                      клиентов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Секция Наши услуги */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-4 mb-20">
              <h2 className="text-4xl font-bold text-yellow-400">
                Наши услуги
              </h2>
              <div className="flex-grow h-1 bg-blue-900"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Карточка 1 */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Общестроительные работы
                </h3>
                <p className="text-gray-600 mb-4">
                  Наши услуги охватывают все ключевые аспекты строительства,
                  начиная от подготовки строительной площадки и земляных работ
                  до возведения зданий и сооружений.
                </p>
                <div className="mt-auto">
                  <button className="text-left px-5 py-1.5 bg-[#1B2A3B] text-white rounded-full hover:bg-blue-800 transition text-sm">
                    Узнать больше
                  </button>
                </div>
              </div>

              {/* Карточка 2 */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Аренда строй-
                  <br />
                  техники
                </h3>
                <p className="text-gray-600 mb-4">
                  Мы предоставляем в аренду надежную строительную технику
                  которая регулярно обслуживается для выполнения различных видов
                  работ.
                </p>
                <div className="mt-auto">
                  <button className="text-left px-5 py-1.5 bg-[#1B2A3B] text-white rounded-full hover:bg-blue-800 transition text-sm">
                    Узнать больше
                  </button>
                </div>
              </div>

              {/* Карточка 3 */}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Доставка материала и вывоз мусора
                </h3>
                <p className="text-gray-600 mb-4">
                  Наши услуги охватывают все ключевые аспекты строительства, от
                  подготовки строительной площадки и земляных работ до
                  возведения зданий и сооружений.
                </p>
                <div className="mt-auto">
                  <button className="text-left px-5 py-1.5 bg-[#1B2A3B] text-white rounded-full hover:bg-blue-800 transition text-sm">
                    Узнать больше
                  </button>
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
                    className="max-w-md mx-auto px-4 py-2 border rounded-lg"
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
