import '../component/globalComponent/Cards'
import Cards from '../component/globalComponent/Cards';
import Featued from '../component/globalComponent/Featued';
import Slider from '../component/globalComponent/Slider';
import Services from '../component/globalComponent/Services';
import Solution from '../component/globalComponent/Solution';
import Techsoft from '../component/globalComponent/Techsoft';
import Leadership from '../component/globalComponent/Leadership';
import Testimonial from '../component/globalComponent/Testimonial';
import Stiki from '../component/globalComponent/Stiki';
import Logo from '../component/globalComponent/Logo';
function Homes(){
    return( 
        <>
        <Slider/>
        <Services/> 
        <Solution/>
        <Techsoft/>
        <Featued/>
        <Leadership/>
        <Testimonial/>
        <Cards/>
        <Stiki/>
        <Logo/>
        </>
        );
}
export default Homes;

