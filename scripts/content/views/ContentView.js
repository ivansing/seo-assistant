
/**
 * @module ContentView
 */

/**
 * Handles DOM manipulations and UI updates for the content script.
 */
export class ContentView {
    /**
     * Highlights keywords on the page.
     * @param {Object} keywordData - The keyword analysis data.
     */
    highlightKeywords(keywordData) {
      // Implementation for highlighting keywords
      keywordData.forEach(kw => {
        const regex = new RegExp(`\\b${kw.keyword}\\b`, 'gi');
        document.body.innerHTML = document.body.innerHTML.replace(regex, `<mark>${kw.keyword}</mark>`);
      });
    }
  
    /**
     * Displays SEO analysis results on the page.
     * @param {Object} seoData - The SEO analysis data.
     */
    displaySeoResults(seoData) {
      // Implementation for displaying SEO results
      const resultsDiv = document.createElement('div');
      resultsDiv.id = 'seo-results';
      resultsDiv.innerHTML = `
        <h2>SEO Analysis Results</h2>
        <p><strong>Word Count:</strong> ${seoData.wordCount}</p>
        <!-- Add more SEO data as needed -->
      `;
      document.body.prepend(resultsDiv);
    }
  
    /**
     * Displays error messages on the page.
     * @param {string} message - The error message.
     */
    displayError(message) {
      const errorDiv = document.createElement('div');
      errorDiv.id = 'seo-error';
      errorDiv.style.color = 'red';
      errorDiv.innerText = `Error: ${message}`;
      document.body.prepend(errorDiv);
    }
  }
  