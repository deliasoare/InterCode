
import Header from "./Header";

import { Link } from "react-router-dom";
function Courses() {
    return (
        <div className="container">
            <Header />
            <div className="courses">
                <h1>Cursuri</h1>
                <div className="course course-alg" >
                    <div className="top-side">
                        <div className="left">
                            <Link to='/cursuri/grafuri'>
                                <div className="logo">
                                    <img src="/GRAFURI.png" alt="" />
                                </div>
                            </Link>
                            <Link to='/cursuri/grafuri'>
                                <div className="title">Algoritmi specializați pe grafuri</div>
                            </Link>
                        </div>
                        <div className="right">
                            <Link to='/cursuri/grafuri'>
                                <button>Studiază</button>
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <div className="bottom-side">
                        În această secțiune, puteți învăța algoritmi pentru determinarea ciclului eulerian, determinarea componentelor tare conexe, arbori parțiali de cost minim,drumuri de cost minim în graful orientat și lanțul minim dintre două noduri.
                    </div>
                </div>
                <div className="course course-bt">
                    <div className="top-side">
                        <div className="left">
                            <a href="#">
                                <div className="logo">
                                    <img src="/backtracking.png" alt="" />
                                </div>
                            </a>
                            <a href="#">
                                <div className="title">Backtracking</div>
                            </a>
                        </div>
                        <div className="right">
                            <button>Studiază</button>
                        </div>
                    </div>
                    <hr />
                    <div className="bottom-side">
                        În curând
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Courses;