import {Layout, Menu} from "antd";
import {menuItems} from "../../data/data.jsx";
import {useContext} from "react";
import ThemeContext from "../../contexts/ThemeContext/ThemeContext.js";
import {useLocation, useNavigate} from "react-router";

const {Sider} = Layout;


export const LeftSidebar = ({ inDrawer = false }) => {
    const {theme} = useContext(ThemeContext);
    const navigate = useNavigate();
    const location = useLocation();

    const currentKey = location.pathname.split('/').pop();

    const handleMenuClick = ({ key }) => {
        navigate(`/topics/${key}`);
    }
    return (
        <Sider className={inDrawer ? 'drawer-sidebar' : 'left-sidebar'} width={inDrawer ? '100%' : 240}>
            <Menu
                mode="inline"
                items={menuItems}
                inlineCollapsed={false}
                theme={theme}
                openKeys={menuItems.map(item => item.key)}
                onClick={handleMenuClick}
                selectedKeys={currentKey ? [currentKey] : []}
            />
        </Sider>
    )
}