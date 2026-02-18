# Guide Complet d'Ajout de Nouvelles Langues - SpaceView.me

## Vue d'ensemble

Ce document fournit un guide **étape par étape complet** pour ajouter une nouvelle langue à l'application SpaceView. Suivez toutes les étapes dans l'ordre pour éviter d'oublier un élément.

**Langues actuellement supportées**: Français (FR) 🇫🇷, Anglais (EN) 🇬🇧, Allemand (DE) 🇩🇪

---

## Checklist Complète

Utilisez cette checklist pour vous assurer que rien n'est oublié:

- [ ] **Étape 1**: Créer les fichiers de traduction JSON (5 fichiers)
- [ ] **Étape 2**: Configurer i18n pour la nouvelle langue
- [ ] **Étape 3**: Ajouter le bouton de sélection de langue
- [ ] **Étape 4**: Mettre à jour le hook de détection de langue
- [ ] **Étape 5**: Mettre à jour la navigation Info
- [ ] **Étape 6**: Ajouter les routes pour la nouvelle langue
- [ ] **Étape 7**: Mettre à jour les métadonnées SEO
- [ ] **Étape 8**: Mettre à jour le sitemap.xml
- [ ] **Étape 9**: Créer les pages de landing (3 fichiers)
- [ ] **Étape 10**: Mettre à jour les wrappers de pages (3 fichiers)
- [ ] **Étape 11**: Créer les onglets info (6 fichiers)
- [ ] **Étape 12**: Mettre à jour les index des onglets (6 fichiers)
- [ ] **Étape 13**: Tester toutes les pages et URLs

---

## Étape 1: Créer les Fichiers de Traduction JSON

**Objectif**: Créer les 5 fichiers de traduction pour la nouvelle langue.

### Fichiers à créer:

Créez un nouveau dossier `src/i18n/resources/{code_langue}/` avec 5 fichiers JSON:

1. **`astro.json`** - Termes astronomiques (Soleil, Lune, unités, directions)
2. **`common.json`** - Éléments communs (navigation, temps, enregistrement, localisation)
3. **`flatEarthSimulator.json`** - Interface du simulateur de Terre Plate
4. **`info.json`** - Métadonnées et informations du site
5. **`ui.json`** - Interface utilisateur complète (contrôles, paramètres, animations, etc.)

### Structure de référence:

```
src/i18n/resources/
├── fr/          (Français - référence)
├── en/          (Anglais)
├── de/          (Allemand)
└── {nouveau}/   (Votre nouvelle langue)
    ├── astro.json
    ├── common.json
    ├── flatEarthSimulator.json
    ├── info.json
    └── ui.json
```

### ⚠️ Important:
- Copiez la structure exacte des fichiers français
- Traduisez TOUT le contenu, y compris les clés si nécessaire
- Vérifiez la syntaxe JSON (pas de guillemets courbes « » !)
- Utilisez des guillemets droits échappés: `\"texte\"`

---

## Étape 2: Configurer i18n pour la Nouvelle Langue

**Fichier**: `src/i18n/index.ts`

### Actions:

1. **Importer les ressources** de la nouvelle langue:

```typescript
// Import translation resources
import commonFr from './resources/fr/common.json';
import commonEn from './resources/en/common.json';
import commonDe from './resources/de/common.json';
import commonXX from './resources/xx/common.json'; // ← AJOUTER

import astroFr from './resources/fr/astro.json';
import astroEn from './resources/en/astro.json';
import astroDe from './resources/de/astro.json';
import astroXX from './resources/xx/astro.json'; // ← AJOUTER

// ... répéter pour ui, info, flatEarthSimulator
```

2. **Ajouter la langue à l'objet `resources`**:

```typescript
const resources = {
  fr: {
    common: commonFr,
    astro: astroFr,
    ui: uiFr,
    info: infoFr,
    flatEarthSimulator: flatEarthSimulatorFr,
  },
  en: {
    common: commonEn,
    astro: astroEn,
    ui: uiEn,
    info: infoEn,
    flatEarthSimulator: flatEarthSimulatorEn,
  },
  de: {
    common: commonDe,
    astro: astroDe,
    ui: uiDe,
    info: infoDe,
    flatEarthSimulator: flatEarthSimulatorDe,
  },
  xx: { // ← AJOUTER
    common: commonXX,
    astro: astroXX,
    ui: uiXX,
    info: infoXX,
    flatEarthSimulator: flatEarthSimulatorXX,
  },
};
```

---

## Étape 3: Ajouter le Bouton de Sélection de Langue

**Fichier**: `src/components/LanguageSwitcher.tsx`

### Actions:

1. **Mettre à jour la regex de détection**:

```typescript
// Remove existing language prefix if present
const pathWithoutLang = currentPath.replace(/^\/(fr|en|de|xx)\//, '/').replace(/^\/(fr|en|de|xx)$/, '/');
//                                                    ↑↑ AJOUTER
```

2. **Ajouter le bouton de langue**:

```tsx
<button
  onTouchEnd={(e) => {
    e.preventDefault();
    handleLanguageChange('xx'); // ← Code de langue
  }}
  onClick={() => handleLanguageChange('xx')}
  className={`${baseButtonClass} ${i18n.language === 'xx' ? activeClass : inactiveClass}`}
  title="Nom de la langue" // ← Nom dans la langue native
>
  🏴 {showLabels && 'XX'} {/* ← Drapeau et code */}
</button>
```

### Codes de langue et drapeaux:
- Français: 🇫🇷 FR
- Anglais: 🇬🇧 EN
- Allemand: 🇩🇪 DE
- Espagnol: 🇪🇸 ES
- Italien: 🇮🇹 IT
- Portugais: 🇵🇹 PT
- etc.

---

## Étape 4: Mettre à Jour le Hook de Détection de Langue

**Fichier**: `src/hooks/useLanguageFromPath.ts`

### Actions à effectuer dans ce fichier:

1. **Ajouter la langue dans la condition de validation** (ligne ~18):

```typescript
if (potentialLang === 'en' || potentialLang === 'fr' || potentialLang === 'de' || potentialLang === 'xx') {
//                                                                               ↑↑↑↑↑↑↑↑↑↑↑↑↑↑ AJOUTER
```

2. **Ajouter la langue dans `hasLanguagePrefix`** (ligne ~41):

```typescript
hasLanguagePrefix: pathname.startsWith('/en/') || pathname.startsWith('/fr/') || pathname.startsWith('/de/') || pathname.startsWith('/xx/'),
//                                                                                                             ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ AJOUTER
```

3. **Ajouter la langue dans `pathLanguage`** (ligne ~42):

```typescript
pathLanguage: pathname.startsWith('/en/') ? 'en' : pathname.startsWith('/fr/') ? 'fr' : pathname.startsWith('/de/') ? 'de' : pathname.startsWith('/xx/') ? 'xx' : null,
//                                                                                                                     ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑ AJOUTER
```

4. **Ajouter la langue dans `getPathWithoutLanguage`** (ligne ~56):

```typescript
if (pathname.startsWith('/xx/')) {
  return pathname.slice(3) || '/';
}
```

---

## Étape 5: Mettre à Jour la Navigation Info

**Fichier**: `src/components/info/InfoNav.tsx`

### Actions:

Ajouter la détection de la nouvelle langue (ligne ~25):

```typescript
if (currentLanguage === 'en') {
  infoBasePath = '/en/info';
} else if (currentLanguage === 'de') {
  infoBasePath = '/de/info';
} else if (currentLanguage === 'xx') { // ← AJOUTER
  infoBasePath = '/xx/info';
} else if (currentLanguage === 'fr') {
  infoBasePath = '/info'; // French is default, no prefix
}
```

---

## Étape 6: Ajouter les Routes pour la Nouvelle Langue

**Fichier**: `src/main.tsx`

### Actions:

1. **Route principale de l'app**:

```tsx
{/* Main app routes (with optional language prefix) */}
<Route path="/" element={<App />} />
<Route path="/en" element={<App />} />
<Route path="/fr" element={<App />} />
<Route path="/de" element={<App />} />
<Route path="/xx" element={<App />} /> {/* ← AJOUTER */}
```

2. **Routes Info** (copier le bloc complet):

```tsx
<Route path="/xx/info" element={<InfoPage />}>
  <Route index element={<SpaceViewTab />} />
  <Route path="help" element={<HelpTab />} />
  <Route path="simulations" element={<SimulationsTab />} />
  <Route path="flat-earth" element={<FlatEarthTab />} />
  <Route path="bug" element={<BugReportTab />} />
  <Route path="contact" element={<ContactTab />} />
</Route>
```

3. **Routes des pages de landing**:

```tsx
<Route path="/xx/eclipse-predictor" element={<EclipsePredictorPageWrapper />} />
<Route path="/xx/moon-phase-calculator" element={<MoonPhaseCalculatorPageWrapper />} />
<Route path="/xx/astrophotography-planner" element={<AstroPhotographyPlannerPageWrapper />} />
```

---

## Étape 7: Mettre à Jour les Métadonnées SEO

**Fichier**: `src/App.tsx`

### Actions:

Ajouter la langue dans l'array `inLanguage` (ligne ~98):

```typescript
"inLanguage": ["en", "fr", "de", "xx"], // ← AJOUTER "xx"
```

---

## Étape 8: Mettre à Jour le Sitemap XML

**Fichier**: `public/sitemap.xml`

### Actions:

Pour **CHAQUE URL** du sitemap, ajouter:

1. **Un lien alternatif** dans les balises `<xhtml:link>`:

```xml
<url>
  <loc>https://spaceview.me/</loc>
  <xhtml:link rel="alternate" hreflang="en" href="https://spaceview.me/en"/>
  <xhtml:link rel="alternate" hreflang="fr" href="https://spaceview.me/fr"/>
  <xhtml:link rel="alternate" hreflang="de" href="https://spaceview.me/de"/>
  <xhtml:link rel="alternate" hreflang="xx" href="https://spaceview.me/xx"/> <!-- AJOUTER -->
</url>
```

2. **Une nouvelle entrée URL** pour chaque page:

```xml
<!-- Votre nouvelle langue -->
<url>
  <loc>https://spaceview.me/xx</loc>
  <lastmod>2025-XX-XX</lastmod>
  <changefreq>weekly</changefreq>
  <priority>0.9</priority>
</url>
```

**Pages à ajouter** (11 URLs au total):
- `/xx` (page principale)
- `/xx/info`
- `/xx/info/help`
- `/xx/info/simulations`
- `/xx/info/flat-earth`
- `/xx/info/contact`
- `/xx/info/bug`
- `/xx/eclipse-predictor`
- `/xx/moon-phase-calculator`
- `/xx/astrophotography-planner`

---

## Étape 9: Créer les Pages de Landing

Créer **3 nouveaux fichiers** de pages de landing dans `src/pages/`:

### Fichiers à créer:

1. **`EclipsePredictorPageXX.tsx`**
   - Copier depuis `EclipsePredictorPageFr.tsx`
   - Traduire tout le contenu
   - Changer `inLanguage: "fr"` → `inLanguage: "xx"`
   - Changer script ID: `eclipse-jsonld-fr` → `eclipse-jsonld-xx`
   - Remplacer tous les `/fr/` par `/xx/`

2. **`MoonPhaseCalculatorPageXX.tsx`**
   - Copier depuis `MoonPhaseCalculatorPageFr.tsx`
   - Traduire tout le contenu
   - Changer `inLanguage: "fr"` → `inLanguage: "xx"`
   - Changer script ID: `moonphase-jsonld-fr` → `moonphase-jsonld-xx`
   - Remplacer tous les `/fr/` par `/xx/`

3. **`AstroPhotographyPlannerPageXX.tsx`**
   - Copier depuis `AstroPhotographyPlannerPageFr.tsx`
   - Traduire tout le contenu
   - Changer `inLanguage: "fr"` → `inLanguage: "xx"`
   - Changer script ID: `astrophoto-jsonld-fr` → `astrophoto-jsonld-xx`
   - Remplacer tous les `/fr/` par `/xx/`

### ⚠️ Important:
- Garder les noms de fonction cohérents (ex: `EclipsePredictorPageDe`)
- Garder tous les paramètres d'URL inchangés
- Traduire uniquement le contenu visible

---

## Étape 10: Mettre à Jour les Wrappers de Pages

Mettre à jour **3 fichiers wrapper** dans `src/pages/`:

### 1. `EclipsePredictorPageWrapper.tsx`

```typescript
import { useLocation } from 'react-router-dom';
import EclipsePredictorPage from './EclipsePredictorPage';
import EclipsePredictorPageFr from './EclipsePredictorPageFr';
import EclipsePredictorPageDe from './EclipsePredictorPageDe';
import EclipsePredictorPageXX from './EclipsePredictorPageXX'; // ← AJOUTER

export default function EclipsePredictorPageWrapper() {
  const location = useLocation();
  const isFrench = location.pathname.startsWith('/fr');
  const isGerman = location.pathname.startsWith('/de');
  const isXX = location.pathname.startsWith('/xx'); // ← AJOUTER

  if (isFrench) return <EclipsePredictorPageFr />;
  if (isGerman) return <EclipsePredictorPageDe />;
  if (isXX) return <EclipsePredictorPageXX />; // ← AJOUTER
  return <EclipsePredictorPage />;
}
```

### 2. `MoonPhaseCalculatorPageWrapper.tsx`

Même structure que ci-dessus.

### 3. `AstroPhotographyPlannerPageWrapper.tsx`

Même structure que ci-dessus.

---

## Étape 11: Créer les Onglets Info

Créer **6 fichiers** d'onglets dans `src/components/info/tabs/`:

### Fichiers à créer:

1. **`SpaceViewTab/SpaceViewTab.xx.tsx`**
2. **`HelpTab/HelpTab.xx.tsx`**
3. **`SimulationsTab/SimulationsTab.xx.tsx`**
4. **`FlatEarthTab/FlatEarthTab.xx.tsx`**
5. **`BugReportTab/BugReportTab.xx.tsx`**
6. **`ContactTab/ContactTab.xx.tsx`**

### Pour chaque fichier:
- Copier depuis le fichier `.fr.tsx` correspondant
- Traduire tout le contenu
- Remplacer tous les `/fr/` par `/xx/`
- Garder la structure React/JSX identique

---

## Étape 12: Mettre à Jour les Index des Onglets

Mettre à jour **6 fichiers** `index.tsx` dans `src/components/info/tabs/`:

### Template pour tous les index:

```typescript
import { useLanguageFromPath } from '../../../../hooks/useLanguageFromPath';
import TabFr from './Tab.fr';
import TabEn from './Tab.en';
import TabDe from './Tab.de';
import TabXX from './Tab.xx'; // ← AJOUTER

export default function Tab() {
  const { currentLanguage } = useLanguageFromPath();

  if (currentLanguage === 'en') {
    return <TabEn />;
  }

  if (currentLanguage === 'de') {
    return <TabDe />;
  }

  if (currentLanguage === 'xx') { // ← AJOUTER
    return <TabXX />;
  }

  return <TabFr />;
}
```

### Fichiers à modifier:
1. `SpaceViewTab/index.tsx`
2. `HelpTab/index.tsx`
3. `SimulationsTab/index.tsx`
4. `FlatEarthTab/index.tsx`
5. `BugReportTab/index.tsx`
6. `ContactTab/index.tsx`

---

## Étape 13: Tester l'Implémentation

### URLs à tester:

#### Pages principales:
- [ ] `http://localhost:5173/xx`
- [ ] Cliquer sur le bouton de langue 🏴 XX

#### Pages info:
- [ ] `http://localhost:5173/xx/info`
- [ ] `http://localhost:5173/xx/info/help`
- [ ] `http://localhost:5173/xx/info/simulations`
- [ ] `http://localhost:5173/xx/info/flat-earth`
- [ ] `http://localhost:5173/xx/info/bug`
- [ ] `http://localhost:5173/xx/info/contact`

#### Pages de landing:
- [ ] `http://localhost:5173/xx/eclipse-predictor`
- [ ] `http://localhost:5173/xx/moon-phase-calculator`
- [ ] `http://localhost:5173/xx/astrophotography-planner`

### Vérifications:
- [ ] Tous les textes sont dans la bonne langue
- [ ] Le bouton de langue est actif/surligné
- [ ] La navigation fonctionne correctement
- [ ] Pas d'erreurs dans la console
- [ ] Les liens internes utilisent le bon préfixe `/xx/`

---

## Résumé des Fichiers à Créer/Modifier

### Fichiers à CRÉER (17 nouveaux fichiers):

**Traductions JSON (5)**:
1. `src/i18n/resources/xx/astro.json`
2. `src/i18n/resources/xx/common.json`
3. `src/i18n/resources/xx/flatEarthSimulator.json`
4. `src/i18n/resources/xx/info.json`
5. `src/i18n/resources/xx/ui.json`

**Pages de landing (3)**:
6. `src/pages/EclipsePredictorPageXX.tsx`
7. `src/pages/MoonPhaseCalculatorPageXX.tsx`
8. `src/pages/AstroPhotographyPlannerPageXX.tsx`

**Onglets info (6)**:
9. `src/components/info/tabs/SpaceViewTab/SpaceViewTab.xx.tsx`
10. `src/components/info/tabs/HelpTab/HelpTab.xx.tsx`
11. `src/components/info/tabs/SimulationsTab/SimulationsTab.xx.tsx`
12. `src/components/info/tabs/FlatEarthTab/FlatEarthTab.xx.tsx`
13. `src/components/info/tabs/BugReportTab/BugReportTab.xx.tsx`
14. `src/components/info/tabs/ContactTab/ContactTab.xx.tsx`

### Fichiers à MODIFIER (16 fichiers):

**Configuration (4)**:
1. `src/i18n/index.ts`
2. `src/components/LanguageSwitcher.tsx`
3. `src/hooks/useLanguageFromPath.ts`
4. `src/components/info/InfoNav.tsx`

**Routing et SEO (3)**:
5. `src/main.tsx`
6. `src/App.tsx`
7. `public/sitemap.xml`

**Wrappers de pages (3)**:
8. `src/pages/EclipsePredictorPageWrapper.tsx`
9. `src/pages/MoonPhaseCalculatorPageWrapper.tsx`
10. `src/pages/AstroPhotographyPlannerPageWrapper.tsx`

**Index des onglets (6)**:
11. `src/components/info/tabs/SpaceViewTab/index.tsx`
12. `src/components/info/tabs/HelpTab/index.tsx`
13. `src/components/info/tabs/SimulationsTab/index.tsx`
14. `src/components/info/tabs/FlatEarthTab/index.tsx`
15. `src/components/info/tabs/BugReportTab/index.tsx`
16. `src/components/info/tabs/ContactTab/index.tsx`

---

## Conseils et Bonnes Pratiques

### Traduction:
- ✅ Utilisez un traducteur professionnel pour le contenu technique
- ✅ Vérifiez la terminologie astronomique spécifique
- ✅ Adaptez les exemples culturels si nécessaire
- ❌ N'utilisez PAS de guillemets courbes dans les JSON
- ❌ Ne traduisez PAS les noms de marque (SpaceView.me, etc.)

### Organisation:
- Créez tous les fichiers JSON en premier
- Testez que i18n charge bien les traductions
- Créez les pages de landing ensuite
- Finissez par les onglets info

### Débogage:
- Vérifiez la console pour les erreurs d'import
- Utilisez React DevTools pour vérifier `i18n.language`
- Testez avec le cache vidé
- Redémarrez le serveur de dev après avoir créé de nouveaux fichiers

---

## Architecture du Système Multi-Langue

### Structure générale:

```
SpaceView Multi-Language System
│
├── i18n Configuration (src/i18n/)
│   ├── index.ts (configuration centrale)
│   └── resources/
│       ├── fr/ (5 JSON files)
│       ├── en/ (5 JSON files)
│       ├── de/ (5 JSON files)
│       └── xx/ (5 JSON files) ← Nouvelle langue
│
├── Language Detection (src/hooks/)
│   └── useLanguageFromPath.ts
│
├── Language Switcher (src/components/)
│   └── LanguageSwitcher.tsx
│
├── Routing (src/)
│   └── main.tsx
│
├── Landing Pages (src/pages/)
│   ├── EclipsePredictorPage[XX].tsx
│   ├── MoonPhaseCalculatorPage[XX].tsx
│   ├── AstroPhotographyPlannerPage[XX].tsx
│   └── *PageWrapper.tsx (selectors)
│
└── Info Tabs (src/components/info/tabs/)
    ├── SpaceViewTab/
    ├── HelpTab/
    ├── SimulationsTab/
    ├── FlatEarthTab/
    ├── BugReportTab/
    └── ContactTab/
        ├── Tab.fr.tsx
        ├── Tab.en.tsx
        ├── Tab.de.tsx
        ├── Tab.xx.tsx ← Nouvelle langue
        └── index.tsx (selector)
```

### Flux de détection de langue:

```
URL (/xx/info/help)
    ↓
useLanguageFromPath Hook
    ↓
Détecte 'xx' dans le path
    ↓
i18n.changeLanguage('xx')
    ↓
Charge les ressources xx
    ↓
Les composants utilisent useTranslation()
    ↓
Affichage dans la langue xx
```

---

## Support et Maintenance

### Ajout de nouvelles traductions:
Modifiez simplement les fichiers `.xx.tsx` ou `.json` correspondants. Le système de routing s'occupe du reste.

### Correction de bugs de traduction:
1. Identifiez le fichier concerné (JSON, page ou onglet)
2. Modifiez directement le fichier de langue
3. Testez la page affectée

### Ajout de nouveau contenu:
1. Ajoutez le contenu dans **toutes** les langues
2. Ajoutez les clés de traduction dans les JSON si nécessaire
3. Testez dans chaque langue

---

## Historique des Langues Implémentées

| Langue | Code | Date | Fichiers | Notes |
|--------|------|------|----------|-------|
| Français | `fr` | Initial | 17 | Langue par défaut |
| Anglais | `en` | 2024 | 17 | Première traduction |
| Allemand | `de` | 2026-02 | 17 | Guide complet créé |

---

**Dernière mise à jour**: 17 février 2026
**Version du guide**: 2.0
**Auteur**: Claude Sonnet 4.5

---

Ce guide devrait permettre à n'importe quel développeur ou AI d'ajouter une nouvelle langue à SpaceView sans oublier aucune étape. Bonne chance ! 🚀
