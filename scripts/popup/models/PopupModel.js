/**
 * @module PopupModel
 */

/**
 * Represents the data model for the group
 */

export class PopupModel {
  /**
   * Creates an instance of PopupModel.
   */
    constructor() {
      this.seoData = null;
      this.keywordData = null;
    }

    /**
     * 
     * @param {Object} data - The SEO data.
     */
  
    setSeoData(data) {
      this.seoData = data;
    }

    /**
     * 
     * @returns {Object} The SEO data.
     */
  
    getSeoData() {
      return this.seoData;
    }

    /**
     * 
     * @param {Object} data - The keyword data. 
     */
  
    setKeywordData(data) {
      this.keywordData = data;
    }

    /**
     * 
     * @returns {Object} The keyword data.
     */
  
    getKeywordData() {
      return this.keywordData;
    }
  }