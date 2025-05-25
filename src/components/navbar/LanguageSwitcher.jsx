import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Languages } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu";
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ t, isMobile = false, setIsOpenMobileMenu }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'de', name: 'Deutsch' },
    { code: 'fr', name: 'Français' },
    { code: 'es', name: 'Español' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'zh', name: '中文' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (isMobile && setIsOpenMobileMenu) {
      setIsOpenMobileMenu(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={isMobile ? "ghost" : "outline"} size={isMobile ? "default" : "sm"} className={isMobile ? "w-full justify-start" : ""}>
          <Languages className="mr-2 h-4 w-4" />
          {languages.find(l => l.code === currentLanguage)?.name || t('navbar.language')}
          {!isMobile && <ChevronDown className="ml-2 h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={isMobile ? "start" : "end"}>
        <DropdownMenuLabel>{t('navbar.language')}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={currentLanguage} onValueChange={changeLanguage}>
          {languages.map((lang) => (
            <DropdownMenuRadioItem key={lang.code} value={lang.code}>
              {lang.name}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
