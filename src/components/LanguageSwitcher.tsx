// src/components/LanguageSwitcher.tsx
'use client';

import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher = ({ isMobile = false }: LanguageSwitcherProps) => {
  const { locale, setLocale } = useLanguage();
  const router = useRouter();

  const handleLanguageChange = (newLocale: string) => {
    setLocale(newLocale);
    // Опционально: обновить URL для SEO (требует дополнительной настройки роутинга)
    // const { pathname, searchParams } = new URL(window.location.href);
    // router.push(`${pathname}?lang=${newLocale}`);
  };

  // Стили для мобильного и десктопного режимов
  const containerStyles = isMobile
    ? "flex w-full justify-between bg-yellow-50 rounded-lg px-4 py-2 shadow-sm"
    : "flex space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-md";

  const buttonBaseStyles = "px-3 py-2 rounded-md text-sm font-medium transition-colors";
  
  const getButtonStyles = (isActive: boolean) => {
    const activeStyles = "bg-yellow-400 text-gray-900 font-bold";
    const inactiveStyles = isMobile 
      ? "bg-white text-gray-700 hover:bg-gray-100" 
      : "hover:bg-gray-100";
    
    return `${buttonBaseStyles} ${isActive ? activeStyles : inactiveStyles}`;
  };

  return (
    <div className={containerStyles}>
      <button 
        onClick={() => handleLanguageChange('ru')} 
        disabled={locale === 'ru'}
        className={getButtonStyles(locale === 'ru')}
      >
        RU
      </button>
      <button 
        onClick={() => handleLanguageChange('et')} 
        disabled={locale === 'et'}
        className={getButtonStyles(locale === 'et')}
      >
        ET
      </button>
      <button 
        onClick={() => handleLanguageChange('en')} 
        disabled={locale === 'en'}
        className={getButtonStyles(locale === 'en')}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;