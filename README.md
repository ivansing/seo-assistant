# SEO Assistant

[![Chrome Extension](https://img.shields.io/badge/Platform-Chrome%20Extension-4285F4?logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-00C853)](https://developer.chrome.com/docs/extensions/mv3/intro/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Webpack](https://img.shields.io/badge/Webpack-5.x-8DD6F9?logo=webpack&logoColor=black)](https://webpack.js.org/)
[![Jest](https://img.shields.io/badge/Jest-29.x-C21325?logo=jest&logoColor=white)](https://jestjs.io/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A Chrome extension that analyzes webpages for essential SEO metrics, providing actionable insights for website optimization.

## Features

- **Word Count Analysis** - Calculates total words on a webpage
- **Headings Structure** - Breakdown of H1-H6 heading tags usage
- **Meta Tags Extraction** - Retrieves title, description, and keywords meta tags
- **Image Analysis** - Evaluates alt attribute coverage across all images
- **Link Classification** - Differentiates internal vs external links with proper URL parsing
- **Keyword Density** - Analyzes occurrence and density percentage of specified keywords

## Tech Stack

| Category | Technology |
|----------|------------|
| Platform | Chrome Extensions API (Manifest V3) |
| Language | JavaScript ES6+ |
| Architecture | MVC (Model-View-Controller) |
| Bundler | Webpack 5 |
| Transpiler | Babel 7 |
| Testing | Jest 29 with JSDOM |
| Documentation | JSDoc |

## Installation

### Prerequisites

- Node.js 16+ and npm
- Google Chrome browser

### Setup

```bash
# Clone the repository
git clone https://github.com/ivansing/seo-assistant.git
cd seo-assistant

# Install dependencies
npm install

# Build the extension
npm run built
```

### Load in Chrome

1. Navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `seo-assistant` project directory

## Usage

### Page Analysis

1. Navigate to any webpage
2. Click the SEO Assistant icon in Chrome toolbar
3. Click **Analyze Page** to run SEO analysis
4. Review metrics displayed in the popup

### Keyword Density

1. Enter comma-separated keywords in the input field
2. Click **Analyze Keywords**
3. View occurrence count and density percentage for each keyword

## Development

### Available Scripts

```bash
npm run built          # Bundle with Webpack
npm test               # Run test suite
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
npm run docs           # Generate JSDoc documentation
```

### Testing

The project includes a comprehensive test suite with 97%+ code coverage:

```bash
npm test
```

```
Test Suites: 3 passed, 3 total
Tests:       27 passed, 27 total
Coverage:    97.87%
```

### Architecture

The extension follows the MVC pattern with clear separation of concerns:

```
scripts/
├── popup/                    # Extension popup UI
│   ├── controllers/          # User interaction handling
│   ├── models/               # Data management
│   └── views/                # UI rendering
├── content/                  # Content scripts (injected into pages)
│   ├── controllers/          # Analysis orchestration
│   ├── models/               # SEO and keyword analysis logic
│   └── views/                # Communication with popup
└── utils/                    # Shared utilities
```

## Project Structure

```
seo-assistant/
├── dist/                     # Bundled output (generated)
│   ├── content.bundle.js
│   └── popup.bundle.js
├── icons/                    # Extension icons
├── scripts/                  # Source code (MVC architecture)
│   ├── content/
│   ├── popup/
│   └── utils/
├── styles/
│   └── popup.css
├── tests/                    # Jest test suite
│   ├── setup.js
│   ├── KeywordModel.test.js
│   ├── SeoModel.test.js
│   └── regexUtils.test.js
├── manifest.json             # Chrome extension manifest
├── popup.html                # Extension popup markup
├── webpack.config.js         # Webpack configuration
├── jest.config.js            # Jest configuration
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

### Code Standards

- Follow existing code patterns and MVC architecture
- Add tests for new functionality
- Run `npm test` before submitting PRs
- Use JSDoc comments for new functions

## License

This project is licensed under the ISC License.
