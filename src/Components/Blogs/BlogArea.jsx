import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CreateBlog from './CreateBlog';
import BlogBody from './BlogBody';

const BlogArea = () => {
    return (
        <Container>
            <Row>
                <Col md={6} sm={12}>
                    <div>
                        <CreateBlog></CreateBlog>
                    </div>
                </Col>
                <Col md={6} sm={12}>
                    <div>
                        <BlogBody />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogArea;
