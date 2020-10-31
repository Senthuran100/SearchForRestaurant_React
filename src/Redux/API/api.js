import axios from 'axios'
const ACCESSKEY = '6b06f24d64eaceaf66d06298b0364a00';


export const getRestaurant = async (payload) => {
    try {
        const restaurants = await axios.get('https://developers.zomato.com/api/v2.1/search?lat=' + payload.Latitude + '&lon=' + payload.Longitude, {
            headers: { "user-key": ACCESSKEY }
        });
        return restaurants.data.restaurants
    } catch (error) {
        return console.error(error)
    }
}

export const getCity = async (payload) =>{
    try{
        const city = await axios.get('https://developers.zomato.com/api/v2.1/cities?lat=' + payload.Latitude + '&lon=' + payload.Longitude, {
            headers: { "user-key": ACCESSKEY }
        });
        console.log(city.data);
        return city.data
    }
    catch(error){
        return console.error(error)
    }
}

export const getCollection= async(payload) => {
    try{
        const collection = await axios.get('https://developers.zomato.com/api/v2.1/collections?lat=' + payload.Latitude + '&lon=' + payload.Longitude, {
            headers: { "user-key": ACCESSKEY }
        });
        console.log(collection.data);
        return collection.data
    }
    catch(error){
        return console.error(error)
    }
}

