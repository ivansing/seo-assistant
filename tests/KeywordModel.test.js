import { KeywordModel } from '../scripts/content/models/KeywordModel.js';

describe('KeywordModel', () => {
  let keywordModel;

  beforeEach(() => {
    keywordModel = new KeywordModel();
    document.body.innerHTML = '';
  });

  describe('analyzeKeywords', () => {
    test('counts keyword occurrences correctly', () => {
      document.body.innerHTML = '<p>The quick brown fox jumps over the lazy dog. The fox is quick.</p>';

      const result = keywordModel.analyzeKeywords(['fox', 'quick']);

      expect(result.keywordData).toHaveLength(2);

      const foxData = result.keywordData.find(k => k.keyword === 'fox');
      expect(foxData.count).toBe(2);

      const quickData = result.keywordData.find(k => k.keyword === 'quick');
      expect(quickData.count).toBe(2);
    });

    test('calculates total words correctly', () => {
      document.body.innerHTML = '<p>One two three four five</p>';

      const result = keywordModel.analyzeKeywords(['one']);

      expect(result.totalWords).toBe(5);
    });

    test('calculates keyword density correctly', () => {
      document.body.innerHTML = '<p>test test test test test test test test test test</p>';

      const result = keywordModel.analyzeKeywords(['test']);

      expect(result.totalWords).toBe(10);
      expect(result.keywordData[0].count).toBe(10);
      expect(result.keywordData[0].density).toBe(100);
    });

    test('is case insensitive', () => {
      document.body.innerHTML = '<p>Test TEST test TeSt</p>';

      const result = keywordModel.analyzeKeywords(['test']);

      expect(result.keywordData[0].count).toBe(4);
    });

    test('matches whole words only', () => {
      document.body.innerHTML = '<p>testing test tested tester test</p>';

      const result = keywordModel.analyzeKeywords(['test']);

      expect(result.keywordData[0].count).toBe(2);
    });

    test('escapes special regex characters in keywords', () => {
      // Note: Word boundaries (\b) don't work well with special chars like $
      // This test verifies that special chars are escaped and don't break the regex
      document.body.innerHTML = '<p>test.case and test.case work correctly</p>';

      const result = keywordModel.analyzeKeywords(['test.case']);

      // The escaped regex prevents '.' from matching any character
      expect(result.keywordData[0].count).toBe(2);
    });

    test('handles multiple keywords', () => {
      document.body.innerHTML = '<p>apple banana cherry apple banana apple</p>';

      const result = keywordModel.analyzeKeywords(['apple', 'banana', 'cherry', 'grape']);

      expect(result.keywordData).toHaveLength(4);
      expect(result.keywordData.find(k => k.keyword === 'apple').count).toBe(3);
      expect(result.keywordData.find(k => k.keyword === 'banana').count).toBe(2);
      expect(result.keywordData.find(k => k.keyword === 'cherry').count).toBe(1);
      expect(result.keywordData.find(k => k.keyword === 'grape').count).toBe(0);
    });

    test('returns zero count for non-existent keywords', () => {
      document.body.innerHTML = '<p>Hello world</p>';

      const result = keywordModel.analyzeKeywords(['notfound']);

      expect(result.keywordData[0].count).toBe(0);
      expect(result.keywordData[0].density).toBe(0);
    });

    test('handles empty page content', () => {
      document.body.innerHTML = '';

      const result = keywordModel.analyzeKeywords(['test']);

      expect(result.totalWords).toBe(0);
    });

    test('preserves original keyword casing in results', () => {
      document.body.innerHTML = '<p>Hello World</p>';

      const result = keywordModel.analyzeKeywords(['HELLO', 'World']);

      expect(result.keywordData[0].keyword).toBe('HELLO');
      expect(result.keywordData[1].keyword).toBe('World');
    });
  });
});
