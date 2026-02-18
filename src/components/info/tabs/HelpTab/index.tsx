import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import HelpTabFr from './HelpTab.fr';
import HelpTabEn from './HelpTab.en';
import HelpTabDe from './HelpTab.de';
import HelpTabEs from './HelpTab.es';

export default function HelpTab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <HelpTabEn />;
  }

  if (currentLanguage === 'de') {
    return <HelpTabDe />;
  }

  if (currentLanguage === 'es') {
    return <HelpTabEs />;
  }

  return <HelpTabFr />;
}