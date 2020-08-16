import React, { Component } from 'react'
import axios from 'axios';
import { ACCESSKEY } from './Constants';
import NearRestaurant from './NearRestaurant';
import '../App.css';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'



export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Latitude: 0,
            Longitude: 0,
            restaurants: [],
            isLoaded: false,
            Cuisines: [],
            Categories: []
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
                this.getCuisines();
                this.getCategories();
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
            const resp = await axios.get('https://developers.zomato.com/api/v2.1/search?lat=' + this.state.Latitude + '&lon=' + this.state.Longitude, {
                headers: { "user-key": ACCESSKEY }
            });
            console.log(resp.data);
            this.setState({
                restaurants: resp.data.restaurants,
                isLoaded: true
            })
            console.log(this.state.restaurants);
        } catch (err) {
            console.error(err);
        }
    }

    getCuisines = () => {
        axios.get('https://developers.zomato.com/api/v2.1/cuisines?lat=' + this.state.Latitude + '&lon=' + this.state.Longitude, {
            headers: { "user-key": ACCESSKEY }
        }).then((response) => {
            this.setState({
                Cuisines: response.data.cuisines
            })
            console.log(this.state.Cuisines);
        })
    }

    getCategories=()=>{
        axios.get('https://developers.zomato.com/api/v2.1/categories',{
            headers: { "user-key": ACCESSKEY }
        }).then((response)=>{
            this.setState({
                Categories: response.data.categories
            })
        })
        console.log(this.state.categories);
    }

    render() {
        return (
            <div>
                <div class="contact-background-image">

                    <Form inline  >
                        <Form.Row className="align-items-center">
                            <Form.Control as="select" size="sm" custom>
                                <option>Location</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </Form.Control>
                            <FormControl id="inlineFormInputGroupUsername2" placeholder="Search for Restaurants or Cuisines" />
                            <Button type="submit" className="mb-2">
                                Submit
                        </Button>
                        </Form.Row>
                    </Form>
                </div>
                <br />

                <NearRestaurant restaurants={this.state.restaurants} isLoaded={this.state.isLoaded} />
            </div>
        )
    }
}
