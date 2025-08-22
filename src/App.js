import logo from './logo.svg';
import './App.css';
import AppAppBar from './componenet/Appbar';
import SliderComponent from './componenet/Slider';
import WaterFilter from './componenet/WaterFilter';
import Footer from './componenet/Footer';
import Solar from './componenet/Solar';
import FirstWaterFilter from './componenet/FirstWaterFilter';
import SocialWork from './componenet/SocialWork';
import Banner1 from './assets/banner1.jpeg'
import Banner2 from './assets/banner2.jpeg'
import Banner3 from './assets/banner3.jpeg'
import Banner4 from './assets/banner4.jpeg'
const images = [
 { image:Banner1, style:'slider-image animate__animated animate__fadeIn'},
  {image:Banner3, style:'slider-image animate__animated animate__fadeInUp'},
 { image:Banner2, style:'slider-image animate__animated animate__zoomIn'},
 { image:Banner4, style:'slider-image animate__animated animate__slideInRight'},
]
function App() {
  return (
    <>
    <AppAppBar/>
    <SliderComponent data={images}/>
    <WaterFilter/>
    <Solar/>
    <FirstWaterFilter/>
    <SocialWork/>
    <Footer/>
    </>
  );
}

export default App;
