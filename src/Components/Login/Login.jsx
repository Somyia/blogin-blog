import React, { useRef, useState } from 'react';
import './Login.css';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { userLogin } from '../../Redux/Login/login.actions';

import { connect } from "react-redux";
import { useNavigate } from 'react-router-dom';

const Login = ({ userLogin }) => {
    const inputElement = useRef(null);
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        email: ' ',
        password: '',
        done: true
    })



    const handleChange = e => {
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        login.email.length > 0 && userLogin({
            ...login,
            id: Date.now(),
        })
        setLogin({
            email: '',
            password: ''
        })

        navigate('/blogs')
    }

    return (
        <div>

            <Container >
                <Row className="vh-100">
                    <Col md={6} className="mx-auto d-flex justify-content-center align-items-center">
                        <Card>
                            <div className="login-section">
                                <h4>Login</h4>
                                <form className="form-area" onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            onChange={handleChange}
                                            value={login.email}
                                            name='email'
                                            type='email'
                                            placeholder="Email"

                                            inputRef={inputElement}

                                        />
                                        <AiOutlineMail />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            onChange={handleChange}
                                            value={login.password}
                                            name='password'

                                            inputRef={inputElement}
                                        />
                                        <RiLockPasswordLine />
                                    </div>
                                    <input className="btn btn-primary"
                                        type="submit"
                                        value="Login"

                                    />
                                </form>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div >

    );
};



export default connect(null, { userLogin })(Login);