module.exports = {
    targetUrls: {
      websiteA: 'https://www.booking.com/searchresults.html?ss=Prayagraj%2C+India&efdco=1&label=gen173nr-1FCAEoggI46AdIM1gEaGyIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4ApiXjr8GwAIB0gIkNTg4ZTgwNGItOTg3ZC00MGZhLThlNjQtNmZjZDBlNjlhMzRj2AIF4AIB&aid=304142&lang=en-us&sb=1&src_elem=sb&src=index&dest_id=900062917&dest_type=city&checkin=2025-04-09&checkout=2025-04-10&group_adults=2&no_rooms=1&group_children=0',
    },
    selectors: {
      websiteA: {
        title: '[data-testid="title"]',
        price: '[data-testid="price-and-discounted-price"]',
        distance: '[data-testid="distance"]',
        rating: '[data-testid="review-score"] > div > div ',
        star: '[data-testid="property-card-container"]',
      },
    },
    outputFormat: 'json', 
    outputPath: './data/output', 
    headless: false, 
    timeout: 30000, 
};