import { SeoController } from './controllers/SeoController.js';
import { KeywordController } from './controllers/KeywordController.js';
import { ContentView } from './views/ContentView.js';

/**
 * Content script entry point.
 */
const contentView = new ContentView();
const seoController = new SeoController(contentView);
const keywordController = new KeywordController(contentView);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Content script received message:', request);
  if (request.action === 'analyze') {
    const seoData = seoController.analyze();
    contentView.displaySeoResults(seoData);
    sendResponse(seoData);
  } else if (request.action === 'keywordAnalysis') {
    const keywords = request.keywords;
    const keywordData = keywordController.analyze(keywords);
    contentView.highlightKeywords(keywordData.keywordData);
    sendResponse(keywordData);
  }
});

