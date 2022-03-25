import React from 'react';
import { Container, Col, Row, } from 'react-bootstrap';


const Banner = () => {
    return (
        <div className="banner">
            <div className="overlay"></div>
            <Container className="banner-container">
                <Row>
                    <Col md={12} xs={12}>
                        <div className="banner-text">


                            <h1>WELCOME TO BLOG SECTION</h1>

                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;