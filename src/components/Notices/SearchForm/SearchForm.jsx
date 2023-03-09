import { InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { OutlinedInputStyled, SearchFormWrapper } from './SearchForm.styled';
import { useDebounce } from 'react-use';

export const SearchForm = () => {
  const [val, setVal] = React.useState('');

  useDebounce(
    () => {
      if (!val) return;
      console.log(val);
    },
    500,
    [val]
  );

  return (
    <SearchFormWrapper>
      <Typography variant="h4" gutterBottom>
        Find your favorite pet
      </Typography>

      <OutlinedInputStyled
        placeholder="Search"
        size="small"
        onChange={({ currentTarget }) => {
          setVal(currentTarget.value);
        }}
        endAdornment={
          <InputAdornment position="end" sx={{ cursor: 'pointer' }}>
            <SearchIcon />
          </InputAdornment>
        }
      />
    </SearchFormWrapper>
  );
};
