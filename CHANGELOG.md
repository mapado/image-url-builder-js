# CHANGELOG

## 2.1.0

- Remove use of img/img1 as we are now multiplexing with http2
- Add option allowwebp to enable webp optimization even for not resized images
- Allow =0 width, with >= height to resize based on set height

## 2.0.2

export as module

## 2.0.1

Better typescript types

## 2.0.0

- [BREAKING] Change package name from `mapado-image-js-crop` to `@mapado/image-url-builder` and Change the main method name from `cropImage` to `buildUrl`

```diff
- import CropManager from 'mapado-image-js-crop';
+ import { buildUrl } from '@mapado/image-url-builder';

- const url = CropManager.cropImage(src, width, height, options);
+ const url = buildUrl(src, width, height, options);
```

- [Might break] No more safe conversion from string to number for width & height
- [Might break] if path is empty, `undefined` is returned instead of `null`
- [Might break] the build system has changed. We do not use the babel-preset-react-native as which seems totally weird as we do not want to know where this code is used.
- [Might break] Export is now an es2020 export. This is really likely to break if you do not handle modern JS exports. Tools like rollup or webpack should handle this properly.
- Migrate to Typescript
