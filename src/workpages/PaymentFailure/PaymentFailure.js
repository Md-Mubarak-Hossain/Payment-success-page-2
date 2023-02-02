
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Card, Container, Row } from 'reactstrap';
import bitcoin from './bitcoin.svg';
import stripe from './strive.svg';
import paypal from './paypal.svg';
import applepay from './aplepay.svg';
import './PaymentFailure.css';
import failure from './failure.svg';


const PaymentFailure = () => {

    return (
        <Container className='w-100 font mx-auto my-5 py-5'>            
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
                        <img src={failure} alt="" />
                    </Row>
                </Row>
                <Row className='block3  mx-auto my-3'>
                    <h1 className='failed'>Payment failed</h1>
                    <p>Not enough money on the card</p>                  
                </Row>
                <Row className='block4 mx-auto pb-3 pay d-flex flex-column justify-content-center'>  
                            <h3 className='border420 pb-5'><BsArrowLeft/>Pay with another card</h3>                          
                </Row>
               <Row>
                <p className='mb-0'>Or pay another method</p>
                <Row className='d-flex justify-content-center img mb-5 mt-0'>
                    <img src={applepay} alt=""/> 
                    <img src={stripe} alt="" />
                    <img src={paypal} alt="" />
                    <img src={bitcoin} alt="" /> 
                </Row>
               </Row>
            </Card>
        </Container>
    );
};
export default PaymentFailure;