import { useLocation } from 'react-router-dom';
import AstrPhotographyPlannerPage from './AstrPhotographyPlannerPage';
import AstroPhotographyPlannerPageFr from './AstroPhotographyPlannerPageFr';
import AstroPhotographyPlannerPageDe from './AstroPhotographyPlannerPageDe';
import AstroPhotographyPlannerPageEs from './AstroPhotographyPlannerPageEs';

export default function AstroPhotographyPlannerPageWrapper() {
  const location = useLocation();
  const isFrench = location.pathname.startsWith('/fr');
  const isGerman = location.pathname.startsWith('/de');
  const isSpanish = location.pathname.startsWith('/es');

  if (isFrench) return <AstroPhotographyPlannerPageFr />;
  if (isGerman) return <AstroPhotographyPlannerPageDe />;
  if (isSpanish) return <AstroPhotographyPlannerPageEs />;
  return <AstrPhotographyPlannerPage />;
}