import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from "../layout/PageLayout";
import Dashboard from "../pages/Dashboard";
import Alerts from "../pages/Alerts";
import Calendar from "../pages/Calendar";
import Maps from "../pages/Maps";
import Contact from "../pages/Contact";
import Settings from "../pages/Settings";


const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Layout route with sidebar and navbar */}
                <Route element={<PageLayout />}>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/maps" element={<Maps />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/settings" element={<Settings />} />
                </Route>
                {/* 404 page */}
                {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute