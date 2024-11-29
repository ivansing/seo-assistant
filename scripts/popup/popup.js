/**
 * @module Popup
 */
import { PopupController } from './controllers/PopupController.js';

/**
 * Initializes the PopupController once the DOM is fully loaded.
 */
document.addEventListener('DOMContentLoaded', () => {
  /**
   * @type {PopupController}
   */
  new PopupController();
});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  const popupView = new PopupView();

  if (request.action === 'displaySeoResults') {
    popupView.displaySeoResults(request.data);
  } else if (request.action === 'displayKeywordData') {
    popupView.displayKeywordResults(request.data);
  } else if (request.action === 'displayError') {
    popupView.displayError(request.data.message);
  }
});
