const puppeteer = require('puppeteer');
const { URL } = require('url');
const { writeFileSync } = require('fs');

const personalToken = process.env.REACT_APP_GITHUB_PERSONAL_TOKEN;

(async () => {
  const { default: lighthouse } = await import('lighthouse');

  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  try {
    // Navigate to the initial page
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Perform login using the personal access token
    await page.evaluate((token) => {
      localStorage.setItem('user_access_token', token);
    }, personalToken);

    // Navigate to the dashboard page
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

    // Get the URL of the authenticated page
    const authenticatedURL = page.url();

    // Run Lighthouse
    const runnerResult = await lighthouse(authenticatedURL, {
      port: new URL(browser.wsEndpoint()).port,
      output: 'html',
      logLevel: 'info',
    });

    // Check if report is generated
    if (runnerResult && runnerResult.report) {
      // Save the report
      writeFileSync('report.html', runnerResult.report);
      console.log('Lighthouse report is successfully generated and saved.');
    } else {
      console.error('No Lighthouse report generated.');
    }
  } catch (error) {
    console.error('Error during Lighthouse audit:', error);
  } finally {
    await browser.close();
  }
})();