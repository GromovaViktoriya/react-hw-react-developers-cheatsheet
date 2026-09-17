import {Menu} from "antd";
import {menuItems} from "../../../data/data.jsx";

export const MenuList = ()=>{
    return (
        <Menu
            items={menuItems}
        />
    )
}