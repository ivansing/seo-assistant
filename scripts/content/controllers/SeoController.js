import { SeoModel } from '../models/SeoModel.js';

export class SeoController {
  static analyze() {
    const model = new SeoModel();
    return model.analyzeSEO();
  }
}
