import {Button} from "antd";
import {MenuOutlined} from "@ant-design/icons";

export const BurgerMenuButtonComponent = ({setOpen})=>{
    const showDrawer = () => {
        setOpen(true);
    };

    return (
        <Button
            className="mobile-menu-button"
            type="text"
            icon={<MenuOutlined style={{fontSize: '20px', color: 'var(--text-secondary)'}}/>}
            onClick={showDrawer}
            aria-label="Открыть меню"
        />
    )
}