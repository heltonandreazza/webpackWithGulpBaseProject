class ImageService {
  /*@ngInject*/
  constructor(toastr, $cacheFactory, $templateCache) {
    this.$templateCache = $templateCache;
    // this.cache = $cacheFactory;
    this.banks = ['001', '007', '033', '104', '237', '341', '422', '748', '756', 'erp'];
    this.defaultUrl = 'padrao';
  }

  /**
   * Checkes whether there is an image for the bank id. If none image
   * is available, the default image will be returned.
   * @param {Number} id - The bank id.
   * @returns {String} The <img> html element with image source.
   */
  getBankImage(id, height = 22, width = 22) {
    const exists = this.banks.some(item => item === id);
    if (exists) {
      return `<img src=${this.getContentImg(id, '.png')} height="${height}" width="${width}">`;
    }
    return `<img src=${this.getContentImg(this.defaultUrl, '.png')} height="${height}" width="${width}">`;
  }

  getContentImg(key, ext) {
    return this.$templateCache.get(key + ext).replace("module.exports = ", "").replace(/['"]+/g, '');
  }
}

export default ImageService;