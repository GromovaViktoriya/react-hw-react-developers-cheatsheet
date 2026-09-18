import {Drawer} from "antd";
import {LeftSidebar} from "../../LeftSidebar/LeftSidebar.jsx";
import {useContext} from "react";
import ThemeContext from "../../../contexts/ThemeContext/ThemeContext.js";

export const DrawerMedia = ({open, setOpen})=>{
    const onClose = () => {
        setOpen(false);
    };

    const {theme} = useContext(ThemeContext);
    return (
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
    )
}