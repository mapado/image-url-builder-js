# Mapado Image JS Url Builder

## Installation

```sh
npm install "@mapado/image-url-builder"
```

or with yarn:

```sh
yarn add "@mapado/image-url-builder"
```

## Usage

```js
import { buildUrl } from '@mapado/image-url-builder';

const fullWidthImage = buildUrl(imagePath);
const cropedImage = buildUrl(imagePath, 400, 300);
```
