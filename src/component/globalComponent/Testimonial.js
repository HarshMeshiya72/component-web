import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OwlCarousel from 'react-owl-carousel';
import { FaStar } from "react-icons/fa";
const option = {
    responsive: {
      nav: false,
      0: {
        items: 1,
      },
      425: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 3,
      }
  
    }
  }
function Testimonial(){
        return(
            <div className='Testimonials'>
        <Container>
          <Row>
            <Col className='our' >
              <p className=' text-center'>OUR CLIENT SAY</p>
            </Col>
          </Row>
          <Row >
            <Col className='servi' >
              <h3 className=' text-center'>Testimonials</h3>
            </Col>
          </Row>
          <OwlCarousel className='owl-theme ' id='Testi' {...option} items={3} margin={10} >
            <div class='item'>
              <div className='font-te'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
                <i><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ></i>
                <h6>Google</h6>
              </div>
              <div className='d-flex pt-3'>
                <img className='img4 ' src={require('./img/asset 18.jpeg')}></img>
                <div className=' mt-2 ps-3'>
                  <h5 >Rose Hopkins</h5>
                  <h6>Account Manager</h6>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='font-te'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
                <i><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ></i>
                <h6>Google</h6>
              </div>
              <div className='d-flex pt-3'>
                <img className='img4 ' src={require('./img/asset 19.jpeg')}></img>
                <div className=' mt-2 ps-3'>
                  <h5 >Rose Hopkins</h5>
                  <h6>Account Manager</h6>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='font-te'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
                <i><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ></i>
                <h6>Google</h6>
              </div>
              <div className='d-flex pt-3'>
                <img className='img4 ' src={require('./img/asset 20.jpeg')}></img>
                <div className=' mt-2 ps-3'>
                  <h5 >Rose Hopkins</h5>
                  <h6>Account Manager</h6>
                </div>
              </div>
            </div>
            <div class='item'>
              <div className='font-te'>
                <p className=''>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboredolore magna aliqua</p>
                <i><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ><FaStar ></FaStar ></i>
                <h6>Google</h6>
              </div>
              <div className='d-flex pt-3'>
                <img className='img4 ' src={require('./img/asset 21.jpeg')}></img>
                <div className=' mt-2 ps-3'>
                  <h5 >Rose Hopkins</h5>
                  <h6>Account Manager</h6>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </Container>
      </div>
        );
}
export default Testimonial;
