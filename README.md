# Festival Scrapper

Library to get information of every festival in france using the governmental api

## Installation

```bash
npm npm i elyes-festival-scrapper
```

## Local development

```bash
npm install
```

```bash
npm run test
```

## Usage

When you install the library you will have access to multiple function

## Get all festival by region

Retrieve all festival in a specific region
Must not convert the name of the region, must be exactly as follow :

- Auvergne-Rhône-Alpes
- Bourgogne-Franche-Comté
- Bretagne, Centre-Val de Loire
- Corse
- Grand-Est
- Guadeloupe
- Guyane
- Hauts-de-France
- Île-de-France
- La Réunion
- Martinique
- Mayotte
- Normandie
- Nouvelle-Aquitaine
- Occitanie
- Pays de la Loire
- Provence-Alpes-Côte d'Azur

```js
import {getFestivalByRegion} from 'elyes-festival-scrapper'

const response = await getFestivalByRegion('region')
```

return an array of festival

## Get all festival by departement

Retrieve all festival in a specific departement

```js
import {getFestivalByDepartement} from 'elyes-festival-scrapper'

const response = await getFestivalByDepartement('departement')
```

return an array of festival

## Get all festival by theme

Retrieve all festival with a specific theme

Available theme :

- Musiques actuelles
- Cinéma et audiovisuelle
- Musiques classiques
- Cirque et Arts de la rue
- Pluridisciplinaire Spectacle Vivant
- Livre et littérature
- Divers Spectacle vivant
- Pluridisciplinaire Musique
- Danse
- Arts plastiques et visuels
- Théâtre
- Domaines divers

```js
import {getFestivalByTheme} from 'elyes-festival-scrapper'

const response = await getFestivalByTheme('theme')
```

return an array of festival

## Get all festival by Region and Departement

Retrieve all festival in a region and in the specific departement

```js
import {getFestivalByRegionAndDepartement} from 'elyes-festival-scrapper'

const response = await getFestivalByRegionAndDepartement('region','departement')
```

return an array of festival

## Get all festival by Id

Retrieve a specific festival by id

```js
import {getFestivalById} from 'elyes-festival-scrapper'

const response = await getFestivalById('id')
```

return a festival
