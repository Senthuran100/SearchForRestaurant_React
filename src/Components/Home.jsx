import React, { Component } from 'react'
import axios from 'axios';
import { ACCESSKEY } from './Constants';
import NearRestaurant from './NearRestaurant';
import '../App.css';
import Search from 'antd/lib/input/Search';
import { connect } from 'react-redux'   
import { GET_RESTAURANT } from '../Redux/Actions/action'

class Home extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
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
            
                const data = {Latitude:position.coords.latitude,Longitude:position.coords.longitude}
                this.props.getRestaurant(data)
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
        console.log('rest',this.props);
        return (
            <div>
                <div class="contact-background-image">
                    <Search placeholder="input search text" enterButton="Search" size="large" style={{ width: 500 }}/>
                </div>
                <br />

                <NearRestaurant restaurants={this.props.restaurants} isLoaded={this.props.loading} />
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        loading: state.reducer.loading,
        restaurants:state.reducer.restaurant
    }
}

const mapDispatchToProps = (dispatch) => ({
    getRestaurant: (data) => dispatch({ type: GET_RESTAURANT, payload:data })
  })



export default connect(mapStateToProps, mapDispatchToProps)(Home)
