import '../../Styles/main/reviews.css';
import reviewItemOne from '../../img/reviews-1.png';
import { useSelector } from 'react-redux';
const Reviews = () => {
  const token = useSelector((state) => state.token);
  console.log(token);
  return (
    <div className='reviews'>
    <h2 className='title-reviews'>
      <span className='black-reviews'>Re</span>views
    </h2>
    <div className='block-reviews'>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemOne} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Andrew
            </h3>
          </div>
          <div className='description-review'>
            <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemOne} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Andrew
            </h3>
          </div>
          <div className='description-review'>
            <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemOne} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Andrew
            </h3>
          </div>
          <div className='description-review'>
            <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
          </div>
        </div>
      </div>
      <div className='review-item'>
        <div className='image-review'>
          <img src= {reviewItemOne} alt="" ></img>
        </div>
        <div className='text-review'>
          <div className='log-review'>
            <h3 className='log-review-item'>
            Andrew
            </h3>
          </div>
          <div className='description-review'>
            <p>Зручна у використанні платформа, швидко знайшов наставника. Дякую!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
   );
}

export default Reviews;
