import React, { Component } from 'react'
import { Card } from 'react-bootstrap'
import { Figure, Row, Container, Col, Badge } from 'react-bootstrap'
import { MDBIcon } from "mdbreact";

export default class Result extends Component {
    render() {
        return (
            <div class="col d-flex justify-content-center">
                <Card style={{ width: '60rem' }}>
                    <Container>
                        <Row>
                            <Col>
                                <Figure>
                                    <Figure.Image
                                        width={171}
                                        height={200}
                                        src={this.props.thumbnail}
                                    />
                                </Figure>
                            </Col>
                            <Col>
                                <h2><MDBIcon icon="utensils" /> &nbsp;  {this.props.title}</h2>
                                <h5><MDBIcon icon="hamburger" /> &nbsp; {this.props.cuisines}</h5>
                                <h6><MDBIcon icon="map-marker-alt" />&nbsp; {this.props.location}</h6>
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
                <br />
                <br />
            </div>
        );
    }
}
