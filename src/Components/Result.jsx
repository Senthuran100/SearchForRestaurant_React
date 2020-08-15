import React, { Component } from 'react'

export default class Result extends Component {
    render() {
        return (
            <div className="resultCard">
              <div className="img" style={{backgroundImage: 'url(' + this.props.thumbnail + ')'}}></div>
              <div className="content">
                <div className="details">
                  <h3>{this.props.title}</h3>
                  <h5><i className="fas fa-utensils"></i>{this.props.cuisines}</h5>
                  <h6><i className="fas fa-map-marker-alt"></i>{this.props.location}</h6>
                </div>
                <div>
                  <p className="rating">{this.props.rating}</p>
                </div>
              </div>
            </div>
          );
    }
}
