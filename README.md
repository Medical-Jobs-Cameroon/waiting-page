# MedJobs237 - Page d'Attente

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-success)](https://www.medjobs237.com)
[![Launch Date](https://img.shields.io/badge/Launch%20Date-September%202025-blue)](#)
[![Status](https://img.shields.io/badge/Status-Coming%20Soon-yellow)](#)

## À Propos
Ceci est la page d'attente officielle de MedJobs237, la première plateforme d'emplois dédiée au secteur médical au Cameroun. Ce site présente un compte à rebours jusqu'à notre lancement officiel, les objectifs principaux de notre plateforme, et permet aux visiteurs de s'inscrire pour être notifiés lors du lancement.

## Fonctionnalités
- Design moderne en mode sombre avec des accents bleus
- Affichage adaptatif optimisé pour tous les appareils (desktop, tablette, mobile)
- Animations et transitions fluides
- Compte à rebours jusqu'à la date de lancement (6 septembre 2025)
- Formulaire d'inscription à la newsletter
- Section "Nos Objectifs" présentant la mission de la plateforme
- Performance optimisée et temps de chargement rapide

## Déploiement sur GitHub Pages

### 1. Prérequis pour le Déploiement

Avant de déployer le site, assurez-vous que :

1. Tous les fichiers de police sont correctement extraits des archives dans le répertoire `/Police` vers le répertoire `/fonts` :
   - Polices Roboto (regular, 700)
   - Polices Montserrat (regular, 600, 700)
   - Polices Heebo (regular, 500)

2. Les images du logo et les favicon sont disponibles dans le répertoire `/Logo`.

### 2. Configuration pour GitHub Pages

1. Dans les paramètres du repository GitHub, activez GitHub Pages en sélectionnant la branche principale (main ou master).
2. Configurez votre domaine personnalisé (medjobs237.com) dans les paramètres GitHub Pages.
3. Si vous utilisez un domaine personnalisé, créez un fichier `CNAME` à la racine du projet contenant : `www.medjobs237.com`

### 3. Personnalisation

#### Date de Lancement
La date de lancement est fixée au 6 septembre 2025. Pour modifier cette date :
1. Ouvrez le fichier `/js/countdown.js`
2. Modifiez la date dans la fonction `getTargetDate()`

#### Informations de Contact
Modifiez les informations de contact dans le pied de page du fichier `index.html` :
```html
<div class="contact-info">
    <p><a href="mailto:info@medjobs237.com">info@medjobs237.com</a></p>
    <p><a href="tel:+237699655096">+237 699655096</a></p>
    <p><a href="https://medjobs237.com">medjobs237.com</a></p>
</div>
```

#### Palette de Couleurs
Le schéma de couleurs peut être personnalisé en modifiant les variables CSS dans la section `:root` du fichier `/css/style.css` :
```css
:root {
    --primary-color: #4da6ff;
    --secondary-color: #007bff;
    --accent-color: #0056b3;
    /* autres variables */
}
```

## Structure des Fichiers

```
/
├── index.html                     # Fichier HTML principal
├── css/
│   ├── style.css                  # Feuille de style principale
│   └── fonts.css                  # Déclarations des polices
├── js/
│   ├── countdown.js               # Fonctionnalité de compte à rebours
│   └── main.js                    # Script JavaScript principal
├── fonts/                         # Fichiers de police extraits
├── Police/                        # Archives originales des polices
├── Logo/                          # Fichiers logo et favicon
│   ├── logo.svg                   # Logo principal (SVG)
│   ├── favicon.ico                # Favicon (ICO)
│   ├── favicon.svg                # Favicon (SVG)
│   ├── apple-touch-icon.png       # Icône pour appareils Apple
│   └── ...                        # Autres variations de logo
└── CNAME                          # Configuration du domaine personnalisé
```

## Compatibilité Navigateurs
Cette page d'attente est compatible avec :
- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Opera (dernière version)
- Navigateurs mobiles (iOS Safari, Android Chrome)

## Fonctionnalités Techniques
- Stockage local pour la persistance du compte à rebours
- Optimisation SEO avec balises meta appropriées
- Design responsive avec Media Queries
- Animations CSS pour une expérience utilisateur améliorée
- Formulaire d'inscription avec validation

## Crédits
- Polices: Roboto, Montserrat, et Heebo (Google Fonts)
- Icônes et logo du répertoire Logo
- Développé pour MedJobs237 (https://www.medjobs237.com)
