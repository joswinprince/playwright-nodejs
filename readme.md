
# Setup Instructions 

```
npm install playwright

```

# Project Structure

playwright-framework/
├── tests/                  # Test files
│   ├── example.test.js
│   └── ...
├── pages/                  # Page Object Models
│   ├── loginPage.js
│   ├── dashboardPage.js
│   └── ...
├── utils/                  # Utility functions
│   ├── helpers.js
│   └── ...
├── config/                 # Configuration files
│   ├── config.js
│   └── env.json
├── reports/                # Test reports
├── playwright.config.js    # Playwright configuration
└── package.json            # Project metadata

# Installing allure Reports
```
npm install --save-dev allure-playwright
```

# To download new browsers

```
 npx playwright install
 ```
