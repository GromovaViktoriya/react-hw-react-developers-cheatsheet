import {Route, Routes} from "react-router";
import {Home} from "../pages/Home/Home.jsx";

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" component={<Home/>} />
            </Routes>
        </>
    )
}