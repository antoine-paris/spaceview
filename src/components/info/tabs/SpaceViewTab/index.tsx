import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import SpaceViewTabFr from './SpaceViewTab.fr';
import SpaceViewTabEn from './SpaceViewTab.en';
import SpaceViewTabDe from './SpaceViewTab.de';
import SpaceViewTabEs from './SpaceViewTab.es';

export default function SpaceViewTab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <SpaceViewTabEn />;
  }

  if (currentLanguage === 'de') {
    return <SpaceViewTabDe />;
  }

  if (currentLanguage === 'es') {
    return <SpaceViewTabEs />;
  }

  return <SpaceViewTabFr />;
}