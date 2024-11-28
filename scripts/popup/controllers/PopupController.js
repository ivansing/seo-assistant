
/**
 * @module PopupController
 */

import { PopupModel } from '../models/PopupModel.js';
import { PopupView } from '../views/PopupView.js';

/**
 * Controls the interaction between the popup's model and view.
 */
export class PopupController {
  /**
   * Creates an instance of PopupController.
   */
  constructor() {
    this.model = new PopupModel();
    this.view = new PopupView();

    this.init();
  }

  /**
   * Initializes event Listeners for the popup.
   */
  init() {
    document.getElementById('analyze-button').addEventListener('click', () => this.analyzePage());
    document
      .getElementById('keyword-analyze-button')
      .addEventListener('click', () => this.analyzeKeywords());
  }

  /**
   * Analyses the current webpage for SEO metrics.
   */
  analyzePage() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;

      chrome.scripting.executeScript(
        {
          target: { tabId: activeTabId },
          files: ['dist/content.bundle.js'],
        },
        () => {
          if (chrome.runtime.lastError) {
            this.view.displayError(chrome.runtime.lastError.message);
            return;
          }

          chrome.tabs.sendMessage(activeTabId, { action: 'analyze' }, (response) => {
            if (chrome.runtime.lastError) {
              this.view.displayError(chrome.runtime.lastError.message);
              return;
            }
            if (response) {
              this.model.setSeoData(response);
              this.view.displaySeoResults(response);
            } else {
              this.view.displayError('No response from content script.');
            }
          });
        }
      );
    });
  }

  /**
   * Analyzes the density of specified keywords on the current webpage.
   */
  analyzeKeywords() {
    const keywordsInput = document.getElementById('keywords-input').value;
    if (!keywordsInput) {
      this.view.displayError('Please enter keywords to analyze.', true);
      return;
    }

    const keywords = keywordsInput.split(',').map((kw) => kw.trim()).filter((kw) => kw.length > 0);

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const activeTabId = tabs[0].id;

      chrome.scripting.executeScript(
        {
          target: { tabId: activeTabId },
          files: ['scripts/content/content.js'],
        },
        () => {
          if (chrome.runtime.lastError) {
            this.view.displayError(chrome.runtime.lastError.message, true);
            return;
          }

          chrome.tabs.sendMessage(
            activeTabId,
            { action: 'keywordAnalysis', keywords: keywords },
            (response) => {
              if (chrome.runtime.lastError) {
                this.view.displayError(chrome.runtime.lastError.message, true);
                return;
              }
              if (response) {
                this.model.setKeywordData(response);
                this.view.displayKeywordResults(response);
              } else {
                this.view.displayError('No response from content script.', true);
              }
            }
          );
        }
      );
    });
  }
}
