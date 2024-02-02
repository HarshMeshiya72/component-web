import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function  Leadership(){
        return(
            <div className=' LEADERSHIP '>
        <Container>
          <Row>
            <Col className='our' >
              <p className=' text-center'>OUR LEADERSHIP</p>
            </Col>
          </Row>
          <Row >
            <Col className='servi' >
              <h3 className=' text-center'>Team Members</h3>
            </Col>
          </Row>
          <Row className='LEAD'>
            <Col sm={12} md={6} lg={3} >
              <img src={require('./img/asset 14.jpeg')}></img>
              <h5 className=' text-center pt-3 mb-0'>Howard Berry</h5>
              <h6 className=' text-center pt-0'>Executive Officer</h6>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <img src={require('./img/asset 15.jpeg')}></img>
              <h5 className=' text-center pt-3 mb-0'>Morris Nelson</h5>
              <h6 className=' text-center pt-0'>Staffing Director</h6>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <img src={require('./img/asset 16.jpeg')}></img>
              <h5 className=' text-center pt-3 mb-0'>Travis Wallace</h5>
              <h6 className=' text-center pt-0'>Content Executive</h6>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <img src={require('./img/asset 17.jpeg')}></img>
              <h5 className=' text-center pt-3 mb-0'>Steve Frazier</h5>
              <h6 className=' text-center pt-0'>Technical Executive</h6>
            </Col>
          </Row>
        </Container>
      </div>
        );
}
export default Leadership;