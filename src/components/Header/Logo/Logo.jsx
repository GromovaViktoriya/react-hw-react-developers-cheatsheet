import {Link} from "react-router";
import {ReactSvg} from "./ReactSvg/ReactSvg.jsx";

export const Logo = ()=>{
    return (
        <Link className="header-logo" to="/">
            <ReactSvg/>
            <span className="header-logo-title">React Developer Cheatsheet</span>
        </Link>
    )
}