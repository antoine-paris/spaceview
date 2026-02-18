import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import SimulationsTabFr from './SimulationsTab.fr';
import SimulationsTabEn from './SimulationsTab.en';
import SimulationsTabDe from './SimulationsTab.de';
import SimulationsTabEs from './SimulationsTab.es';

export default function SimulationsTab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <SimulationsTabEn />;
  }

  if (currentLanguage === 'de') {
    return <SimulationsTabDe />;
  }

  if (currentLanguage === 'es') {
    return <SimulationsTabEs />;
  }

  return <SimulationsTabFr />;
}