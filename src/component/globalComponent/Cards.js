import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
function Cards(){
    return(
        <Container>
        <Row>
          <Col className='our' >
            <p className=' text-center'>OUR LATEST BLOG</p>
          </Col>
        </Row>
        <Row >
          <Col className='servi' >
            <h3 className=' text-center'>News & Updates</h3>
          </Col>
        </Row>
        <Row className=''>
          <Col sm={12} md={6} lg={4}>
            <Card className='blog'>
              <Card.Img variant="top" src={require('./img/asset 22.jpeg')} />
              <Card.Body>
                <h6>20 January - 2021  <span>Technology</span></h6>
                <h4>What Could 5g Change About The Way We Use Technology?</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                <h5>+ Read more</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className='blog'>
              <Card.Img variant="top" src={require('./img/asset 23.jpeg')} />
              <Card.Body>
                <h6>25 January - 2021  <span>IT Services</span></h6>
                <h4>3 Factors To Consider Choosing A Managed It Services</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                <h5>+ Read more</h5>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={4}>
            <Card className='blog'>
              <Card.Img variant="top" src={require('./img/asset 24.jpeg')} />
              <Card.Body>
                <h6>30 January - 2021  <span>Business</span></h6>
                <h4>How To Quickly Shift To A Work-from-home Business Model</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore veniam dolore.</p>
                <h5>+ Read more</h5>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className='text-center'>
          <Col>
            <Button className='rounded-0 btn5 me-4 '>Get Free Quote</Button>
            <Button className='rounded-0 btn6 '>View All Blog</Button>
          </Col>
        </Row>
      </Container>
    );
}
export default Cards;