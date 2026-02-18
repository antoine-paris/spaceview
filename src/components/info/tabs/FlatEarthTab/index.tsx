import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import FlatEarthTabFr from './FlatEarthTab.fr';
import FlatEarthTabEn from './FlatEarthTab.en';
import FlatEarthTabDe from './FlatEarthTab.de';
import FlatEarthTabEs from './FlatEarthTab.es';

export default function FlatEarthTab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <FlatEarthTabEn />;
  }

  if (currentLanguage === 'de') {
    return <FlatEarthTabDe />;
  }

  if (currentLanguage === 'es') {
    return <FlatEarthTabEs />;
  }

  return <FlatEarthTabFr />;
}