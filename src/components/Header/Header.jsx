import {Logo} from "./Logo/Logo.jsx";
import {ThemeToggle} from "../ThemeToggle/ThemeToggle.jsx";

export const Header = () => {
    return (
        <header className="header">
            <Logo/>
            <div className="header-actions">
                <ThemeToggle/>
            </div>
        </header>
    )
}