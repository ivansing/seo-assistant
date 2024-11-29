
/**
 * @module ContentView
 */

/**
 * Handles DOM manipulations and UI updates for the content script.
 */
export class ContentView {
  /**
  * Sends keyword highlights data to the popup.
  * @param {Object} keywordData - The keyword analysis data.
  */
  sendHighlightKeywords(keywordData) {
    chrome.runtime.sendMessage({ action: 'displayKeywordData', data: keywordData });
  }

  /**
   * Sends SEO analysis results to the extension popup.
   * @param {Object} seoData - The SEO analysis data.
   */
  sendSeoResultsToPopup(seoData) {
    chrome.runtime.sendMessage({ action: 'displaySeoResults', data: seoData });
  }

  /**
   * Displays error messages on the page.
   * @param {string} message - The error message.
   */
  sendErrorToPopup(message) {
    chrome.runtime.sendMessage({ action: 'displayError', data: { message } });
  }
}
