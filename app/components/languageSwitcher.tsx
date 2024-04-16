import React, { useState } from 'react';
import Image from 'next/image';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (newLanguage: React.SetStateAction<string>) => {
    setLanguage(newLanguage);
    console.log(newLanguage)
  };

  return (
    <div>
      {
        language === 'en' 
      ? (
          <button className="relative button-container"
          style={{ width: '40px', height: '26px' }} onClick={() => handleLanguageChange('fr')}>
            <Image src="/en.png" alt="English Flag" layout="fill" objectFit="cover"/>
          </button>
        )
      : (
          <button className="relative button-container"
          style={{ width: '40px', height: '26px' }} onClick={() => handleLanguageChange('en')}>
            <Image src="/fr.png" alt="French Flag" layout="fill" objectFit="cover"/>
          </button>
        )
      }
    </div>
  )
}

export default LanguageSwitcher