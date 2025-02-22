import './index.scss'
import {Link} from "react-router";
import {GoMoon} from "react-icons/go";
import {IoMdHeartEmpty} from "react-icons/io";
import {useContext} from "react";
import {ThemeContext} from "../ThemeContext/index.jsx"

function Navbar() {

    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <section id={"navbar"}>
            <div className={"container"}>
                <nav>
                    <div className={"wrapper"}>
                        <img src={"https://www.hellojob.az/content/assets//images/logo.svg"} alt={"Image"}/>
                        <div className={"links"}>
                            <Link to={`/`} className={"link"}>İş elanları</Link>
                            <Link to={`/`} className={"link"}>CV-lər</Link>
                            <Link to={`/`} className={"link"}>Şirkətlər</Link>
                            <Link to={`/`} className={"link"}>Vəzifələr</Link>
                        </div>
                    </div>
                    <div className={"modes"}>
                        <button className={"create"}>Elan yerləşdir</button>
                        <button className={"mode"}>
                            <IoMdHeartEmpty/>
                        </button>
                        <button className={"mode"} onClick={toggleTheme}>
                            <GoMoon/>
                        </button>
                    </div>
                </nav>
            </div>
        </section>
    );
}

export default Navbar;