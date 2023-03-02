import { List, ListItem, Typography } from '@mui/material';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { useUser } from 'hooks/useUser';
import { useMemo, useState } from 'react';
import { useMatch, Outlet, Navigate, NavLink } from 'react-router-dom';

const NoticesPage = () => {
  const isBaseUrl = useMatch('/notices');
  const { isLoggedIn } = useUser();
  const [categories, setCategories] = useState([]);

  useMemo(() => {
    const categories = [
      { title: 'sell', to: 'sell' },
      { title: 'lost/found', to: 'lost-found' },
      { title: 'in good hands', to: 'in-good-hands' },
    ];

    const subCategoriesUser = [
      { title: 'favorite', to: 'favorite' },
      { title: 'my ads', to: 'my-ads' },
    ];

    if (isLoggedIn) {
      categories.push.apply(categories, subCategoriesUser);
    }

    setCategories(categories);
  }, [isLoggedIn]);

  return (
    <>
      {isBaseUrl && <Navigate to="/notices/sell" />}
      <div>
        <Typography variant="h5" gutterBottom>
          NOTICES SEARCH
        </Typography>
        <input type="text" placeholder="search text" />
        <button type="button">Search</button>
      </div>
      <div>
        <List
          dense={true}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
            flexWrap: 'wrap',
          }}
        >
          {categories.map(({ title, to }) => (
            <ListItem key={title} disableGutters sx={{ width: 'fit-content' }}>
              <NavButtonCustom to={to} component={NavLink}>
                {title}
              </NavButtonCustom>
            </ListItem>
          ))}
        </List>
      </div>

      <Outlet />
    </>
  );
};

export default NoticesPage;
