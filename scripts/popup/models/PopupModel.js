export class PopupModel {
    constructor() {
      this.seoData = null;
      this.keywordData = null;
    }
  
    setSeoData(data) {
      this.seoData = data;
    }
  
    getSeoData() {
      return this.seoData;
    }
  
    setKeywordData(data) {
      this.keywordData = data;
    }
  
    getKeywordData() {
      return this.keywordData;
    }
  }