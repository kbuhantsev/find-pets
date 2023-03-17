import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Notify } from 'notiflix';
import { useUser } from 'hooks/useUser';
import {
  AvatarStyled,
  IconButtonStyled,
  UserAvatarWrapper,
} from './UserAvatar.styled';

const UserAvatar = () => {
  const { user } = useUser();

  const onBtnEditPhotoClick = () => {
    Notify.success('Edit photo');
  };

  return (
    <UserAvatarWrapper>
      <AvatarStyled alt={user.name} src={user.avatarURL} />
      <IconButtonStyled onClick={onBtnEditPhotoClick}>
        <PhotoCameraIcon />
        <span style={{ color: 'black' }}>Edit photo</span>
      </IconButtonStyled>
    </UserAvatarWrapper>
  );
};

export default UserAvatar;
