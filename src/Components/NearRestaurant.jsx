import { Space, Spin } from 'antd';
import React, { Component } from 'react'
import Result from './Result'

export default class NearRestaurant extends Component {

    render() {

        let restaurants = this.props.restaurants;
        let isLoaded = this.props.isLoaded;
        if (!isLoaded) {
            const resultComponents = restaurants.map((item) => (
                
                    <Result
                        key={item.restaurant.id}
                        restaurant={item.restaurant}
                        title={item.restaurant.name}
                        cuisines={item.restaurant.cuisines}
                        location={item.restaurant.location.locality}
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
                <div class="col d-flex justify-content-left">
                <Space size="middle">
                    <Spin size="large" />
                </Space>
                </div>
            );
        }
    }
}
