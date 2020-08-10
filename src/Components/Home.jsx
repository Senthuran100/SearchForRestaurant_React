import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import axios from 'axios';

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Latitude: 0,
            Longitude: 0,
            restaurants: ''
        }
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState({
                    Latitude: position.coords.latitude,
                    Longitude: position.coords.longitude
                })
                this.sendGetRestaurant();
            },
            function (error) {
                console.error("Error Code = " + error.code + " - " + error.message);
            },
            {
                enableHighAccuracy: false,
                timeout: 10000,
                maximumAge: 10000
            }

        );
    }


    sendGetRestaurant = async () => {
        try {
            const resp = await axios.get('https://developers.zomato.com/api/v2.1/search?lat='+this.state.Latitude+'&lon='+this.state.Longitude,{
                headers: {"user-key": "6b06f24d64eaceaf66d06298b0364a00"}
              });
            console.log(resp.data);
            this.setState({
                restaurants:resp.data
            })
        } catch (err) {
            console.error(err);
        }
    }

        render() {
            return (
                <div>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://135525-391882-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/01/food-restaurant.jpg"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://static.wixstatic.com/media/8903c6_bb5088b5f1ab48fbae2533fc03604779~mv2_d_1600_1600_s_2.jpg/v1/fill/w_640,h_400,al_c,q_80,usm_0.66_1.00_0.01/8903c6_bb5088b5f1ab48fbae2533fc03604779~mv2_d_1600_1600_s_2.webp"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="https://i.pinimg.com/736x/e6/7d/af/e67daf68a6e8f6d4a9283cb7d64b098c.jpg"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                    <h1>Latitute  is  {this.state.Latitude} </h1>
                    <h1>Longitude is  {this.state.Longitude} </h1>

                    <h2>Restaurant Details {this.state.restaurants}</h2>
                </div>
            )
        }
    }
