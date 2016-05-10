class CropManager {
  imageCrop(imageParam, width = 0, height = 0) {
    let image = imageParam;

    if (!image) {
      return null;
    }

    if (!image.match(new RegExp('^//img([1-3])?.mapado.net/'))) {
      const host = this._getHost(image);
      image = host + image;
    }

    if (width > 0) {
      let extension = this._getExt(image);
      if (extension.length > 4) {
        extension = null;
      }

      image += `_thumbs/${parseInt(width, 10)}`;
      if (height > 0) {
        image += `-${parseInt(height, 10)}`;
      }

      if (extension) {
        image += `.${extension}`;
      }
    }

    return image;
  }

  _getHost(image) {
    let shard = '';
    const matches = (new RegExp('^[0-9]{4}/[0-9]{1,2}/([0-9]{1,2})')).exec(image);
    if (matches) {
      shard = parseInt(matches[1] % 2, 10);
      shard = shard > 0 ? shard : ''; // remove "0"
    }
    return `//img${shard}.mapado.net/`;
  }

  _getExt(path) {
    const str = path;
    const dotP = str.lastIndexOf('.') + 1;

    if (dotP && dotP !== str.length) {
      return str.substr(dotP);
    }

    return '';
  }
}

export default new CropManager();
