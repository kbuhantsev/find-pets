import { ListItem } from '@mui/material';
import AddPetButton from 'components/Buttons/AddPetButton/AddPetButton';
import NavButtonCustom from 'components/Buttons/NavButtonCustom';
import { useUser } from 'hooks/useUser';
import { useMemo, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CategoriesListWrapper, StyledList } from './CategoriesList.styled';

const CategoriesList = () => {
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
    <CategoriesListWrapper>
      <StyledList dense={true}>
        {categories.map(({ title, to }) => (
          <ListItem key={title} disableGutters sx={{ width: 'fit-content' }}>
            <NavButtonCustom to={to} component={NavLink}>
              {title}
            </NavButtonCustom>
          </ListItem>
        ))}
      </StyledList>
      <AddPetButton />
    </CategoriesListWrapper>
  );
};

export default CategoriesList;
