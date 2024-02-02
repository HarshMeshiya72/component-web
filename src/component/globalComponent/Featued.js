import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
function Featued(){
    return(
        <div className='FEATURED'>
        <Container>
          <Row>
            <Col className='our' >
              <p className=' text-center'>FEATURED WORKS</p>
            </Col>
          </Row>
          <Row >
            <Col className='servi' >
              <h3 className=' text-center'>Case Studies</h3>
            </Col>
          </Row>
          <Row className='FEAT'>
            <Col lg={4} md={6} sm={12} className='pb-4'>
              <img src={require('./img/asset 8.jpeg')}></img>
            </Col>
            <Col lg={4} md={6} sm={12} className='pb-4'>
              <img src={require('./img/asset 9.jpeg')}></img>
            </Col>
            <Col lg={4} md={6} sm={12} className='pb-4'>
              <img src={require('./img/asset 10.jpeg')}></img>
            </Col>
            <Col lg={4} md={6} sm={12} className='pb-4'>
              <img src={require('./img/asset 11.jpeg')}></img>
            </Col>
            <Col lg={4} md={6} sm={12} className='pb-4'>
              <img src={require('./img/asset 12.jpeg')}></img>
            </Col>
            <Col lg={4} md={6} sm={12} className='pb-4'>
              <img src={require('./img/asset 13.jpeg')}></img>
            </Col>
          </Row>
          <Row className='text-center'>
            <Col>
              <Button className='rounded-0 btn4'>View All Services</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Featued;