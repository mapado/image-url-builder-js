import UrlBuilder, { buildUrl } from '.';

describe('UrlBuilder tests', () => {
  test('handle empty url', () => {
    expect(buildUrl(null)).toBeUndefined();
    expect(buildUrl('')).toBeUndefined();
  });

  test('handle basic url generation', () => {
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg')).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg'
    );

    expect(UrlBuilder.buildUrl('2016/5/9/toto')).toBe(
      '//img.mapado.net/2016/5/9/toto'
    );

    expect(UrlBuilder.buildUrl('2016/5/10/toto.jpg')).toBe(
      '//img.mapado.net/2016/5/10/toto.jpg'
    );
  });

  test('handle croping width and height', () => {
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', 400, 300)).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', 0, 300)).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/0-300.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', 400, 0)).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/400-0.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', 400)).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/400-0.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto', 400, 300)).toBe(
      '//img.mapado.net/2016/5/9/toto_thumbs/400-300'
    );
  });

  test('handle croping options', () => {
    expect(
      UrlBuilder.buildUrl('2016/5/9/toto.jpg', 400, 300, {
        'avoid-blur': 1,
        blackwhite: 1,
      })
    ).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.avoid-blur=1;blackwhite=1.jpg'
    );
    expect(
      UrlBuilder.buildUrl('2016/5/9/toto.jpg', 400, 300, { blackwhite: 1 })
    ).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/400-300.blackwhite=1.jpg'
    );
  });

  test('allowwepb option', () => {
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg')).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', null, null)).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', 0, 0)).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/0-0.jpg'
    );
    expect(UrlBuilder.buildUrl('2016/5/9/toto.jpg', null, null, { allowwebp: true })).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg_thumbs/0-0.jpg'
    );
  });
});

describe('const import', () => {
  test('const import', () => {
    expect(buildUrl('2016/5/9/toto.jpg')).toBe(
      '//img.mapado.net/2016/5/9/toto.jpg'
    );
  });
});
