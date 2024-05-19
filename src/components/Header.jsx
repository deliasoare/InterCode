import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function Header() {
    return (
        <div className="header">
            <div className="left-side">
                <h2><Link to="/">InterCode</Link></h2>
            </div>
            <div className="right-side">

                <HashLink to="/#cursuri" className="cursuri">Cursuri</HashLink>
                <HashLink to="/#despre" className="despre">Despre</HashLink>                
                
                <Link to="/cursuri"><button className="get-started">Începe</button></Link>
            </div>
        </div>
    );
}

export default Header;