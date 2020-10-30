import React, { Component } from 'react'
import { Button, Card, Image, Modal } from 'antd'
import {  Row, Container, Col, Badge } from 'react-bootstrap'
import { MDBIcon } from "mdbreact";

export default class Result extends Component {
    constructor(props){
        super(props);
        this.state  = {
            visible: false
        };
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    render() {
        const {visible} = this.state
        console.log(this.props.restaurant);
        return (
            <div class="col d-flex justify-content-center">
                <Card style={{ width: '60rem' }}>
                    <Container>
                        <Row>
                            <Col>
                                <Image
                                        width={171}
                                        height={200}
                                        src={this.props.thumbnail}/>
                                    
                                
                            </Col>
                            <Col>
                            
                                <h2><MDBIcon icon="utensils" /> &nbsp;  {this.props.title}</h2>
                                <h5><MDBIcon icon="hamburger" /> &nbsp; {this.props.cuisines}</h5>
                                <h6><MDBIcon icon="map-marker-alt" />&nbsp; {this.props.location}</h6>
                                <Button type="link" block onClick={this.showModal}> View Detail</Button>
                            </Col>
                            <Col>
                                <br />
                                <Badge pill variant="danger">
                                    <h3> <MDBIcon icon="star" /> &nbsp; {this.props.rating}</h3>
                                </Badge>
                            </Col>
                            
                        </Row>
                    </Container>
                </Card>
                <Modal
                title={this.props.title}
                centered
                visible={visible}
                onOk={() => this.setState({visible:false})}
                onCancel={() => this.setState({visible:false})}
                width={1200}
                >
                    <Row>
                    <Col>
                    <Image
                            width={700}
                            height={400}
                            src={this.props.restaurant.featured_image}/>                                    
                    </Col>
                    <Col>
                    <h1><MDBIcon icon="utensils" /> &nbsp;  {this.props.restaurant.name}</h1>
                    <h4><MDBIcon icon="hamburger" /> &nbsp; {this.props.restaurant.cuisines}</h4>
                    <div style={{marginTop:'50px'}}>
                    <h5>Average cost for two people</h5>
                    <h5><MDBIcon icon="dollar-sign" />&nbsp;{this.props.restaurant.currency} &nbsp; {this.props.restaurant.average_cost_for_two}</h5>
                    </div>
                    <div style={{marginTop:'50px'}}>
                    <h4>Highlights</h4>
                    <h5><MDBIcon icon="hotel" />&nbsp; {this.props.restaurant.highlights}</h5>
                    </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    <h5><MDBIcon icon="map-marker-alt" />&nbsp; {this.props.restaurant.location.address}</h5>
                    <h5><MDBIcon icon="mobile" />&nbsp; {this.props.restaurant.phone_numbers}</h5>
                    <h5><MDBIcon icon="clock" />&nbsp; {this.props.restaurant.timings}</h5>
                    </Col>
                    </Row>
                </Modal>
                <br />
                <br />
            </div>
        );
    }
}
