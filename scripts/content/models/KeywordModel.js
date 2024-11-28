import { escapeRegExp } from '../../utils/regexUtils.js';

export class KeywordModel {
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
