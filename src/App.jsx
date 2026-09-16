import {Header} from "./components/Header/Header.jsx";
import {Layout} from "antd";
import {LeftSidebar} from "./components/LeftSidebar/LeftSidebar.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import ThemeContext from "./contexts/ThemeContext/ThemeContext.js";
import {useEffect, useState} from "react";

const {Sider, Content} = Layout;

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.dataset.theme = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Layout className="app">
                <Header/>
                <Layout className='app-content'>
                    <LeftSidebar/>
                    <Content className='main'/>
                    <Sider className='right-sidebar' width={276}/>
                </Layout>
                <Footer/>
            </Layout>
        </ThemeContext.Provider>
    )
}

export default App
