import {Header} from "./components/Header/Header.jsx";
import {Layout} from "antd";
import {LeftSidebar} from "./components/LeftSidebar/LeftSidebar.jsx";
import {Footer} from "./components/Footer/Footer.jsx";
import ThemeContext from "./contexts/ThemeContext/ThemeContext.js";
import {useEffect, useState} from "react";
import {Routing} from "./Routing/Routing.jsx";


function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.documentElement.dataset.theme = theme;
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            <Layout className="app" hasSider={false}>
                <Header/>
                <div className='app-content'>
                    <LeftSidebar/>
                    <Routing/>
                </div>
                <Footer/>
            </Layout>
        </ThemeContext.Provider>
    )
}

export default App
