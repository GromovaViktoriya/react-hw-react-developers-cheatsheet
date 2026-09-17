import {Layout, Menu} from "antd";
import {menuItems} from "../../data/data.jsx";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";

const {Sider} = Layout;


export const LeftSidebar = () => {
    const {theme} = useContext(ThemeContext);
    return (
        <Sider className='left-sidebar' width={240}>
            <Menu
                mode="inline"
                items={menuItems}
                inlineCollapsed={false}
                theme={theme}
                openKeys={menuItems.map(item => item.key)}
            />
        </Sider>
    )
}