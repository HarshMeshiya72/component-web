import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Techsoft() {
    return (
        <div className='TECH'>
            <Container>
                <Row>
                    <Col className='our' >
                        <p className=' text-center'>TECHSOFT SO DIFFERENT?</p>
                    </Col>
                </Row>
                <Row >
                    <Col className='servi' >
                        <h3 className=' text-center'>Why Trust Us?</h3>
                    </Col>
                </Row>
                <Row className='mt-4 mb-4 soft' >
                    <Col lg={4} md={6} className='pb-4'>
                        <div className='d-flex'>
                            <div className='icone'>
                                <img src={require('./img/4.png')}></img>
                            </div>
                            <div>
                                <h4 className='ps-3'>Protect your Business</h4>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pb-4'>
                        <div className='d-flex'>
                            <div className='icone'>
                                <img src={require('./img/4.png')}></img>
                            </div>
                            <div>
                                <h4 className='ps-3'>Network Monitoring</h4>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pb-4'>
                        <div className='d-flex'>
                            <div className='icone'>
                                <img src={require('./img/4.png')}></img>
                            </div>
                            <div>
                                <h4 className='ps-3'>Network Security</h4>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pb-4'>
                        <div className='d-flex'>
                            <div className='icone'>
                                <img src={require('./img/4.png')}></img>
                            </div>
                            <div>
                                <h4 className='ps-3'>Managed IT Service</h4>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pb-4'>
                        <div className='d-flex'>
                            <div className='icone'>
                                <img src={require('./img/4.png')}></img>
                            </div>
                            <div>
                                <h4 className='ps-3'>Dedicated IT Support</h4>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={6} className='pb-4'>
                        <div className='d-flex'>
                            <div className='icone'>
                                <img src={require('./img/4.png')}></img>
                            </div>
                            <div>
                                <h4 className='ps-3'>Custom Developed</h4>
                                <p className='ps-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Techsoft;