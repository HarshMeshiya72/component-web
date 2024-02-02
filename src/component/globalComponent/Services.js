import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Services() {
  return (
    <div className='services'>
      <Container className=''>
        <Row>
          <Col className='our' >
            <p className=' text-center'>WHAT WE DO</p>
          </Col>
        </Row>
        <Row >
          <Col className='servi' >
            <h3 className=' text-center'>Our Services</h3>
          </Col>
        </Row>
        <Row className='Tech'>
          <Col sm={12} md={6} lg={4} >
            <div className='busi'>
              <img src={require('./img/1.png')}></img>
              <h5>Business Consulting</h5>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor<br></br> incididunt dolore magna aliqua</p>
              <h6>Read more</h6>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className='busi'>
              <img src={require('./img/1.png')}></img>
              <h5>Technology Services</h5>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor<br></br> incididunt dolore magna aliqua</p>
              <h6>Read more</h6>
            </div>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <div className='busi'>
              <img src={require('./img/1.png')}></img>
              <h5>Digital Solutions</h5>
              <p>Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor<br></br> incididunt dolore magna aliqua</p>
              <h6>Read more</h6>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className='text-center'>
            <Button className='rounded-0 btn4'>View All Services</Button></Col>
        </Row>
      </Container>
    </div>
  );
}
export default Services;