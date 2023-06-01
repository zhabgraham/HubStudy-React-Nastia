import { useNavigate } from "react-router-dom";
import mentorPhoto from "../../img/mentor-photo-1.png";
import mentorRating from "../../img/Stars_rate.png";
import { useSelector } from "react-redux";


const FilterMentor = ({name, description, qualification, mentorId}) => {
    const navigate = useNavigate();
    const user = useSelector((state) => state.user);

    return (
        <>
          <div className="mentor-item">
                <div className="mentor-photo">
                  <img src={mentorPhoto}></img>
                </div>
                <div className="mentor-info">
                  <div className="mentor-description">
                    <div>
                      <h2 className="mentor-name">{name}</h2>
                    </div>
                    <div>
                      <p className="mentor-sphere">{qualification}</p>
                    </div>
                  </div>
                  <div className="mentor-cons">
                    <ul className="mentor-cons-list">
                      <li className="mentor-cons-item">
                        {description}
                      </li>
                    </ul>
                  </div>
                  <div className="rating-mentor">
                    <img src={mentorRating}></img>
                  </div>
                  <div className="buttons-mentor-list">
                    {user && <button onClick={() => navigate(`/about-study/${mentorId}`)} className="startStudying">Почати навчання</button>}
                    {!user && <button onClick={() => navigate(`/sign-in`)} className="startStudying">Увійти</button>}
                    <button onClick={() => navigate(`/start-study/${mentorId}`)} className="about">Детальніше</button>
                  </div>
                </div>
              </div>

        </>
    )
}

export default FilterMentor;