import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ConstructionServices() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Строительные работы</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Мы предоставляем полный спектр строительных работ любой сложности.
              Наша команда профессионалов готова выполнить ваш проект с высоким
              качеством и в установленные сроки.
            </p>
            <h2 className="text-2xl font-bold mb-4">Наши услуги включают:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Возведение зданий и сооружений</li>
              <li>Ремонтные работы</li>
              <li>Отделочные работы</li>
              <li>Монтажные работы</li>
              <li>Проектирование</li>
            </ul>
            <p className="text-lg">
              Свяжитесь с нами для получения подробной информации о наших
              услугах и расчета стоимости вашего проекта.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
