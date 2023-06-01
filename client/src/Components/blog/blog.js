import Nav from "../main/Nav.js";
import Footer from "../main/Footer.js";
import '../../Styles/blog/blog.css';
import '../../Styles/main/general.css';
import tipsPhoto from "../../img/tips-photo.png";
import mentorPhoto from "../../img/mentor-photo.png";
import GetBlogs from "./GetBlogs.js";

import Carousel from 'react-bootstrap/Carousel';

function TextWithLimit({ text, limit }) {
  return (
    <div>
      {text.length <= limit ? (
        <span>{text}</span>
      ) : (
        <span>
          {text.slice(0, limit)}&hellip;
        </span>
      )}
    </div>
  );
}


const Blog = () => {

  return (
    <div class="blog-page">
      <div className="blog-content">
        <Nav></Nav>
        <h1 className="blog-title">The Blog</h1>
        <div className="sectionOne-blog">
            <GetBlogs />
        </div>
        <div class="sectionTwo-blog">
          <Carousel>
            <Carousel.Item>
              <div className='tips-container'>
                <div className='image-tips'>
                  <img src={tipsPhoto} alt='woman'></img>
                </div>
                <div className='info-page'>
                  <div>
                    <h1 className='tips-title'>Порада щодо навчання:</h1>
                  </div>
                  <div>
                    <p className='tips'>Правильно постав задачу!
                      Не думай, як змусити себе вчитися, а думай, як почати добре вчитися.
                      Не примушуй себе (підсвідомість буде чинити опір насильству), а плануй!
                    </p>
                  </div>
                  <div>
                    <p className='bottom-paragraph'>Якась Панянка, вівторок 23:59</p>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='tips-container'>
                <div className='image-tips'>
                  <img src={tipsPhoto} alt='woman'></img>
                </div>
                <div className='info-page'>
                  <div>
                    <h1 className='tips-title'>Порада щодо навчання:</h1>
                  </div>
                  <div>
                    <p className='tips'>Правильно постав задачу!
                      Не думай, як змусити себе вчитися, а думай, як почати добре вчитися.
                      Не примушуй себе (підсвідомість буде чинити опір насильству), а плануй!
                    </p>
                  </div>
                  <div>
                    <p className='bottom-paragraph'>Якась Панянка, вівторок 23:59</p>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className='tips-container'>
                <div className='image-tips'>
                  <img src={tipsPhoto} alt='woman'></img>
                </div>
                <div className='info-page'>
                  <div>
                    <h1 className='tips-title'>Порада щодо навчання:</h1>
                  </div>
                  <div>
                    <p className='tips'>Правильно постав задачу!
                      Не думай, як змусити себе вчитися, а думай, як почати добре вчитися.
                      Не примушуй себе (підсвідомість буде чинити опір насильству), а плануй!
                    </p>
                  </div>
                  <div>
                    <p className='bottom-paragraph'>Якась Панянка, вівторок 23:59</p>
                  </div>
                </div>
              </div>
              <Carousel.Caption>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default Blog;
