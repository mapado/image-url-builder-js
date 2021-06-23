import CropManager, { imageCrop } from '.';

describe('CropManager tests', () => {
  test('handle empty url', () => {
    expect(imageCrop(null)).toBeNull();
    expect(imageCrop('')).toBeNull();
  });

  test('handle basic url generation', () => {
    expect(CropManager.imageCrop('2016/5/9/toto.jpg'))
      .toBe('//img1.mapado.net/2016/5/9/toto.jpg');

    expect(CropManager.imageCrop('2016/5/9/toto'))
      .toBe('//img1.mapado.net/2016/5/9/toto');
      

    expect(CropManager.imageCrop('2016/5/10/toto.jpg'))
      .toBe('//img.mapado.net/2016/5/10/toto.jpg');
  });

  test('handle croping width and height', () => {
    expect(CropManager.imageCrop('2016/5/9/toto.jpg', 400, 300))
      .toBe('//img1.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.jpg');
    expect(CropManager.imageCrop('2016/5/9/toto', 400, 300))
      .toBe('//img1.mapado.net/2016/5/9/toto_thumbs/400-300');
  });

  test('handle croping options', () => {
    expect(CropManager.imageCrop('2016/5/9/toto.jpg', 400, 300, { 'avoid-blur': 1, 'blackwhite': 1}))
      .toBe('//img1.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.avoid-blur=1;blackwhite=1.jpg');
    expect(CropManager.imageCrop('2016/5/9/toto.jpg', 400, 300, { 'blackwhite': 1}))
      .toBe('//img1.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.blackwhite=1.jpg');
  });
});

describe('const import', () => {
  test('const import', () => {
    expect(imageCrop('2016/5/9/toto.jpg'))
      .toBe('//img1.mapado.net/2016/5/9/toto.jpg');
  });
});
