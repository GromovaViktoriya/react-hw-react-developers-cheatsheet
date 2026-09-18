import {useContext} from "react";
import ThemeContext from "../../../contexts/ThemeContext/ThemeContext.js";
import darkHomeImage from "../../../assets/images/DarkReactMagic.png"
import lightHomeImage from "../../../assets/images/LightReactMagic.png"

export const IntroHomeText = ()=>{
    const {theme} = useContext(ThemeContext);

    return (
        <section className="intro">
            <div className="intro-text">
                <p className="intro-label">Простой способ вспомнить</p>
                <h1 className="title-main" id="home-title">
                    React Developer{" "}
                    <span className="title-main-accent">Cheatsheet</span>
                </h1>
                <p className="intro-description">
                    Краткие шпаргалки по основным темам React.
                    <br />
                    Быстро находи нужную информацию и возвращайся к ней в любой момент.
                </p>
            </div>
            <div className="intro-image">
                {<img src={`${theme === 'dark'? darkHomeImage:lightHomeImage}`} alt="react-magic-image"/>}
            </div>
        </section>
    )
}