import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import GetMentor from "./getMentor.js";
import '../../Styles/main/getMentors.css';

const GetMentors = () => {
  const dispatch = useDispatch();
  const mentor = useSelector((state) => state.mentor);



  const MentorsGet = async () => {
      try {

      const response = await fetch(`http://localhost:3001/mentor?bestMentor=true`, {
          method: 'GET',
      });

      let data = await response.json();
      dispatch(setMentors({ mentor: data }));
      } catch (err) {
          console.log(err)
      }
  }

  useEffect(() => {
      MentorsGet()
  }, [])

<<<<<<< HEAD
=======

>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
  return (
      <Carousel>
          {mentor && mentor.map(
              ({
                  firstName,
                  lastName,
                  description
              }) => (
                      <Carousel.Item>
                          <GetMentor name={`${firstName} ${lastName}`}
                                      description={description}/>
                      </Carousel.Item>
              )
          )}
      </Carousel>
  )
}
export default GetMentors;
