# Esecsec Website

En moderne og responsiv hjemmeside for Esecsec, udviklet med React og Tailwind CSS.

## Live Website

Websitet er tilgængeligt på: https://esecsec.netlify.app

## Features

- Responsivt design der tilpasser sig både desktop og mobile enheder
- Moderne og minimalistisk design
- Brugervenlig navigation med sidebar
- Konsistent farvetema gennem hele sitet
- SEO-optimeret struktur
- Hurtig loading-tid

## Sidestruktur

- **Forside**
  - Header med Esecsec logo og firmanavn
  - Hero section med fængende slogan
  - Mission og vision statement
  - Call-to-action knapper
  - Introduktion til kerneydelser

- **Om os**
  - Præsentation af teamet
  - 4 medarbejderprofiler
  - Team-værdier og kultur

- **Produkter**
  - Oversigt over produktpakker
  - Detaljeret beskrivelse af hver pakke
  - Priser og features
  - Sammenligningstabel

## Teknisk Stack

- React
- Vite
- Tailwind CSS
- React Router
- React Icons

## Installation

1. Klon projektet
```bash
git clone [repository-url]
```

2. Installer dependencies
```bash
npm install
```

3. Start udviklings-server
```bash
npm run dev
```

4. Byg til produktion
```bash
npm run build
```

## Deployment

Websitet er deployed på Netlify med automatisk deployment. Hver gang der pushes til main branch, vil følgende ske:

1. Netlify detekterer ændringer i repository
2. Projektet bygges automatisk
3. Den nye version deployes til produktionsmiljøet

For at deploye manuelt:

1. Installer Netlify CLI:
```bash
npm install -g netlify-cli
```

2. Byg projektet:
```bash
npm run build
```

3. Deploy til Netlify:
```bash
netlify deploy --prod --dir=dist
```

## Design Elementer

- Clean og moderne typografi
- Konsistent farvepalette med primary (#2563eb) og secondary (#475569) farver
- Whitespace for bedre læsbarhed
- Professionelle ikoner fra React Icons
- Smooth transitions og animationer

## Vedligeholdelse

Siden er bygget med komponenter der er nemme at vedligeholde og opdatere. Indhold kan nemt ændres i de respektive komponentfiler:

- `/src/pages/` - Hovedsider
- `/src/components/` - Genbrugelige komponenter
- `/public/` - Statiske assets som logo og billeder
