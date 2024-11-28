export class SeoModel {
    analyzeSEO() {
      const wordCount = document.body.innerText.split(/\s+/).filter((word) => word.length > 0).length;
  
      // Headings structure
      const headings = {};
      for (let i = 1; i <= 6; i++) {
        const headingCount = document.querySelectorAll('h' + i).length;
        headings['h' + i] = headingCount;
      }
  
      // Meta tags
      const metaTitle = document.title || 'No title tag found';
  
      const metaDescriptionElement = document.querySelector("meta[name='description']");
      const metaDescription = metaDescriptionElement
        ? metaDescriptionElement.content
        : 'No description meta tag found';
  
      const metaKeywordsElement = document.querySelector("meta[name='keywords']");
      const metaKeywords = metaKeywordsElement
        ? metaKeywordsElement.content
        : 'No keywords meta tag found';
  
      // Image alt attributes
      const images = document.querySelectorAll('img');
      let imagesWithAlt = 0;
      images.forEach((img) => {
        if (img.hasAttribute('alt') && img.getAttribute('alt').trim() !== '') {
          imagesWithAlt++;
        }
      });
      const totalImages = images.length;
      const imagesWithoutAlt = totalImages - imagesWithAlt;
  
      // Links analysis
      const links = document.querySelectorAll('a[href]');
      let internalLinks = 0;
      let externalLinks = 0;
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (
          href.startsWith('#') ||
          href.startsWith('mailto:') ||
          href.startsWith('tel:')
        ) {
          // Skip anchor, email, and telephone links
          return;
        }
        if (href.includes(window.location.host)) {
          internalLinks++;
        } else {
          externalLinks++;
        }
      });
  
      return {
        wordCount,
        headings,
        metaTitle,
        metaDescription,
        metaKeywords,
        images: {
          total: totalImages,
          withAlt: imagesWithAlt,
          withoutAlt: imagesWithoutAlt,
        },
        links: {
          total: links.length,
          internal: internalLinks,
          external: externalLinks,
        },
      };
    }
  }
  