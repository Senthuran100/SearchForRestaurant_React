import React, { Component } from 'react'
import Result from './Result'

export default class NearRestaurant extends Component {

    render() {
        let restaurants = this.props.restaurants;
        let isLoaded = this.props.isLoaded;
        if (isLoaded) {
            const resultComponents = restaurants.map((item) => (
                <Result
                    key={item.restaurant.id}
                    title={item.restaurant.name}
                    cuisines={item.restaurant.cuisines}
                    location={item.restaurant.location.address}
                    rating={item.restaurant.user_rating.aggregate_rating}
                    thumbnail={item.restaurant.thumb}
                />
            ));
            return (
                <div className="resultList">
                    {resultComponents}
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <p>Please wait...</p>
                </div>
            );
        }
    }
}
