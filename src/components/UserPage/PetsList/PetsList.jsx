import { Typography } from '@mui/material';
import React from 'react';
import { PetsListWrapper } from './PetsList.styled';

const PetsList = () => {
  return (
    <PetsListWrapper>
      <Typography variant="h6">My pets:</Typography>
    </PetsListWrapper>
  );
};

export default PetsList;
