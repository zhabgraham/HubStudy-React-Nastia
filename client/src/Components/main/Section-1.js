import '../../Styles/main/section-1.css';
import mainPhoto from '../../img/photo-main.png';

import { Link } from 'react-router-dom';

const SectionOne = () => {
  return (
    <div className="section-1">
      <div className="section-1-info">
        <h1 className="main-title">Learn with us!</h1>
        <div className="main-paragraph">
          <p>Lörem ipsum bitårat plafaspeligt. Flipperförälder susade dest alogi och kompetensväxling kvasipp. Sora
            reanårade stereotik. Makrosk fåtufiliga förutom krorat, henifiera nydektigt, annonsblockerare. Tradade
            prerel inte jabor bongen ande svajpa. </p>
        </div>
        <div className="main-buttons">
          <Link to="/mentor-page">
            <button className="startStudyingOne button">Обрати наставника</button>
          </Link>
          <Link to="/become-mentor">
            <button className="becomeMentorOne button">Стати наставником</button>
          </Link>
        </div>
      </div>
      <div className="images">
        <img className='imageSection-1' src={mainPhoto} alt="" />
      </div>
    </div>
  );
}

export default SectionOne;