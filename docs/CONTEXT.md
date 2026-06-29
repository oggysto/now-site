# NOW Podcast — Contexte projet

## C'est quoi

Site vitrine pour le podcast **NOW** (animé par Oggy et Thomas, étudiants à l'INSA Lyon).  
Objectif : envoyer le lien à des futurs invités pour qu'ils découvrent les épisodes passés.  
URL de prod : **now-site-three.vercel.app**

---

## Stack

- **Next.js 16** (App Router, TypeScript, Turbopack)
- **Tailwind CSS v4**
- **Vercel** (déploiement, ISR)
- **RSS RedCircle** comme source de données (pas de base de données)

---

## Palette de couleurs

| Usage | Valeur |
|---|---|
| Hero gradient | `#C4A8E8` → `#9B7DC8` → `#7B5EAF` |
| Fond sections claires | `#F5EEFF` |
| Cartes | `#FFFFFF`, bordure `#E8D8FF` |
| Texte principal | `#3D3545` |
| Accent violet | `#9B7DC8` |
| Footer bg | `#2A2233` → `#1C1525` |

---

## Données RSS

- **Feed URL** : `https://feeds.redcircle.com/7500a6f1-a9b5-4f12-9965-fec550152177`
- Stockée dans la variable d'env `REDCIRCLE_RSS_URL` (à définir dans Vercel)
- Revalidation ISR toutes les **1 heure** (`next: { revalidate: 3600 }`)
- Parsing dans `lib/rss.ts` avec `fast-xml-parser`
- Type `Episode` : `{ guid, title, guest, episodeNumber, duration, link, pubDate, image }`

---

## Structure des fichiers clés

```
app/
  page.tsx          — Homepage (4 sections : Hero, Épisodes, Dernier épisode, Footer)
  about/page.tsx    — Page À propos (description podcast + hosts + LinkedIn)
  layout.tsx        — Layout global (font Inter, métadonnées)

components/
  Nav.tsx           — Navigation transparente (logo NOW + liens)
  EpisodeCarousel.tsx — Carousel circulaire avec cartes absolument positionnées
  EpisodeCard.tsx   — Carte épisode individuelle (non utilisée dans le carousel)
  PlatformBadges.tsx — Badges Spotify / Apple Podcasts / YouTube
  Footer.tsx        — Footer compact (NOW + icônes plateformes + copyright)

lib/
  rss.ts            — Fetch + parse du flux RSS RedCircle

public/
  oggy.jpg          — Photo de profil Oggy
  thomas.jpg        — Photo de profil Thomas
```

---

## Structure de la homepage (scroll)

1. **Hero** (~65vh) — Fond violet gradient, watermark "NOW", badges plateformes
2. **Tous les épisodes** — Fond `#F5EEFF`, carousel circulaire
3. **Dernier épisode** — Fond blanc, photo à gauche + texte à droite
4. **Footer** — Fond sombre, logo + icônes + copyright

La progression des couleurs est intentionnelle : **violet → lavande → blanc → sombre**. Ne pas casser cette cohérence en ajoutant des sections avec des couleurs trop différentes.

---

## Carousel (EpisodeCarousel.tsx)

Rewrite complet pour éviter le bug "flash d'image" :
- Chaque carte est **absolument positionnée** et a `key={ep.guid}` → React réutilise le même DOM
- `circularDist()` calcule le chemin le plus court pour l'animation (gère le wrap-around)
- Pas de track, pas de `flushSync`, pas de reset DOM
- 3 cartes visibles (centre + 2 côtés), les autres ont `opacity: 0`

---

## Page About

- **Hosts** : Oggy (`/oggy.jpg`, LinkedIn: linkedin.com/in/oggysto/) et Thomas (`/thomas.jpg`, LinkedIn: linkedin.com/in/thomasdl/)
- Icône LinkedIn : `FaLinkedin` de `react-icons/fa` (pas `SiLinkedin` — n'existe pas dans cette version)

---

## Plateformes

| Plateforme | URL |
|---|---|
| Spotify | https://open.spotify.com/show/nowpodcast |
| Apple Podcasts | https://podcasts.apple.com/fr/podcast/now |
| YouTube | https://youtube.com/@nowpodcast *(URL à confirmer)* |

---

## Déploiement Vercel

- Repo GitHub : `oggysto/now-site`
- Branche `main` → déploiement automatique à chaque push
- Variable d'env requise : `REDCIRCLE_RSS_URL`
- Config images Next.js : remote pattern `media.redcircle.com` (dans `next.config.ts`)

---

## Ce qui reste à faire

- [ ] Confirmer l'URL YouTube réelle du podcast
- [ ] Ajouter un domaine custom si souhaité (~10–15€/an)
