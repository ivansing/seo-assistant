// scripts/content/controllers/KeywordController.js

import { KeywordModel } from '../models/KeywordModel.js';

/**
 * @module KeywordController
 */

/**
 * Controls keyword density analysis and interacts with the ContentView.
 */
export class KeywordController {
  /**
   * Creates an instance of KeywordController.
   * @param {ContentView} view - The view instance to interact with.
   */
  constructor(view) {
    this.model = new KeywordModel();
    this.view = view;
  }

  /**
   * Analyzes the density of specified keywords on the webpage.
   * @param {string[]} keywords - An array of keywords to analyze.
   * @returns {Object} The keyword density analysis data.
   */
  analyze(keywords) {
    const keywordData = this.model.analyzeKeywords(keywords);
    // Additional logic if needed
    return keywordData;
  }
}

