# CINEMATIC — site de streaming complet

Site one-page complet construit autour du hero cinématique : vidéo de fond fixe, overlay de
flou masqué en bas, *liquid glass* sur tous les éléments interactifs, et l'animation
`blurFadeUp` rejouée à l'entrée de chaque section dans le viewport.

React 18 · Tailwind CSS · lucide-react · Inter (Google Fonts) · noir absolu

## Lancer le site

Le projet n'a **aucune étape de build** (Node.js n'est pas installé sur cette machine).
Il faut simplement un serveur statique — Babel charge les fichiers `.jsx` en XHR, ce qui ne
fonctionne pas en `file://`.

```bash
cd ~/cinematic-hero
python3 -m http.server 5173
# puis http://127.0.0.1:5173
```

## Les sections

| # | Section | Détail |
| --- | --- | --- |
| 1 | **Hero** | Plein viewport, contenu ancré en bas, cascade 0 → 900 ms (spec d'origine intacte) |
| 2 | **Stats** | Bandeau chiffré entre deux filets |
| 3 | **Trending now** | Carrousel horizontal snap, flèches fonctionnelles, posters N&B → couleur au survol |
| 4 | **Editor's Pick** | Split texte / lecteur vidéo encadré, bouton son actif |
| 5 | **Top 10** | Rangée défilante avec numéros géants en contour |
| 6 | **Genres** | Grille de 8 tuiles liquid glass |
| 7 | **Interviews** | Trois cartes éditoriales |
| 8 | **User Reviews** | Double marquee en sens opposés, pause au survol |
| 9 | **Membership** | Trois offres, la centrale en blanc plein |
| 10 | **FAQ** | Accordéon `grid-rows-[0fr→1fr]` |
| 11 | **CTA final** | Section transparente : la vidéo de fond réapparaît |
| 12 | **Footer** | Quatre colonnes + barre légale |

Le fond noir des sections 2 → 10 masque la vidéo fixe, puis se dissout en dégradé pour la
faire réapparaître sur le CTA final.

## Structure

```
index.html                  coquille : CDN, ordre de chargement des scripts
styles.css                  liquid glass, blurFadeUp, marquee, scrollbar, reduced-motion
src/data.js                 TOUT le contenu éditable (titres, films, tarifs, FAQ…)
src/ui.jsx                  Reveal, SectionHeading, PosterCard, ScrollRow, boutons, Stars
src/Navbar.jsx              navbar fixe + menu mobile
src/Hero.jsx                le hero
src/sections-browse.jsx     Stats, Trending, Top 10, Genres
src/sections-editorial.jsx  Spotlight, Interviews, Reviews
src/sections-convert.jsx    Pricing, FAQ, CTA final, Footer
```

Les fichiers partagent une seule portée globale (scripts classiques, pas de modules ES) :
`ui.jsx` déstructure les hooks React et les icônes Lucide **une seule fois** pour tout le
site. Ne pas redéclarer un même `const` de premier niveau dans deux fichiers.

## Personnalisation

| Quoi | Où |
| --- | --- |
| Vidéo de fond | `VIDEO_URL` — `src/data.js` |
| Liens de nav | `NAV_LINKS` — `src/data.js` |
| Films, genres, avis, tarifs, FAQ | listes dédiées dans `src/data.js` |
| Visuels | `poster()` / `still()` dans `src/data.js` — pointent sur picsum.photos, à remplacer par ton CDN |
| Intensité du flou bas d'écran | `backdrop-blur-xl` et le `45%` du masque dans `src/App.jsx` |

## Notes techniques

- **Vidéo** : `playsInline` est indispensable pour l'autoplay iOS. Le son du trailer
  (section Editor's Pick) ne s'active qu'après un clic — exigence des navigateurs.
- **Reveal** : `IntersectionObserver` (`useInView` dans `src/ui.jsx`), déclenché une fois,
  puis déconnecté. Le hero garde ses délais fixes en `animationDelay` inline.
- **`prefers-reduced-motion`** : animations et marquee désactivés, contenu visible.
- **Mise en production** : Tailwind Play CDN et Babel Standalone compilent dans le
  navigateur — parfait pour un prototype, à remplacer par un build Vite/Tailwind CLI si le
  site part en production (installer Node, puis convertir les globals en `import`/`export`).
