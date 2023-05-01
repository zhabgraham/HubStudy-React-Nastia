import rates from '../../img/Stars_rate.png';
import sectionThree from '../../img/section-3.png';

const GetNotification = ({text, timeEnd, theme}) => {

  const date = new Date(timeEnd);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear().toString()}`;

    return (
      <div class="item-content">
        <div className="date">
        {formattedDate}
        </div>
        <div className="info">
          <h2>{theme}</h2>
          <p>{text}</p>
        </div>
    </div>
    )
}

export default GetNotification;
