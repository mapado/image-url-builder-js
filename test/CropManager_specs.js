/* globals describe, it */
import { expect } from 'chai';
import CropManager from '../src/index';

describe('CropManager tests', () => {
  it('handle basic url generation', () => {
    expect(CropManager.imageCrop('2016/5/9/toto.jpg'))
      .to.be.equal('//img1.mapado.net/2016/5/9/toto.jpg');

    expect(CropManager.imageCrop('2016/5/9/toto'))
      .to.be.equal('//img1.mapado.net/2016/5/9/toto');
      

    expect(CropManager.imageCrop('2016/5/10/toto.jpg'))
      .to.be.equal('//img.mapado.net/2016/5/10/toto.jpg');
  });

  it('handle croping width and height', () => {
    expect(CropManager.imageCrop('2016/5/9/toto.jpg', 400, 300))
      .to.be.equal('//img1.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.jpg');
    expect(CropManager.imageCrop('2016/5/9/toto', 400, 300))
      .to.be.equal('//img1.mapado.net/2016/5/9/toto_thumbs/400-300');
  });

  it('handle croping options', () => {
    expect(CropManager.imageCrop('2016/5/9/toto.jpg', 400, 300, { 'avoid-blur': 1, 'blackwhite': 1}))
      .to.be.equal('//img1.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.avoid-blur=1;blackwhite=1.jpg');
    expect(CropManager.imageCrop('2016/5/9/toto.jpg', 400, 300, { 'blackwhite': 1}))
      .to.be.equal('//img1.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.blackwhite=1.jpg');
  });
});
