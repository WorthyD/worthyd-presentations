import { Navigate, Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { LayoutMain } from './layouts/LayoutMain';
import Home from './views/home/home';
const UILibraries = lazy(() => import('./presentations/ui-libraries/UILibraries'));
//import BookReview from './presentations/book-review/bookreview';
const BookReview = lazy(() => import('./presentations/book-review/bookreview'));
const Providers = lazy(() => import('./presentations/providers/Providers'));
const Demo = lazy(() => import('./presentations/presentations/Demo'));
const Review2024 = lazy(() => import('./presentations/private/2024-review/2024Review'));

//import Providers from './presentations/providers/Providers';
const SkillUpBookReview = lazy(() => import('./presentations/book-review/skillup-bookreview'));
const BookList = lazy(() => import('./presentations/book-review/list'));

const routes = [
  {
    path: '/:theme/2024-review',
    element: Review2024
  },
  {
    path: '/:theme/skill-up-book-review',
    element: SkillUpBookReview
  },
  {
    path: '/book-list',
    element: BookList
  }
];

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
        <Route
          path="/:theme/demo"
          element={
            <Suspense>
              <Demo />
            </Suspense>
          }
        />
        <Route
          path="/:theme/demo"
          element={
            <Suspense>
              <Demo />
            </Suspense>
          }
        />
        {routes.map((e) => {
          return (
            <Route
              path={e.path}
              element={
                <Suspense>
                  <e.element />
                </Suspense>
              }
            />
          );
        })}
      </Route>
    </Routes>
  );
}
