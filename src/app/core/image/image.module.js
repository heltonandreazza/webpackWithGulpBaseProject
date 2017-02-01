import ImageService from './image.service';

export default angular
  .module('app.core.image', [])
  .service('imageService', ImageService)
  .name;