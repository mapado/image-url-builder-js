export function buildUrl(
  imageParam: null | undefined | '',
  width?: number,
  height?: number,
  options?: Record<string, unknown>
): undefined;

export function buildUrl(
  imageParam: string,
  width?: number,
  height?: number,
  options?: Record<string, unknown>
): string;

export function buildUrl(
  imageParam: null | undefined | string,
  width = 0,
  height = 0,
  options = {}
): string | undefined {
  if (!imageParam) {
    return;
  }

  let image: string = imageParam;

  if (!image.match(new RegExp('^//img([1-3])?.mapado.net/'))) {
    const host = _getHost(image);
    image = host + image;
  }

  if (width > 0) {
    let extension: string | null = _getExt(image);
    if (extension.length > 4) {
      // this is weird, as we added the host previously the extension will be something like `net/2016/5/9/toto`
      extension = null;
    }

    image += `_thumbs/${width}`;
    if (height > 0) {
      image += `-${height}`;
    }

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
function _getHost(image: string): string {
  let shard = '';
  const matches = new RegExp('^[0-9]{4}/[0-9]{1,2}/([0-9]{1,2})').exec(image);
  if (matches) {
    const firstMatch = parseInt(matches[1], 10) % 2;
    shard = firstMatch > 0 ? firstMatch.toString() : ''; // remove "0"
  }
  return `//img${shard}.mapado.net/`;
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
