import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useSearchParams,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LayoutMain } from './layouts/LayoutMain';
import Home from './views/home/home';
const UILibraries = lazy(
  () => import('./presentations/ui-libraries/UILibraries')
);
//import BookReview from './presentations/book-review/bookreview';
const BookReview = lazy(() => import('./presentations/book-review/bookreview'));
const Providers = lazy(() => import('./presentations/providers/Providers'));
//import Providers from './presentations/providers/Providers';
import './themes/themes.scss';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LayoutMain />}>
        <Route index element={<Home />} />
        <Route
          path="/:theme/ui"
          element={
            <Suspense>
              <UILibraries />
            </Suspense>
          }
        />
        <Route
          path="/:theme/books"
          element={
            <Suspense>
              <BookReview />
            </Suspense>
          }
        />
        <Route
          path="/:theme/providers"
          element={
            <Suspense>
              <Providers />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}
