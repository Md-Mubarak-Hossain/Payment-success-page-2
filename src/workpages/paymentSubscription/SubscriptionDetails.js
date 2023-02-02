
import React from 'react';
import { Card, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from 'reactstrap';
import { RxCaretDown } from 'react-icons/rx';
import { BsPlusCircle } from 'react-icons/bs';
import './SubscriptionDetails.css';

const SubscriptionDetails = () => {

    return (
        <Container className='w-100 font mx-auto my-5 py-5'>
            <Row className='div1  mb-3 pb-2 mx-auto'>
                <h1>Subscription details</h1>
                <p className='mx-auto'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
            </Row>
            <Card
                body
                className="text-center mx-auto shadow-lg rounded-3 border-0 bg-white"
                style={{
                    width: '596px',
                    height: '596px'}}>
                <div className='my-auto'>                    
                <Row className='div4 border mx-auto py-2 rounded-3'>                 
                    <Table borderless>
                        <tbody>
                            <tr><td className='text-start total'>Order Review</td>                           
                            <td className='text-end'>
                            <UncontrolledDropdown>
                                <DropdownToggle color="white">
                                    <RxCaretDown></RxCaretDown>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Bar Action</DropdownItem>
                                    <DropdownItem>Bar Action</DropdownItem>       
                                </DropdownMenu>
                            </UncontrolledDropdown></td> </tr>                  
                            <tr>
                            <td className='text-start total'>1items in cart</td>
                            <td className='text-end total'>US$3012</td>                           
                            </tr>                     
                        </tbody>
                    </Table>                     
                </Row>
                <Row className='div2 border mx-auto my-2 rounded-3 py-2 pe-3 ps-2'>                   
                    <Table borderless>
                        <tbody>
                            <tr>
                            <td className='text-start total'>Coupons</td>
                            <td className='text-end'><BsPlusCircle/></td>
                            </tr>                     
                        </tbody>
                    </Table>
                </Row>
                <Row className='div3 border mx-auto px-2 rounded-3'>
                    <Table borderless>
                        <tbody>
                            <tr><td className='text-start total'>Check out summary</td>
                            <td className='text-end'>
                            <UncontrolledDropdown>
                                <DropdownToggle color="white">
                                    <RxCaretDown></RxCaretDown>
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem>Bar Action</DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                          </td></tr>
                            <tr><td className='text-start'>Subtotal</td><td className='text-end'>US$3412</td></tr>
                            <tr><td className='text-start'>Discount</td><td className='text-end'>US$22</td></tr>
                            <tr><td className='text-start'>Extra Fee</td><td className='text-end'>US$2212</td></tr>
                            <tr><td className='text-start'>Shipping</td><td className='text-end'>US$212</td></tr>
                            <tr className='border-bottom'><td className='text-start'>Tax</td><td className='text-end'>US$112</td></tr>
                            <tr><td className='text-start'><span className='total'>Total</span></td><td className='text-end'><span className='total'>US$5,412</span></td></tr>
                        </tbody>
                    </Table>
                </Row>
                </div>
            </Card>
        </Container>
    );
};
export default SubscriptionDetails;