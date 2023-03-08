import SearchIcon from '@mui/icons-material/Search';
import {
  Box,
  OutlinedInput,
  InputAdornment,
  List,
  ListItem,
  Typography,
} from '@mui/material';
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

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{
          marginTop: '60px',
          marginBottom: '40px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Find your favorite pet
        </Typography>

        <OutlinedInput
          placeholder="Search"
          endAdornment={
            <InputAdornment position="end">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </Box>
      <>
        <List
          dense={true}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '5px',
            flexWrap: 'wrap',
            marginBottom: '30px',
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
      </>

      <Outlet />
    </>
  );
};

export default NoticesPage;
