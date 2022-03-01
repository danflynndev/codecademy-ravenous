const apiKey = 'VQI_hcetbFL4m9PhFp9xlQRbo0_w_U-8TgQ-gFLP4otL-50F247su5V30vQ0h61aMpMERXsnFxT09V_9H4rN8WENaFT-IcgZYc2W-4USj3kG7wl6gM1tvPAvcfwbYnYx';

export const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://private-cors-server.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
        }})
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    const businessObj = {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    };
                    return businessObj;
                })
            }
        })
    }
}

