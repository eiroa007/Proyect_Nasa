import "./Header.css"
import { Navlink} from "react"
 
const Header = () => {
    return (
    <header>Siguiente
    <nav>
        <ul>
            <li>
                <Navlink to="/>Login"></Navlink>
            </li>
            <button onClick={logout}>logout</button>
        </ul>
    </nav>
    </header>
)};
export default Header;