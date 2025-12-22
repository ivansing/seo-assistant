import { SeoModel } from '../scripts/content/models/SeoModel.js';

describe('SeoModel', () => {
  let seoModel;

  beforeEach(() => {
    seoModel = new SeoModel();
    // Reset document for each test
    document.head.innerHTML = '';
    document.body.innerHTML = '';
  });

  describe('analyzeSEO', () => {
    test('counts words correctly', () => {
      document.body.innerHTML = '<p>This is a test with seven words</p>';

      const result = seoModel.analyzeSEO();

      expect(result.wordCount).toBe(7);
    });

    test('counts words with multiple spaces correctly', () => {
      document.body.innerHTML = '<p>Word   with   spaces</p>';

      const result = seoModel.analyzeSEO();

      expect(result.wordCount).toBe(3);
    });

    test('counts headings structure', () => {
      document.body.innerHTML = `
        <h1>Title</h1>
        <h2>Subtitle 1</h2>
        <h2>Subtitle 2</h2>
        <h3>Section</h3>
        <p>Content</p>
      `;

      const result = seoModel.analyzeSEO();

      expect(result.headings.h1).toBe(1);
      expect(result.headings.h2).toBe(2);
      expect(result.headings.h3).toBe(1);
      expect(result.headings.h4).toBe(0);
      expect(result.headings.h5).toBe(0);
      expect(result.headings.h6).toBe(0);
    });

    test('extracts meta title', () => {
      document.title = 'Test Page Title';

      const result = seoModel.analyzeSEO();

      expect(result.metaTitle).toBe('Test Page Title');
    });

    test('returns default message when no title', () => {
      document.title = '';

      const result = seoModel.analyzeSEO();

      expect(result.metaTitle).toBe('No title tag found');
    });

    test('extracts meta description', () => {
      document.head.innerHTML = '<meta name="description" content="This is a test description">';

      const result = seoModel.analyzeSEO();

      expect(result.metaDescription).toBe('This is a test description');
    });

    test('returns default message when no meta description', () => {
      const result = seoModel.analyzeSEO();

      expect(result.metaDescription).toBe('No description meta tag found');
    });

    test('extracts meta keywords', () => {
      document.head.innerHTML = '<meta name="keywords" content="test, seo, keywords">';

      const result = seoModel.analyzeSEO();

      expect(result.metaKeywords).toBe('test, seo, keywords');
    });

    test('returns default message when no meta keywords', () => {
      const result = seoModel.analyzeSEO();

      expect(result.metaKeywords).toBe('No keywords meta tag found');
    });

    test('counts images with and without alt text', () => {
      document.body.innerHTML = `
        <img src="image1.jpg" alt="Description 1">
        <img src="image2.jpg" alt="Description 2">
        <img src="image3.jpg">
        <img src="image4.jpg" alt="">
      `;

      const result = seoModel.analyzeSEO();

      expect(result.images.total).toBe(4);
      expect(result.images.withAlt).toBe(2);
      expect(result.images.withoutAlt).toBe(2);
    });

    test('counts internal and external links', () => {
      // Mock window.location
      delete window.location;
      window.location = {
        host: 'example.com',
        hostname: 'example.com',
        origin: 'https://example.com'
      };

      document.body.innerHTML = `
        <a href="https://example.com/page">Internal 1</a>
        <a href="https://example.com/other">Internal 2</a>
        <a href="https://external.com">External</a>
        <a href="/relative-page">Relative Internal</a>
        <a href="page.html">Relative Internal 2</a>
      `;

      const result = seoModel.analyzeSEO();

      expect(result.links.total).toBe(5);
      // After fix: relative URLs should be internal
      expect(result.links.internal).toBe(4);
      expect(result.links.external).toBe(1);
    });

    test('skips anchor, mailto, and tel links', () => {
      delete window.location;
      window.location = {
        host: 'example.com',
        hostname: 'example.com',
        origin: 'https://example.com'
      };

      document.body.innerHTML = `
        <a href="#section">Anchor</a>
        <a href="mailto:test@example.com">Email</a>
        <a href="tel:+1234567890">Phone</a>
        <a href="https://example.com/page">Real Link</a>
      `;

      const result = seoModel.analyzeSEO();

      expect(result.links.total).toBe(4);
      expect(result.links.internal).toBe(1);
      expect(result.links.external).toBe(0);
    });
  });
});
