import { Box } from '@mui/system';
import PetsList from 'components/UserPage/PetsList/PetsList';
import UserInformation from 'components/UserPage/UserInformation/UserInformation';

const UserPage = () => {
  return (
    <Box display="flex" gap="40px">
      <UserInformation />
      <PetsList />
    </Box>
  );
};

export default UserPage;
