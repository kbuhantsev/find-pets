import CategoriesList from 'components/CategoriesList/CaterogiesList';
import { SearchForm } from 'components/Notices/SearchForm/SearchForm';
import { useMatch, Outlet, Navigate } from 'react-router-dom';

const NoticesPage = () => {
  const isBaseUrl = useMatch('/notices');

  return (
    <>
      {isBaseUrl && <Navigate to="/notices/sell" />}
      <SearchForm />
      <CategoriesList />
      <Outlet />
    </>
  );
};

export default NoticesPage;
