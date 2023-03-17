import PetsList from 'components/UserPage/PetsList/PetsList';
import UserInformation from 'components/UserPage/UserInformation/UserInformation';
import { UserPageWrapper } from 'components/UserPage/UserPage.styled';

const UserPage = () => {
  return (
    <UserPageWrapper>
      <UserInformation />
      <PetsList />
    </UserPageWrapper>
  );
};

export default UserPage;
