import { SharedLayout } from 'components/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import PrivateRoute from 'routes/PrivateRoute';
import RestrictedRoute from 'routes/RestrictedRoute';

const HomePage = lazy(() => import('pages/HomePage'));
const NewsPage = lazy(() => import('pages/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage'));
const NoticesList = lazy(() =>
  import('../components/Notices/NoticesList/NoticesList')
);
const FriendsPage = lazy(() => import('pages/FriendsPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const UserPage = lazy(() => import('pages/UserPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/notices" element={<NoticesPage />}>
            <Route index element={<NoticesList />} />
            <Route path="/notices/:category" element={<NoticesList />} />
          </Route>
          <Route path="/friends" element={<FriendsPage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<LoginPage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/user"
            element={<PrivateRoute redirectTo="/" component={<UserPage />} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};
