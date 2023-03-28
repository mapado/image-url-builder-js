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

const imagePath = '2018/01/foo.jpg';
const fullWidthImage = buildUrl(imagePath);

// will output something like '//img.mapado.net/2018/01/foo.jpg'
```

You can also specify a `width` and a `height` to crop the image:

```js
const width = 400;
const height = 300;
const cropedImage = buildUrl(imagePath, width, height);

// will output something like '//img.mapado.net/2018/01/foo_thumbs/400-300.jpg'
```
