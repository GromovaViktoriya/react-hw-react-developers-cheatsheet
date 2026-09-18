import {Logo} from "./Logo/Logo.jsx";
import {ThemeToggle} from "../ThemeToggle/ThemeToggle.jsx";
import {Button, Drawer} from "antd";
import {useContext, useEffect, useState} from "react";
import {useLocation} from "react-router";
import {MenuOutlined} from "@ant-design/icons";
import {LeftSidebar} from "../LeftSidebar/LeftSidebar.jsx";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";

export const Header = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();
    const {theme} = useContext(ThemeContext);

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };


    return (
        <header className="header">
            <Button
                className="mobile-menu-button"
                type="text"
                icon={<MenuOutlined style={{fontSize: '20px', color: 'var(--text-secondary)'}}/>}
                onClick={showDrawer}
                aria-label="Открыть меню"
            />
            <Logo/>
            <div className="header-actions">
                <ThemeToggle/>
            </div>

            <Drawer
                title={<span style={{color: theme === 'dark' ? '#f2f6ff' : '#182B49'}}>Меню</span>}
                placement="left"
                onClose={onClose}
                open={open}
                size={280}
                className="cheatsheet-drawer"
                classNames={{body: 'cheatsheet-drawer-body'}}
                closeIcon={<span style={{color: theme === 'dark' ? '#f2f6ff' : '#182B49'}}>X</span>}
                styles={
                    {
                        header: {
                            background: theme === 'dark' ? '#071321' : '#FFFFFF',
                            borderBottom: `1px solid ${theme === 'dark' ? '#1a3451' : '#E1E8F0'}`,
                            color: theme === 'dark' ? '#f2f6ff' : '#182B49'
                        },
                        body: {
                            background: theme === 'dark' ? '#071321' : '#FFFFFF',
                            padding: 0
                        }
                    }}
            >
                <LeftSidebar inDrawer={true}/>
            </Drawer>
        </header>
    )
}