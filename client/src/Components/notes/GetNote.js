import rates from '../../img/Stars_rate.png';
import sectionThree from '../../img/section-3.png';

const GetNote = ({text}) => {
    return (
          <div className="note-block-wrapper">
            <div className="title-and-time-section">
                  <div className="note-title-text">
                  <strong><strong>Нотатка 1</strong></strong>
                  </div>
                  <div className="note-time-text">23.04.2023</div>
                </div>
                <div className="note-text-container">
                  <div className="actual-text">
                    {text}
                  </div>
              </div>
             </div>
    )
}

export default GetNote;
