
import React from 'react';
import { Button, Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { RxCaretDown } from 'react-icons/rx';
import './PaymentSuccess.css';
import success from './success.svg';
const PaymentSuccess = () => {

    return (
        <Container className='w-100 font mx-auto my-5 py-5'>
            <Row className='block1  mb-3 pb-2 mx-auto'>
                <h1>Yes, your subscription has been made!</h1>
                <p className='mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </Row>
            <Card 
                body
                className="text-center mx-auto shadow-lg rounded-3 border-0 bg-white"
                style={{
                    width: '596px',
                    height: '570px'
                   
                }}
            >
                <Row className='block2 mx-auto mt-5 mx-auto'>
                    <Row className='Row'>
                        <img src={success} alt="" />
                    </Row>
                </Row>
                <Row className='block3  mx-auto my-3'>
                    <h1>Thank you very much for your subscription.</h1>
                    <p>Your subscription has been successful. Find all the details about your order below. In the meantime, you can now enjoy your subscription.</p>
                </Row>
                <Row className='block4 border mx-auto py-3 rounded-2'>
                    <Row className='w-100'>
                        <Col className='d-flex justify-content-start me-2'>
                            <span>Order Review</span>
                        </Col>
                        <Col className='d-flex justify-content-end ms-2'>
                            <UncontrolledDropdown>
                                <DropdownToggle color="white">
                                    <RxCaretDown></RxCaretDown>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Bar Action</DropdownItem>
                                    <DropdownItem>Bar Action</DropdownItem>
                                    <DropdownItem>Bar Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='d-flex justify-content-start me-2'>
                            <span>Intel membership</span>
                        </Col>
                        <Col className='d-flex justify-content-end ms-2'>
                            <span>US$3012</span>
                        </Col>
                    </Row>

                </Row>
                <Button color="primary mx-3">
                    Back to subscription
                </Button>
            </Card>
        </Container>
    );
};
export default PaymentSuccess;