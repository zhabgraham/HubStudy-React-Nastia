import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMentors } from "../../state/index.js";
import Carousel from 'react-bootstrap/Carousel';
import FilterMentor from "./filterMentor.js";

const FilterMentors = ({formData}) => {
    const dispatch = useDispatch();
    const mentor = useSelector((state) => state.mentor);


    const getMentors = async () => {
        try {
        const { minPrice, maxPrice, minQualify, maxQualify, groupLessons, qualification } = formData;
        let filter = "";
        if (minPrice != "")
            filter += `pricePerLesson[gt]=${minPrice}&`;
        if (maxPrice != "")
            filter += `pricePerLesson[lt]=${maxPrice}&`;
        if (minQualify != "")
            filter += `yearOfExpierience[gt]=${minQualify}&`;
        if (maxQualify != "")
            filter += `yearOfExpierience[lt]=${maxQualify}&`;
        if (groupLessons !== "")
            filter += `groupLessons=true&`
        const response = await fetch(`http://localhost:3001/mentor?${filter}`, {
            method: 'GET',
        });

        let data = await response.json();
        console.log(data);
        dispatch(setMentors({ mentor: data }));
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getMentors()
<<<<<<< HEAD
    }, [])
=======
    })
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d



    return (
        <>
<<<<<<< HEAD
            {(mentor != null && mentor != undefined) && mentor.map(
=======
            {mentor.map(
>>>>>>> 27a03b5ab2fa669f6c62c7ea7c54eba46c48f32d
                ({
                    _id,
                    firstName,
                    lastName,
                    description,
                    qualification
                }) => (

                            <FilterMentor mentorId={_id} name={`${firstName} ${lastName}`}
                                        description={description}
                                        qualification={qualification}/>
                )
            )}
        </>
    )
}

export default FilterMentors;
