/**
 * @param imageParam {null|string}
 * @param width {number}
 * @param height {number}
 * @param options {object}
 * @returns {string|null}
 */
export function imageCrop(imageParam, width = 0, height = 0, options = {}) {
  let image = imageParam;

  if (!image) {
    return null;
  }

  if (!image.match(new RegExp('^//img([1-3])?.mapado.net/'))) {
    const host = _getHost(image);
    image = host + image;
  }

  if (width > 0) {
    let extension = _getExt(image);
    if (extension.length > 4) {
      // this is weird, as we added the host previously the extension will be something like `net/2016/5/9/toto`
      extension = null;
    }

    image += `_thumbs/${parseInt(width, 10)}`;
    if (height > 0) {
      image += `-${parseInt(height, 10)}`;
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
 * @param image {string}
 * @returns {string}
 * @private
 */
function _getHost(image) {
  let shard = '';
  const matches = (new RegExp('^[0-9]{4}/[0-9]{1,2}/([0-9]{1,2})')).exec(image);
  if (matches) {
    shard = parseInt(matches[1] % 2, 10);
    shard = shard > 0 ? shard : ''; // remove "0"
  }
  return `//img${shard}.mapado.net/`;
}

/**
 * @param path {string}
 * @returns {string}
 * @private
 */
function _getExt(path) {
  const str = path;
  const dotP = str.lastIndexOf('.') + 1;

  if (dotP && dotP !== str.length) {
    return str.substr(dotP);
  }

  return '';
}


export default {
  imageCrop,
};
