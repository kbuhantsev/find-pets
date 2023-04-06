import React from 'react';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Notify } from 'notiflix';
import { useUser } from 'hooks/useUser';
import {
  AvatarStyled,
  EditPhotoSpan,
  IconButtonStyled,
  UserAvatarWrapper,
} from './UserAvatar.styled';
import { useUpdateUserAvatarMutation } from 'redux/user/userApi';

const UserAvatar = () => {
  const { user } = useUser();
  const [updateUserAvatar, { isLoading }] = useUpdateUserAvatarMutation();

  const handleAvatarChange = async event => {
    try {
      const file = event.target.files[0];
      await updateUserAvatar(file).unwrap();
    } catch (error) {
      Notify.failure(error.message);
    }
  };

  return (
    <UserAvatarWrapper>
      <AvatarStyled alt={user.name} src={user.avatarURL} />
      <IconButtonStyled
        aria-label="upload picture"
        component="label"
        disabled={isLoading}
      >
        <PhotoCameraIcon />
        <EditPhotoSpan>Edit photo</EditPhotoSpan>
        <input
          hidden
          accept="image/*"
          type="file"
          onChange={handleAvatarChange}
        />
      </IconButtonStyled>
    </UserAvatarWrapper>
  );
};

export default UserAvatar;
