import { Link } from "react-router-dom";
import { faUser } from 'react-icons/fa'

const Header = () => {
    return (
        <header>


            <div className="header">
                <a href="/" className="logo">CompanyLogo</a>
                <div className="header-right">

                    <a href="/organiser" className="custom-links">Organiser</a>

                    <a href="/player" className="custom-links">Player</a>
                    {/* <ul>
                        <li className="custom-links">
                            <Link to="/organiser">
                                Organiser
                            </Link>
                        </li>

                        <li className="custom-links">
                            <Link to="/player">
                                Player
                            </Link>
                        </li>
                    </ul> */}
                    
                </div>
            </div>
        </header>
    )
} 

export default Header