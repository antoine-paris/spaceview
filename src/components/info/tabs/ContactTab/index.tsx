import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import ContactTabFr from './ContactTab.fr';
import ContactTabEn from './ContactTab.en';
import ContactTabDe from './ContactTab.de';
import ContactTabEs from './ContactTab.es';

export default function ContactTab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <ContactTabEn />;
  }

  if (currentLanguage === 'de') {
    return <ContactTabDe />;
  }

  if (currentLanguage === 'es') {
    return <ContactTabEs />;
  }

  return <ContactTabFr />;
}