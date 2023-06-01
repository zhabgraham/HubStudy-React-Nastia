import { Link } from 'react-router-dom';
import '../../Styles/main/section-4.css';
import sectionFour from '../../img/section-4.png';

const SectionFour = () => {
  return (
    <div className='section-4'>
        <h2 className='title-section-4'>
        Didn`t find an instruct<span className='white-title-section-4'>or?</span>
        </h2>
        <p className='paragraph-1-section-4'>Become one!</p>
        <p className='paragraph-2-section-4'>Fill the blank, create personal account and become a part of our community! Share your knowledge with others! Meet grateful students and blah-blah-blah</p>
        <Link to="/become-mentor">
        <button className='becomeInstructor'>
        Become an instructor!
        </button>
        </Link>
        <img className='image-section-4' src={sectionFour} alt='' ></img>
      </div>
   );
}

export default SectionFour;
