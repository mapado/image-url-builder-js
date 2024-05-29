export function buildUrl(
  imageParam: null | undefined | '',
  width?: number | null,
  height?: number | null,
  options?: Record<string, unknown>
): undefined;

export function buildUrl(
  imageParam: string,
  width?: number | null,
  height?: number | null,
  options?: Record<string, unknown>
): string;

export function buildUrl(
  imageParam: null | undefined | string,
  width: number | null = null,
  height: number | null = null,
  options = {}
): string | undefined {
  if (!imageParam) {
    return;
  }

  let image: string = imageParam;

  if (!image.match(new RegExp('^//img([1-3])?.mapado.net/'))) {
    const host = '//img.mapado.net/';
    image = host + image;
  }

  if (null !== width || null !== height) {
    let extension: string | null = _getExt(image);
    if (extension.length > 4) {
      // this is weird, as we added the host previously the extension will be something like `net/2016/5/9/toto`
      extension = null;
    }

    image += `_thumbs/${width ?? 0}-${height ?? 0}`;

    if (options) {
      image += '.';

      Object.entries(options).map((option) => {
        image += `${option[0]}=${option[1]};`;
      });

      image = image.substring(0, image.length - 1);
    }

    if (extension) {
      image += `.${extension}`;
    }
  }

  return image;
}

/**
 * @private
 */
function _getExt(path: string): string {
  const str = path;
  const dotP = str.lastIndexOf('.') + 1;

  if (dotP && dotP !== str.length) {
    return str.substr(dotP);
  }

  return '';
}

export default {
  buildUrl,
};
