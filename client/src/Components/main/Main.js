import '../../Styles/main/main.css';

import Reviews from './Reviews.js';
import SectionOne from './Section-1';
import SectionTwo from './Section-2';
import GetMentors from './GetMentors';
import SectionFour from './Section-4';
import SectionFive from './Section-5';
import WriteUs from './writeToUs';

const section = () => {
  return (
    <main className="section">
      <SectionOne></SectionOne>
      <SectionTwo></SectionTwo>
      <GetMentors></GetMentors>
      <SectionFour></SectionFour>
      <SectionFive></SectionFive>
      <Reviews></Reviews>
      <WriteUs></WriteUs>
    </main>
   );
}

export default section;
