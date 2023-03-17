import UserDataForm from '../UserDataForm/UserDataForm';
import { PaperStyled, UserInformWrapper } from './UserInformation.styled';
import UserAvatar from '../UserAvatar/UserAvatar';
import { Typography } from '@mui/material';

const UserInformation = () => {
  return (
    <UserInformWrapper>
      <Typography variant="h6" marginBottom="25px">
        My information:
      </Typography>
      <PaperStyled>
        <UserAvatar />
        <UserDataForm />
      </PaperStyled>
    </UserInformWrapper>
  );
};

export default UserInformation;
