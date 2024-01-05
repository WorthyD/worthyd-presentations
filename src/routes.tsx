import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutMain } from './layouts/LayoutMain';
import Home from './views/home/home';
import UILibraries from './presentations/ui-libraries/UILibraries';
export function AppRoutes() {
    return (
        <Routes>
            <Route element={<LayoutMain />}>
                <Route path="" element={<Home />} />
                <Route path="ui" element={<UILibraries />} />
            </Route>
        </Routes>
    )
}