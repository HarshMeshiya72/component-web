import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { FaFacebook, FaSquareTwitter, FaLinkedin, FaInstagram, FaLocationDot, FaEnvelope, FaMobileScreenButton, FaMagnifyingGlass } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import React from 'react';
function Header() {
    return (
        <div>
            {/* top info start */}
            <div className='top_info'>
                <Container className='d-lg-block  d-none'>
                    <Row>
                        <Col lg={9} xl={10}>
                            <ul className='d-flex mb-0 pt-2 pb-2 ps-0'>
                                <li className='me-3'><a><FaLocationDot className='me-1'></FaLocationDot></a>526 Melrose Street,New York.</li>
                                <li className='me-3'><a><FaEnvelope className='me-1'></FaEnvelope></a>info@example.com</li>
                                <li><a><FaMobileScreenButton className='me-1'></FaMobileScreenButton></a>+505 307 222-33</li>
                            </ul>
                        </Col>
                        <Col lg={3} xl={2}>
                            <ul className='d-flex mb-0 pt-2 pb-2  right-info'>
                                <li><a className='me-3 pe-3 '><FaFacebook></FaFacebook></a></li>
                                <li><a className='me-3 pe-3'><FaSquareTwitter></FaSquareTwitter></a></li>
                                <li><a className='me-3 pe-3'><FaLinkedin></FaLinkedin></a></li>
                                <li><a className=''><FaInstagram ></FaInstagram></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* top-info end*/}
            <Navbar expand="lg" className="bg-body-tertiary">

                <Container >
                    <div className='nav position-relative'>
                        <Navbar.Brand href="#home" className=''><img src={require('./img/logo.png')}></img></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='toggalBtn' />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto  menu">
                                <NavDropdown title="Home" className='me-lg-2 me-xl-4 mein' id="basic-nav-dropdown"  >
                                    <NavDropdown.Item ><Link to='/'> Home 1</Link></NavDropdown.Item>
                                    <NavDropdown.Item > About</NavDropdown.Item>
                                </NavDropdown>
                                <Nav.Link  className=' me-xl-4 me-lg-2  mein'><Link to='/about'>About Us</Link></Nav.Link>
                                <NavDropdown title="Services" className=' me-xl-4 me-lg-2  mein' id="basic-nav-dropdown">
                                    <NavDropdown.Item >Services 1</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2"><Link to='/services'>Services 2</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Services Details</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Pages " className=' me-xl-4 me-lg-2  mein' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to='pages'>Single 1</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Single 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Single Project</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Blog " className=' me-xl-4 me-lg-2  mein' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Team</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Testimonials</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Pricing</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.4">404 Error</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.5">Coming Soon</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.6">Terms & Conditions</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.7">Privacy Policy</NavDropdown.Item>
                                </NavDropdown>
                                <NavDropdown title="Contact " className=' me-xl-4 me-lg-2  mein' id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1"><Link to='/contact'> Contact 1</Link></NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Contact 2</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <FaMagnifyingGlass className=' me-xl-4 me-lg-5 d-none d-lg-block'></FaMagnifyingGlass>
                            <Button className='rounded-0 btn1 d-none d-xl-block'>Get it support</Button>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>

        </div>

    );
}
export default Header;