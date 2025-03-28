// src/context/LanguageContext.tsx
'use client';

import { createContext, useState, useEffect, useContext } from 'react';

// Импортируем файлы переводов напрямую
import ruTranslations from '../../messages/ru.json';
import etTranslations from '../../messages/et.json';
import enTranslations from '../../messages/en.json';

// Определяем структуру объекта переводов
type TranslationsType = typeof ruTranslations;

interface LanguageContextType {
  locale: string;
  translations: TranslationsType;
  setLocale: (newLocale: string) => void;
}

const translationsMap: Record<string, TranslationsType> = {
  ru: ruTranslations,
  et: etTranslations as TranslationsType,
  en: enTranslations as TranslationsType
};

const LanguageContext = createContext<LanguageContextType>({
  locale: 'ru',
  translations: ruTranslations,
  setLocale: () => {}
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState('ru');
  const [translations, setTranslations] = useState(ruTranslations);

  useEffect(() => {
    // Получаем переводы из предварительно импортированных файлов
    setTranslations(translationsMap[locale] || ruTranslations);
    
    // Сохраняем выбранный язык в localStorage для сохранения при перезагрузке
    localStorage.setItem('preferredLanguage', locale);
  }, [locale]);

  // При первой загрузке проверяем сохраненный язык в localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translationsMap[savedLanguage]) {
      setLocale(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ locale, translations, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);