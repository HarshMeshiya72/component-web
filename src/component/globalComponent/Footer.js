import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { FaFacebook, FaSquareTwitter, FaLinkedin, FaInstagram, FaLocationDot, FaEnvelope, FaMobileScreenButton, FaMagnifyingGlass } from "react-icons/fa6";
function Footer(){
    return(
        <div className='footer'>
        <Container>
          <Row>
            <Col sm={12} md={4} className='flogo pe-4'>
              <img src={require('./img/asset 33.png')}></img>
              <p className='pt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud consectetur</p>
              <div className='mt-4'>
                <ul className='d-flex p-0 f-icone'>
                  <li><a className='me-3'><FaFacebook></FaFacebook></a></li>
                  <li><a className='me-3'><FaSquareTwitter></FaSquareTwitter></a></li>
                  <li><a className='me-3'><FaLinkedin></FaLinkedin></a></li>
                  <li><a className='me-3'><FaInstagram ></FaInstagram></a></li>
                </ul>
              </div>
            </Col>
            <Col sm={12} md={2} className='flogo ps-4'>
              <h4 cl>Company</h4>
              <h6>About Us</h6>
              <h6>Latest Project</h6>
              <h6>IT Solutions</h6>
              <h6>Digital Solutions</h6>
              <h6>Team Member</h6>
              <h6>Contact Us</h6>
            </Col>
            <Col sm={12} md={2} className='flogo'>
              <h4>Services</h4>
              <h6>IT Strategy</h6>
              <h6>Network Services</h6>
              <h6>Software Audits</h6>
              <h6>Data Science</h6>
              <h6>Business Intelligence</h6>
              <h6>Virtual Workstation</h6>
            </Col>
            <Col sm={12} md={4} className='flogo'>
              <h4>Contact Info</h4>
              <h6>Address: 526 Melrose Street, Water Mill, New York.</h6>
              <h6>Phone: +080 707 555-321</h6>
              <h6>Email: contact-info@example.com</h6>
              <h6>Digital Solutions</h6>
              <div>
                <input placeholder='enter your email'></input>
                <Button className='rounded-0 btn9'>Subscribe now</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
}
export default Footer;