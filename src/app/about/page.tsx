'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AboutPage() {
  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation className="bg-black/25 backdrop-blur-[2px]" />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Наша история
                </h1>
                <p className="text-xl text-gray-600">
                  У каждой компании есть своя история — и наша не исключение.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <div className="w-1/3 h-[2px] bg-gray-300 translate-y-[-30px]"></div>
              <div className="mx-8">
                <div className="relative w-[200px] h-[200px]">
                  <Image
                    src="/images/about/roma.webp"
                    alt="Роман Шахалевич"
                    fill
                    sizes="(max-width: 768px) 200px, 200px"
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="text-center mt-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Роман Шахалевич
                  </h2>
                  <p className="text-gray-600">Основатель компании</p>
                </div>
              </div>
              <div className="w-1/3 h-[2px] bg-gray-300 translate-y-[-30px]"></div>
            </div>
          </div>
        </section>

        {/* История компании */}
        <section className="py-20 bg-[#0B1A2B]">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl lg:text-5xl font-bold text-white mb-16 text-center"
            >
              Как появилась компания RVS?
            </motion.h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Меня зовут{' '}
                  <strong className="text-gray-200">Роман Шахалевич</strong>, и
                  мой путь в строительной сфере начался задолго до того — как я
                  задумался о собственном бизнесе. Еще будучи студентом, я много
                  времени проводил, помогая своему отцу в семейной строительной
                  компании. Если бы тогда кто-то сказал мне, что однажды я
                  продолжу дело семьи и даже открою собственную компанию, я бы,
                  наверное, не поверил.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Но жизнь сама подсказывает нам верный путь. Годы работы плечом
                  к плечу с отцом дали мне бесценный опыт — как теоретический,
                  так и практический. Я научился не только управлять техникой
                  или руководить процессами, но и понимать людей, находить
                  решения в сложных ситуациях и добиваться того, чтобы клиенты
                  всегда были довольны результатом.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Со временем я почувствовал, что готов сделать решительный шаг
                  — создать свою собственную компанию, основанную на тех
                  ценностях, которые я перенял у отца. Так родилась{' '}
                  <strong className="text-gray-200">RVS</strong> — моя
                  «гордость» и, можно сказать, моё «дитя».
                </p>
              </div>
              <div className="space-y-8">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Годы работы с самыми разными клиентами — от крупных компаний
                  до частных лиц — научили меня важной истине: успех в этом
                  бизнесе — это не только предоставление услуг или заключение
                  сделок. Это, в первую очередь, построение доверительных и
                  долгосрочных отношений, основанных на уважении и честности.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Некоторые из моих первых клиентов со временем стали не просто
                  постоянными заказчиками, но и надежными партнерами, а иногда
                  даже друзьями. Я верю, что именно это отличает{' '}
                  <strong className="text-gray-200">RVS</strong> — компанию,
                  построенную не только на прочном фундаменте знаний и опыта, но
                  и на искренних взаимоотношениях с теми, для кого мы работаем.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  В <strong className="text-gray-200">RVS</strong> мы строим не
                  только здания — мы создаем отношения, которые выдерживают
                  испытание временем.
                </p>
                <div className="pt-8">
                  <button
                    onClick={() => router.push('/#contact')}
                    className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-colors duration-300"
                  >
                    СВЯЗАТЬСЯ
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
