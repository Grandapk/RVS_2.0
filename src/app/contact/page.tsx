import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  const contact = [
    {
      title: 'Веб-разработка',
      description:
        'Создание современных веб-сайтов и веб-приложений с использованием передовых технологий.',
      icon: '🌐',
    },
    {
      title: 'Мобильная разработка',
      description:
        'Разработка мобильных приложений для iOS и Android с нативным пользовательским интерфейсом.',
      icon: '📱',
    },
    {
      title: 'UI/UX дизайн',
      description:
        'Создание интуитивно понятных и привлекательных интерфейсов для ваших продуктов.',
      icon: '🎨',
    },
    {
      title: 'Консультации',
      description:
        'Профессиональные консультации по разработке и дизайну вашего проекта.',
      icon: '💡',
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-grow pt-16">
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Наши услуги
            </h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {contact.map((contact, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl mb-4">{contact.icon}</div>
                  <h3 className="text-xl font-bold mb-4">{contact.title}</h3>
                  <p className="text-gray-600">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Почему выбирают нас?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-4">⭐</div>
                <h3 className="text-xl font-bold mb-4">Опыт</h3>
                <p className="text-gray-600">
                  Более 5 лет успешной работы на рынке
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-xl font-bold mb-4">Команда</h3>
                <p className="text-gray-600">
                  Профессиональные специалисты с разносторонним опытом
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-4">💎</div>
                <h3 className="text-xl font-bold mb-4">Качество</h3>
                <p className="text-gray-600">
                  Гарантия высокого качества всех наших услуг
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
