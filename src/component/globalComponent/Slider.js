import Button from 'react-bootstrap/Button';
import OwlCarousel from 'react-owl-carousel';
function Slider() {
  return (
    <>
      <OwlCarousel className='owl-theme sliderSet' items={1}>
        <div class='item item1'>
          {/* <img src={require('./image/asset 34.jpeg')} className='w-100  position-relative'></img> */}
          <div className='slider-text flex-column justify-content-center d-flex align-items-start'>
            <h1 className=' font1'>Best <span>IT Solution</span> For<br></br> Grow Your Business</h1>
            <p className=''>We are passionate about bringing enterprise-level productivity,<br></br> scalability, and security to small and medium businesses.</p>
            <div><Button className='rounded-0 btn2'>Contact Us</Button>
              <Button className='rounded-0 btn3'>IT Solution</Button>
            </div>
          </div>
        </div>
        <div class='item item2'>
          {/* <img src={require('./image/asset 35.jpeg')} className='w-100'></img>1 */}
          <div className='slider-text flex-column justify-content-center d-flex align-items-start'>
            <h1 className=' font1'>Best <span>IT Solution</span> For<br></br> Grow Your Business</h1>
            <p className=''>We are passionate about bringing enterprise-level productivity,<br></br> scalability, and security to small and medium businesses.</p>
            <div><Button className='rounded-0 btn2'>Contact Us</Button>
              <Button className='rounded-0 btn3'>IT Solution</Button>
            </div>
          </div>
        </div>
        <div class='item item3'>
          {/* <img src={require('./image/asset 36.jpeg')} className='w-100'></img> */}
          <div className='slider-text flex-column justify-content-center d-flex  align-items-start'>
            <h1 className=' font1'>Best <span>IT Solution</span> For<br></br> Grow Your Business</h1>
            <p className=''>We are passionate about bringing enterprise-level productivity,<br></br> scalability, and security to small and medium businesses.</p>
            <div><Button className='rounded-0 btn2'>Contact Us</Button>
              <Button className='rounded-0 btn3'>IT Solution</Button>
            </div>
          </div>
        </div>

      </OwlCarousel>
    </>
  );
}
export default Slider;