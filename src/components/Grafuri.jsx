
import Header from './Header';
import { FaCode } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Grafuri() {
    return (
        <div className="container">
            <Header />
            <div className="curs cursGrafuri">
                <h1>Algoritmi specializați pe grafuri</h1>
                <div className="cuprins">În această secțiune, puteți învăța algoritmi pentru determinarea ciclului eulerian, determinarea componentelor tare conexe, arbori parțiali de cost minim,drumuri de cost minim în graful orientat și lanțul minim dintre două noduri.</div>
                <div className="lessons">              
                    <div className="lesson">
                        <div className="title">Determinarea ciclului eulerian</div>
                        <hr />
                        <div className="alg">
                            <Link to='/cursuri/grafuri/1'>
                                <div className="alg1"><FaCode size={25}/>Prin reuniune de cicluri </div>
                            </Link>
                            <Link to='/cursuri/grafuri/2'>
                            <div className="alg2"><FaCode size={25}/>Prin parcurgere </div>
                            </Link>
                        </div>
                    </div>

                    <div className="lesson">
                        <div className="title">Determinarea componentelor tare conexe</div>
                        <hr />
                        <div className="alg">
                            <Link to='/cursuri/grafuri/3'>
                                <div className="alg1"><FaCode size={25}/>Intersecția drumurilor </div>
                            </Link>
                            <Link to='/cursuri/grafuri/4'>
                                <div className="alg2"><FaCode size={25}/>Algoritm plus minus </div>
                            </Link>
                            <Link to='/cursuri/grafuri/5'>
                                <div className="alg3"><FaCode size={25}/>Algoritm Kosaraju </div>
                            </Link>
                        </div>
                    </div>

                    <div className="lesson">
                        <div className="title">Arbore parțial de cost minim</div>
                        <hr />
                        <div className="alg">
                            <Link to='/cursuri/grafuri/6'>
                                <div className="alg1"><FaCode size={25}/>Algoritmul lui Kruskal </div>
                            </Link>
                            <Link to='/cursuri/grafuri/7'>
                                <div className="alg2"><FaCode size={25}/>Algoritmul lui Prim </div>
                            </Link>
                        </div>
                    </div>

                    <div className="lesson">
                        <div className="title">Drumuri de cost minim în GO</div>
                        <hr />
                        <div className="alg">
                            <Link to='/cursuri/grafuri/8'>
                                <div className="alg1"><FaCode size={25}/>Algoritmul Roy-Floyd</div>
                            </Link>
                            <Link to='/cursuri/grafuri/9'>
                                <div className="alg2"><FaCode size={25}/>Algoritmul Dijkstra</div>
                            </Link>
                            <Link to='/cursuri/grafuri/10'>
                                <div className="alg3"><FaCode size={25}/>Algoritmul lui Dantzing</div>
                            </Link>
                        </div>
                    </div>

                    <div className="lesson">
                        <div className="title">Lanț minim între două noduri</div>
                        <hr />
                        <div className="alg">
                            <Link to='/cursuri/grafuri/12'>
                                <div className="alg1"><FaCode size={25}/>Algoritmul lui Lee </div>
                            </Link>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Grafuri;