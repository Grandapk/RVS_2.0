import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function MaterialDelivery() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Доставка материалов</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Мы обеспечиваем быструю и надежную доставку строительных
              материалов в любую точку города и области. Наши водители имеют
              большой опыт работы и всегда пунктуальны.
            </p>
            <h2 className="text-2xl font-bold mb-4">Мы доставляем:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Бетон и цемент</li>
              <li>Песок и щебень</li>
              <li>Кирпич и блоки</li>
              <li>Металлопрокат</li>
              <li>Лесоматериалы</li>
            </ul>
            <p className="text-lg">
              Свяжитесь с нами для расчета стоимости доставки и уточнения
              сроков.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
