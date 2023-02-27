import { SharedLayout } from 'components/SharedLayout';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import NotFound from 'pages/NotFound';

const Home = lazy(() => import('pages/Home'));
const News = lazy(() => import('pages/News'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/news" element={<News />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
