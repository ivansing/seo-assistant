/**
 * @module PopupView
 */

/**
 * Handles the UI rendering for the popup.
 */
export class PopupView {
  /**
   * Creates an instance of PopupView.
   */
    constructor() {
      this.resultsDiv = document.getElementById('results');
      this.keywordResultsDiv = document.getElementById('keyword-results');
    }

    /**
     * Displays SEO analysis results in the UI.
     * @param {Object} data - The SEO analysis data.
     */
    displaySeoResults(data) {
      this.resultsDiv.innerHTML = `
        <p><strong>Word Count:</strong> ${data.wordCount}</p>
        <p><strong>Headings Structure:</strong></p>
        <ul>
          ${Object.entries(data.headings)
            .map(([tag, count]) => `<li>${tag.toUpperCase()}: ${count}</li>`)
            .join('')}
        </ul>
        <p><strong>Meta Title:</strong> ${data.metaTitle}</p>
        <p><strong>Meta Description:</strong> ${data.metaDescription}</p>
        <p><strong>Meta Keywords:</strong> ${data.metaKeywords}</p>
        <p><strong>Images:</strong></p>
        <ul>
          <li>Total Images: ${data.images.total}</li>
          <li>Images with alt text: ${data.images.withAlt}</li>
          <li>Images without alt text: ${data.images.withoutAlt}</li>
        </ul>
        <p><strong>Links:</strong></p>
        <ul>
          <li>Total Links: ${data.links.total}</li>
          <li>Internal Links: ${data.links.internal}</li>
          <li>External Links: ${data.links.external}</li>
        </ul>
      `;
    }
  
    /**
     * Displays keyword density analysis results in the UI.
     * @param {Oject} data - The keyword density analysis data. 
     */
    displayKeywordResults(data) {
      const totalWords = data.totalWords;
      const keywordData = data.keywordData;
  
      let resultsHTML = `<p><strong>Total Words:</strong> ${totalWords}</p>`;
      resultsHTML += `<p><strong>Keyword Density:</strong></p>`;
      resultsHTML += `<ul>`;
      keywordData.forEach((kw) => {
        resultsHTML += `<li>${kw.keyword}: ${kw.count} occurrences, ${kw.density.toFixed(2)}%</li>`;
      });
      resultsHTML += `</ul>`;
  
      this.keywordResultsDiv.innerHTML = resultsHTML;
    }
  
       
  /**
   * Displays an error message in the UI.
   * @param {string} message - The error message.
   */
  displayError(message) {
    this.resultsDiv.innerHTML = `<p style="color: red;">Error: ${message}</p>`;
  }
  }
  