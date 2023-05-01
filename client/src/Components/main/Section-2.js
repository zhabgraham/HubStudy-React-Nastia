import '../../Styles/main/section-2.css';
import itemOne from '../../img/benefits-item-1.png';
import itemTwo from '../../img/benefits-item-2.png';
import itemThree from '../../img/benefits-item-3.png';
import itemFour from '../../img/benefits-item-4.png';
import itemFive from '../../img/benefits-item-5.png';
import itemSix from '../../img/benefits-item-6.png';
import itemMobOne from '../../img/benefits-item-mob-1.png';
import itemMobTwo from '../../img/benefits-item-mob-2.png';
import itemMobThree from '../../img/benefits-item-mob-3.png';
import itemMobFour from '../../img/benefits-item-mob-4.png';
import itemMobFive from '../../img/benefits-item-mob-5.png';
import itemMobSix from '../../img/benefits-item-mob-6.png';


const SectionTwo = () => {
  return (
    <div className="section-2">
      <h2 className="title-section-2">Our benefits:</h2>
      <div className="benefits">
        <div className="benefit-item">
          <div className="benefit-image">
            <picture>
              <source srcSet={itemMobOne} media="(max-width: 420px)" />
              <source srcSet={itemOne} media="(min-width: 421px)" />
              <img src={itemOne} alt="" />
            </picture>
          </div>
          <div className="benefit-paragraph">
            <p>
              Найкрутіші наставники:
              обирайте тих, хто з вами на одній хвилі та вміє знайти підхід до кожного
            </p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <picture>
              <source srcSet={itemMobTwo} media="(max-width: 420px)" />
              <source srcSet={itemTwo} media="(min-width: 421px)" />
              <img src={itemTwo} alt="" />
            </picture>
          </div>
          <div className="benefit-paragraph">
            <p>
              Якість:
              ми забезпечуємо кваліфікацію наших наставників, перевіряючи їхні професійні знання та досвід
            </p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <picture>
              <source srcSet={itemMobThree} media="(max-width: 420px)" />
              <source srcSet={itemThree} media="(min-width: 421px)" />
              <img src={itemThree} alt="" />
            </picture>
          </div>
          <div className="benefit-paragraph">
            <p>
              Різноманітність форматів: навчайтесь індивідуально з наставником, в групі або відвідуйте вебінари
            </p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <picture>
              <source srcSet={itemMobFour} media="(max-width: 420px)" />
              <source srcSet={itemFour} media="(min-width: 421px)" />
              <img src={itemFour} alt="" />
            </picture>
          </div>
          <div className="benefit-paragraph">
            <p>
              Широкий вибір послуг:
              ви знайдете наставника у будь - якій сфері!
            </p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <picture>
              <source srcSet={itemMobFive} media="(max-width: 420px)" />
              <source srcSet={itemFive} media="(min-width: 421px)" />
              <img src={itemFive} alt="" />
            </picture>
          </div>
          <div className="benefit-paragraph">
            <p>
              Гнучкий графік:
              обирайте час та займайтесь тоді, коли вам буде зручно
            </p>
          </div>
        </div>
        <div className="benefit-item">
          <div className="benefit-image">
            <picture>
              <source srcSet={itemMobSix} media="(max-width: 420px)" />
              <source srcSet={itemSix} media="(min-width: 421px)" />
              <img src={itemSix} alt="" />
            </picture>
          </div>
          <div className="benefit-paragraph">
            <p>
              Легкий та зручний пошук:
              тут ви швидко знайдете потрібного наставника використовуючи різні фільтри
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;