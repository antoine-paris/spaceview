import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import BugReportTabFr from './BugReportTab.fr';
import BugReportTabEn from './BugReportTab.en';
import BugReportTabDe from './BugReportTab.de';
import BugReportTabEs from './BugReportTab.es';

export default function BugReportTab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <BugReportTabEn />;
  }

  if (currentLanguage === 'de') {
    return <BugReportTabDe />;
  }

  if (currentLanguage === 'es') {
    return <BugReportTabEs />;
  }

  return <BugReportTabFr />;
}