import {ReactArt} from "../../../pages/Home/ReactArt/ReactArt.jsx";

export const IntroText = () => {
    return (
        <>
            <ReactArt className="right-sidebar-image" />
            <p className="right-sidebar-intro">
                React — это не сложно, если знать, где искать нужную информацию.
            </p>
            <hr className="right-sidebar-divider" />
            <h2 className="right-sidebar-title">В этом разделе:</h2>
        </>
    )
}