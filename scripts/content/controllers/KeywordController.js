import { KeywordModel } from '../models/KeywordModel.js';

export class KeywordController {
  static analyze(keywords) {
    const model = new KeywordModel();
    return model.analyzeKeywords(keywords);
  }
}
