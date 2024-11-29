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
    try {
      const seoData = seoController.analyze();
      contentView.sendSeoResultsToPopup(seoData);
      sendResponse(seoData);
    } catch (error) {
      contentView.sendErrorToPopup(error.message);
      sendResponse({ error: error.message });
    }
  } else if (request.action === 'keywordAnalysis') {
    try {
      const keywords = request.keywords;
      const keywordData = keywordController.analyze(keywords);
      contentView.sendHighlightKeywords(keywordData.keywordData);
      sendResponse(keywordData);
    } catch (error) {
      contentView.sendErrorToPopup(error.message);
      sendResponse({ error: error.message });
    }
  }
});

