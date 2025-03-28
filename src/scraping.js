const puppeteer = require('puppeteer')
const { headless } = require('./config')

async function scraping(){

    const browser = await puppeteer.launch(
        {
            headless:false
        }
    )
    const page = await browser.newPage()

    await page.goto('https://www.booking.com/searchresults.html?ss=Prayagraj&ssne=Prayagraj&ssne_untouched=Prayagraj&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AsGmk78GwAIB0gIkOWY4YWY1YzAtOTIwZC00YWE0LTkwMTMtMmQ5NDIzNDBiMGU22AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=900062917&dest_type=city&checkin=2025-04-09&checkout=2025-04-10&group_adults=2&no_rooms=1&group_children=0')

    // const title = await page.evaluate(()=>{
    //     Array.from()
    // })

    // await browser.close()

}scraping()