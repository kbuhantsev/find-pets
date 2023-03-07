import React from 'react';
import { HeartIcon, HeartIconWrapper } from './HeartButton.styled';

export const HeartButton = ({ onClick, filled, ...props }) => {
  return (
    <HeartIconWrapper>
      <HeartIcon {...props} filled={filled.toString()} onClick={onClick} />
    </HeartIconWrapper>
  );
};
