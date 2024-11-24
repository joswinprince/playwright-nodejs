
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

# T0 Run tests
```
npx playwright test
```
# To Run tests using  
```
npm run test
```
```
npm run test:headed
```
# To Run specific tests
```
npm run test:headed tests/example.spec.js
```

# To Run allure Reports
```
allure generate allure-results
```
