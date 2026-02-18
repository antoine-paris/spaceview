import { useLocation } from 'react-router-dom';
import EclipsePredictorPage from './EclipsePredictorPage';
import EclipsePredictorPageFr from './EclipsePredictorPageFr';
import EclipsePredictorPageDe from './EclipsePredictorPageDe';
import EclipsePredictorPageEs from './EclipsePredictorPageEs';

export default function EclipsePredictorPageWrapper() {
  const location = useLocation();
  const isFrench = location.pathname.startsWith('/fr');
  const isGerman = location.pathname.startsWith('/de');
  const isSpanish = location.pathname.startsWith('/es');

  if (isFrench) return <EclipsePredictorPageFr />;
  if (isGerman) return <EclipsePredictorPageDe />;
  if (isSpanish) return <EclipsePredictorPageEs />;
  return <EclipsePredictorPage />;
}