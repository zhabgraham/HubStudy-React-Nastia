import rates from '../../img/Stars_rate.png';
import sectionThree from '../../img/section-3.png';

const getMentor = ({name, description}) => {
    return (
        <>
          <div className='content-section-3'>
            <div className='titleAndImage'>
              <div className='description-section-3'>
                <h2 className='description-title-section-3'>Programing:</h2>
              </div>
              <div className='image-section-3'>
                <img src={sectionThree} alt=''></img>
              </div>
            </div>
            <div className='info-about-tutor'>
              <p className='name-tutor'>{name}</p>
              <ul className='theses'>
                <li className='theses-item'>
                {description}
                </li>
              </ul>
              <img src={rates} alt=''></img>
              <div className='buttons-section-3'>
                <button className='startStudying'>Почати навчання</button>
                <button className='about'>Детальніше</button>
              </div>
            </div>
          </div>

        </>
    )
}

export default getMentor;
