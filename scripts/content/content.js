import { SeoController } from './controllers/SeoController.js';
import { KeywordController } from './controllers/KeywordController.js';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Content script received message:', request);
  if (request.action === 'analyze') {
    const seoData = SeoController.analyze();
    sendResponse(seoData);
  } else if (request.action === 'keywordAnalysis') {
    const keywords = request.keywords;
    const keywordData = KeywordController.analyze(keywords);
    sendResponse(keywordData);
  }
});
