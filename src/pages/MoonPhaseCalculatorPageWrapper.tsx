import { useLocation } from 'react-router-dom';
import MoonPhaseCalculatorPage from './MoonPhaseCalculatorPage';
import MoonPhaseCalculatorPageFr from './MoonPhaseCalculatorPageFr';
import MoonPhaseCalculatorPageDe from './MoonPhaseCalculatorPageDe';
import MoonPhaseCalculatorPageEs from './MoonPhaseCalculatorPageEs';

export default function MoonPhaseCalculatorPageWrapper() {
  const location = useLocation();
  const isFrench = location.pathname.startsWith('/fr');
  const isGerman = location.pathname.startsWith('/de');
  const isSpanish = location.pathname.startsWith('/es');

  if (isFrench) return <MoonPhaseCalculatorPageFr />;
  if (isGerman) return <MoonPhaseCalculatorPageDe />;
  if (isSpanish) return <MoonPhaseCalculatorPageEs />;
  return <MoonPhaseCalculatorPage />;
}