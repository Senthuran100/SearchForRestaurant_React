import axios from 'axios'
const ACCESSKEY = '6b06f24d64eaceaf66d06298b0364a00';


export const getRestaurant = async (payload)=>{
    try {
        const restaurants = await axios.get('https://developers.zomato.com/api/v2.1/search?lat='+payload.Latitude+'&lon='+payload.Longitude, {
                        headers: { "user-key": ACCESSKEY }
                    });
        return restaurants.data.restaurants
    } catch (error) {
        return console.error(error)
    }
}

