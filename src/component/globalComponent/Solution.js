import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Solution() {
    return (
        <Container>
            <Row className='SOLU'>
                <Col lg={6} md={12} className='SOLUTION '>
                    <h6>IT SOLUTION COMPANY</h6>
                    <h2>We design, develop, implement <br></br>and support<span> IT Systems </span></h2>
                    <p className='pt-3 pb-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor in reprehenderit velit.</p>
                    <h5>We are a highly trained and qualified team ready to provide<br></br> viable IT solutions together with full-time support and expert<br></br> advice to fulfill your business needs.</h5>
                </Col>
                <Col lg={6} md={12} className='soimg'>
                    <img src={require('./img/asset 1.jpeg')}></img>
                </Col>
            </Row>
        </Container>
    );
}
export default Solution;