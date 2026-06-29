# Now Podcast — Site Web

## Contexte

Le Now Podcast (ETIC INSA Technologies) a besoin d'un site vitrine pour répertorier tous ses épisodes. L'objectif principal est de pouvoir envoyer le lien à de futurs invités pour qu'ils découvrent le podcast et ses épisodes passés. Le site doit respecter la charte graphique existante (dégradé lavande/violet, typographie bold massive).

---

## Palette de couleurs

| Rôle | Valeur |
|---|---|
| Gradient hero (début) | `#C4A8E8` |
| Gradient hero (milieu) | `#9B7DC8` |
| Gradient hero (fin) | `#7B5EAF` |
| Fond page | `#F5EEFF` |
| Cartes | `#FFFFFF` |
| Bordures cartes | `#E8D8FF` |
| Texte principal | `#3D3545` |
| Texte secondaire | `#9B7DC8` |
| Texte tertiaire | `#C4A8E8` |

---

## Architecture

**Stack :** Next.js 15 (App Router) + TypeScript, déployé sur Vercel.

**Source de données :** Flux RSS RedCircle. Pas de base de données — le RSS est la source de vérité. Les épisodes sont fetchés côté serveur avec revalidation ISR (toutes les heures), ce qui signifie que chaque nouvel épisode publié sur RedCircle apparaît automatiquement sur le site sans aucune intervention manuelle.

```
now-site/
├── app/
│   ├── page.tsx          # Homepage — liste des épisodes
│   ├── about/page.tsx    # Page À propos
│   └── layout.tsx        # Layout global (nav, fonts)
├── lib/
│   └── rss.ts            # Fetch + parse du flux RSS RedCircle
└── components/
    ├── EpisodeCard.tsx
    └── Nav.tsx
```

---

## Pages

### Homepage (`/`)

**Hero block** (nav + hero fusionnés en un seul bloc) :
- Nav transparente avec logo "NOW" à gauche, liens "Épisodes / À propos / Écouter" à droite (blancs)
- Grand titre "NOW" (130px, bold 900, blanc)
- Sous-titre en petites capitales
- Deux boutons badges : "Spotify" et "Apple Podcasts" → liens externes vers les plateformes

**Section épisodes** :
- Label "TOUS LES ÉPISODES" + compteur
- Grille 2 colonnes de cartes blanches
- Chaque carte : numéro d'épisode, titre, nom de l'invité, durée, bouton play (→ redirige vers Spotify)
- Hover : légère élévation + ombre violette

### Page À propos (`/about`)

- Présentation du podcast (texte)
- Présentation des hosts (photos + bio courte)
- Liens vers les plateformes d'écoute
- *(Contenu à fournir par l'utilisateur)*

---

## Données RSS

Chaque épisode extrait du RSS expose :
- `title` — titre de l'épisode
- `pubDate` — date de publication (pour calculer le numéro d'épisode)
- `duration` — durée (balise `<itunes:duration>`)
- `description` — description courte
- `link` — URL Spotify/RedCircle pour l'écoute
- `enclosure.url` — URL du fichier audio (non utilisé, on redirige vers Spotify)

---

## Comportement des épisodes

Clic sur une carte d'épisode → ouverture dans un nouvel onglet vers Spotify ou Apple Podcasts. Pas de player embarqué sur le site.

---

## Déploiement

- Vercel (détection automatique Next.js)
- Variable d'environnement : `REDCIRCLE_RSS_URL=https://feeds.redcircle.com/7500a6f1-a9b5-4f12-9965-fec550152177`
- ISR : `revalidate = 3600` (1 heure) — les nouveaux épisodes apparaissent automatiquement

---

## Vérification

1. `npm run dev` → vérifier la homepage avec les épisodes réels depuis le RSS
2. Vérifier le hover sur les cartes et les liens vers Spotify
3. Vérifier la page `/about`
4. `npm run build` → s'assurer qu'il n'y a pas d'erreur TypeScript
5. Déployer sur Vercel et vérifier que l'ISR fonctionne (publier un épisode test sur RedCircle, attendre ~1h)
