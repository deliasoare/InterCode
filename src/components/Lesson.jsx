import Header from "./Header";
import { useParams } from "react-router-dom";
import LessonWrap from './LessonWrap';
function Lesson() {

    const params = useParams();
    console.log(params);
    return (
        <div className="container">
            <Header />
            <LessonWrap id={params.id} />
        </div>
    );
}

export default Lesson;