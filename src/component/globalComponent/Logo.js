import OwlCarousel from 'react-owl-carousel';
import Container from 'react-bootstrap/Container';
const ioption = {
    responsive: {
      0: {
        items: 2,
      },
      768: {
        items: 3,
      },
      1024: {
        items: 5,
      }
    }
  }
function Logo() {
    return (
        <div>
            <Container>
                <div>
                    <OwlCarousel className='owl-theme pt-4 pb-4' id='logo' dot={false} {...ioption} loop items={5} margin={10}>
                        <div class='item'>
                            <img src={require('./img/asset 25.png')} ></img>
                        </div>
                        <div class='item'>
                            <img src={require('./img/asset 26.png')}></img>
                        </div>
                        <div class='item'>
                            <img src={require('./img/asset 27.png')}></img>
                        </div>
                        <div class='item'>
                            <img src={require('./img/asset 28.png')}></img>
                        </div>
                        <div class='item'>
                            <img src={require('./img/asset 29.png')}></img>
                        </div>
                        <div class='item'>
                            <img src={require('./img/asset 30.png')}></img>
                        </div>
                        <div class='item'>
                            <img src={require('./img/asset 31.png')}></img>
                        </div>
                    </OwlCarousel>
                </div>
            </Container>
        </div>
    );
}
export default Logo;