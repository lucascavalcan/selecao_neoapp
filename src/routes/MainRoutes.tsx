import { Route, Routes } from "react-router-dom";
import {Home} from "../pages/Home";
import {Cart} from "../pages/Cart";
import {NotFound} from "../pages/NotFound";

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="*" element={<NotFound/>} />
        </Routes>
    )
}