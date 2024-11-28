# SEO Assistant

![SEO Assistant Logo](./icons/icon128.png)

**SEO Assistant** is a powerful Chrome extension designed to analyze webpages for essential SEO metrics. It provides insights into word count, headings structure, meta tags, image alt attributes, link analysis, and keyword density, helping users optimize their websites effectively.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
  1. [Plan the Refactoring](#1-plan-the-refactoring)
  2. [Set Up a Build System](#2-set-up-a-build-system)
  3. [Implement Linting and Formatting](#3-implement-linting-and-formatting)
  4. [Write Unit Tests](#4-write-unit-tests)
  5. [Document Your Code](#5-document-your-code)
  6. [Version Control](#6-version-control)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Future Enhancements](#future-enhancements)
- [Contact](#contact)

## Features
- **Word Count Analysis**: Calculates the total number of words on a webpage.
- **Headings Structure**: Provides a breakdown of headings (H1-H6) used on the page.
- **Meta Tags Analysis**: Extracts meta title, description, and keywords.
- **Image Analysis**: Counts total images and evaluates the presence of alt attributes.
- **Link Analysis**: Differentiates between internal and external links.
- **Keyword Density Analysis**: Analyzes the density of specified keywords within the content.

## Installation
1. **Clone the Repository**:
    ```sh
    git clone https://github.com/yourusername/seo-assistant.git
    ```
2. **Navigate to the Project Directory**:
    ```sh
    cd seo-assistant
    ```
3. **Install Dependencies**:
    ```sh
    npm install
    ```
4. **Build the Project**:
    ```sh
    npm run build
    ```
5. **Load the Extension in Chrome**:
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable **Developer mode** by toggling the switch in the top right corner.
    - Click on **Load unpacked** and select the `seo-assistant` directory.

## Usage
1. **Open the Extension**:
    - Click on the SEO Assistant icon in the Chrome toolbar.
2. **Analyze a Page**:
    - Click the **Analyze Page** button to perform an SEO analysis of the current webpage.
    - View the results displayed below the button.
3. **Keyword Density Analysis**:
    - Enter keywords separated by commas in the input field.
    - Click the **Analyze Keywords** button to evaluate the density of the specified keywords on the page.
    - View the keyword density results below the input field.

## Development
### 1. Plan the Refactoring
- **Modularization**: Organized the codebase into distinct modules based on functionality.
- **Design Patterns**: Implemented the Model-View-Controller (MVC) pattern to separate concerns and enhance maintainability.

### 2. Set Up a Build System
- **Webpack**: Utilized Webpack to bundle JavaScript modules efficiently.
- **Babel**: Configured Babel to transpile ES6+ code for broader browser compatibility.

### 3. Implement Linting and Formatting
- **ESLint**: Enforced consistent coding standards and caught potential errors early.
- **Prettier**: Automated code formatting to maintain code quality and readability.

### 4. Write Unit Tests
- **Testing Framework**: Planned integration of Jest for comprehensive unit testing.
- **Test Coverage**: Aimed to write tests for each module to ensure functionality and prevent regressions.

### 5. Document Your Code
- **JSDoc**: Added inline documentation using JSDoc for better code understanding.
- **README**: Maintained a detailed README with setup instructions, usage guides, and architectural overviews.

### 6. Version Control
- **Git**: Utilized Git for tracking changes and managing the codebase.
- **Branching Strategy**: Adopted feature branching to streamline development and collaboration.

## Project Structure
```
seo-assistant/
├── README.md
├── background.js
├── dist
│   ├── content.bundle.js
│   └── popup.bundle.js
├── docs
│   ├── notes.md
│   └── roadmap.md
├── icons
│   ├── icon128.png
│   ├── icon16.png
│   └── icon48.png
├── manifest.json
├── package-lock.json
├── package.json
├── popup.html
├── scripts
│   ├── content
│   │   ├── content.js
│   │   ├── controllers
│   │   │   ├── KeywordController.js
│   │   │   └── SeoController.js
│   │   ├── models
│   │   │   ├── KeywordModel.js
│   │   │   └── SeoModel.js
│   │   └── views
│   ├── popup
│   │   ├── controllers
│   │   │   └── PopupController.js
│   │   ├── models
│   │   │   └── PopupModel.js
│   │   ├── popup.js
│   │   └── views
│   │       └── PopupView.js
│   └── utils
│       └── regexUtils.js
├── styles
│   └── popup.css
└── webpack.config.js
```
**Description**:
- `dist/`: Contains bundled JavaScript files generated by Webpack.
- `docs/`: Holds project documentation, including notes and the project roadmap.
- `icons/`: Stores extension icons in various sizes.
- `scripts/`: Organized into `content` and `popup` for different extension components, each following the MVC pattern.
- `utils/`: Contains utility functions used across the project.
- `styles/`: Holds CSS files for styling the popup interface.
- `webpack.config.js`: Configuration file for Webpack bundling.

## Contributing
Contributions are welcome! To contribute to SEO Assistant, please follow these steps:

1. **Fork the Repository**:
    - Click the **Fork** button at the top right corner of the repository page.
2. **Clone Your Fork**:
    ```sh
    git clone https://github.com/yourusername/seo-assistant.git
    cd seo-assistant
    ```
3. **Create a New Branch**:
    ```sh
    git checkout -b feature/YourFeatureName
    ```
4. **Make Your Changes**:
    - Implement your feature or fix a bug.
5. **Commit Your Changes**:
    ```sh
    git commit -m "Add feature: YourFeatureName"
    ```
6. **Push to Your Fork**:
    ```sh
    git push origin feature/YourFeatureName
    ```
7. **Create a Pull Request**:
    - Navigate to the original repository and click on **New Pull Request**. Provide a clear description of your changes.

## License
This project is licensed under the MIT License.

## Future Enhancements
SEO Assistant is continuously evolving. Here are some planned features and improvements:

- **Image Optimization Analysis**: Assess image sizes and formats to recommend optimizations.
- **Structured Data Testing**: Analyze and validate structured data implementations (e.g., JSON-LD).
- **Link Analysis Enhancements**: Provide deeper insights into backlink profiles and broken links.
- **Performance Metrics**: Integrate tools to measure page load times and performance scores.
- **User Authentication & Dashboard**: Allow users to save analyses and track SEO improvements over time.
- **Multi-language Support**: Enable analysis for pages in different languages.

For more details, refer to the `docs/` directory.

## Contact
For any inquiries, suggestions, or support, please contact:

**Ivan Dev**  
Email: [ivan.duarte.restrepo@gmail.com](mailto:ivan.duarte.restrepo@gmail.com)  
GitHub: [@ivansing](https://github.com/ivansing)

Happy SEO Optimizing! 🚀

## Additional Notes
**Development Environment**: Developed and tested on Ubuntu using VS Code for a seamless Linux-based workflow.

**Build Process**: Ensure all dependencies are installed before building. Use `npm run build` to generate the latest bundles.

**Documentation**: Detailed notes and future plans are available in the `docs/` directory.


