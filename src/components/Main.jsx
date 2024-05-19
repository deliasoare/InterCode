import { Link } from "react-router-dom";

function Main() {
    return (
        <div className="main">
            <div id="cursuri">
                <h1><span className="color">Cariera ta în IT</span> începe acum!</h1>
                <p className='desc'>Cu platforma noastră, îți poți revizui abilitățile în ceea ce privește algoritmica, ramură a informaticii esențială în ceea ce privește angajarea. </p>
                <Link to='/cursuri'><button className="start">Vezi toate cursurile</button></Link>
                <img src="/prima-pag.png" alt="" />
            </div>
            <div id="despre">
                <h1>Despre</h1>
                <div className="mijloc">
                    Oferim diverse cursuri pe variate secțiuni ale algoritmicii. Fiecare curs (spre exemplu "Algoritmi specializați pe grafuri") cuprinde lecții cu diverși algoritmi care sunt folosiți pentru capitolul respectiv.
                    <br />
                    <br />
                    <p>Fiecare lecție conține:</p>
                    <div className="points">
                        <p className="point"><b>Terminologie</b> Explică conceptele de bază, utilizările și importanța algoritmului sau structurii de date respective.</p>
                        <p className="point"><b>Exemple</b> Oferă pseudo-cod și exemple detaliate pentru a ilustra modul de funcționare al algoritmilor.</p>
                        <p className="point"><b>Implementare</b> Impementarea algoritmului în limbaj de programare C++</p>
                        <p className="point"><b>Probleme practice</b> Include probleme de diferite nivele de dificultate pentru a ajuta utilizatorii să își testeze cunoștințele și să exerseze.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;