import {Logo} from "./Logo/Logo.jsx";
import {ThemeToggle} from "../ThemeToggle/ThemeToggle.jsx";
import {useEffect, useState} from "react";
import {useLocation} from "react-router";
import {DrawerMedia} from "./DrawerMedia/DrawerMedia.jsx";
import {BurgerMenuButtonComponent} from "./BurgerMenuButton/BurgerMenuButton.jsx";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();


    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);


    return (
        <header className="header">
            <BurgerMenuButtonComponent setOpen={setOpen}/>
            <Logo/>
            <div className="header-actions">
                <ThemeToggle/>
            </div>
            <DrawerMedia open={open} setOpen={setOpen}/>
        </header>
    )
}