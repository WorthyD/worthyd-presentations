import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutMain } from './layouts/LayoutMain';
import Home from './views/home/home';
import UILibraries from './presentations/ui-libraries/UILibraries';
import BookReview from './presentations/book-review/bookreview';
export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<LayoutMain />}>
                <Route  index element={<Home />} />
                <Route path="ui" element={<UILibraries />} />
                <Route path="books" element={<BookReview />} />
            </Route>
        </Routes>
    )
}