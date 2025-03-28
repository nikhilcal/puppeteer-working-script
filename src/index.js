

const puppeteer = require('puppeteer');
const config = require('./config');

async function index(urls, selectors) {
    const browser = await puppeteer.launch({
        headless: config.headless
    });
    const page = await browser.newPage();
    page.setDefaultTimeout(config.timeout);

    await page.goto(urls, { waitUntil: 'networkidle2' });
    const title = await page.evaluate((selector) =>
        Array.from(document.querySelectorAll(selector), (e) => e.innerText),
        selectors.title
    );
    const price = await page.evaluate((selector) =>
        Array.from(document.querySelectorAll(selector), (e) => e.innerText),
        selectors.price
    );
    const distance = await page.evaluate((selector) =>
        Array.from(document.querySelectorAll(selector), (e) => e.innerText),
        selectors.distance
    );

    const div = await page.evaluate((selector) =>
        Array.from(document.querySelectorAll(selector), (e) => e.innerText),
        selectors.rating
    );
    let rate = [];
    for (let j = 0; j < div.length; j++) {
        if (div[j] != null && div[j].indexOf("Scored") > -1) {
            rate.push(div[j]);
        }
    }

    const star = await page.evaluate((selector) =>
        Array.from(document.querySelectorAll(selector), (e) => e.innerText),
    );

    const ariaLabels = await page.evaluate(() => {
        return Array.from(document.querySelectorAll('div[aria-label]'), div => div.getAttribute('aria-label'));
    });
    const ratings = ariaLabels.filter(label => label && /^\d out of 5$/.test(label));

    const output = title.map((_, index) => ({
        title: title[index] || "N/A",
        price: price[index] || "N/A",
        distance: distance[index] || "N/A",
        rate: rate[index] || "N/A",
        // star: star[index] || "N/A",
        rating: ratings[index] || "N/A"
    }));

    console.log(output);
    await browser.close();
}

index(config.targetUrls.websiteA, config.selectors.websiteA);
