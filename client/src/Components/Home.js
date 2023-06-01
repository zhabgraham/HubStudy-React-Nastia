// import '../App.css';
import Nav from '../Components/main/Nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/main/reset.css';
import '../Styles/main/general.css';
import Main from '../Components/main/Main.js';
import Footer from '../Components/main/Footer.js';

const HomePage = () => {
  return ( 
    <div className="wrapper">
      <Nav/>
      <Main></Main>
      <Footer></Footer>
    </div>
   );
}
 
export default HomePage;