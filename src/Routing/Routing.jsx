import {Route, Routes} from "react-router";
import {Home} from "../pages/Home/Home.jsx";
import {Topic} from "../pages/Topic/Topic.jsx";

export const Routing = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/topics/:id" element={<Topic/>}/>
            </Routes>
        </>
    )
}