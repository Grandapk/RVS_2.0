import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function EquipmentRental() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8">Аренда техники</h1>
          <div className="prose max-w-none">
            <p className="text-lg mb-6">
              Мы предлагаем широкий выбор строительной техники в аренду. Наш
              парк техники регулярно обновляется и поддерживается в отличном
              состоянии.
            </p>
            <h2 className="text-2xl font-bold mb-4">В нашем парке:</h2>
            <ul className="list-disc pl-6 mb-6">
              <li>Экскаваторы</li>
              <li>Бульдозеры</li>
              <li>Краны</li>
              <li>Бетономешалки</li>
              <li>Грузовики</li>
            </ul>
            <p className="text-lg">
              Свяжитесь с нами для уточнения наличия нужной вам техники и
              расчета стоимости аренды.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
