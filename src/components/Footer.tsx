import Link from 'next/link'

export default function Footer() {
  return (
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
  )
}
