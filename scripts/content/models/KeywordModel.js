/**
 * @module KeywordModel
 */

import { escapeRegExp } from '../../utils/regexUtils.js';

/**
 * Represents the keyword model for the group
 */
export class KeywordModel {
  /**
   * 
   * @param {string[]} keywords - An array of keywords to analyze. 
   * @returns {Object} An object containing total words and keyword data.
   */
  analyzeKeywords(keywords) {
    const pageText = document.body.innerText.toLowerCase();
    const totalWords = pageText.split(/\s+/).filter((word) => word.length > 0).length;

    const keywordData = [];

    keywords.forEach((keyword) => {
      const lowerKeyword = keyword.toLowerCase();
      const regex = new RegExp(`\\b${escapeRegExp(lowerKeyword)}\\b`, 'g');
      const matches = pageText.match(regex);
      const count = matches ? matches.length : 0;
      const density = (count / totalWords) * 100;

      keywordData.push({
        keyword: keyword,
        count: count,
        density: density,
      });
    });

    return {
      totalWords: totalWords,
      keywordData: keywordData,
    };
  }
}
