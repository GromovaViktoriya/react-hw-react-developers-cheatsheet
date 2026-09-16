import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";
import {Segmented} from "antd";
import {MoonOutlined, SunOutlined} from "@ant-design/icons";

export const ThemeToggle = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    const handleToggle = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
            <Segmented
                className="theme-toggle"
                value={theme}
                onChange={handleToggle}
                shape="round"
                name="cheatsheet-color-theme"
                options={[
                    {
                        value: "light",
                        icon: <SunOutlined/>,
                    },
                    {
                        value: "dark",
                        icon: <MoonOutlined/>,
                    },
                ]}
            />
    )

}