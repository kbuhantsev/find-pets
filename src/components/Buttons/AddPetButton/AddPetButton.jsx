import { Notify } from 'notiflix';
import AddIcon from '@mui/icons-material/Add';
import { ButtonAddStyled, ButtonAddWrapper } from './AddPetButton.styled';

const AddPetButton = () => {
  const onBtnLogOutClick = async () => {
    Notify.success('ADD');
  };

  return (
    <ButtonAddWrapper>
      <span>Add pet</span>
      <ButtonAddStyled onClick={onBtnLogOutClick}>
        <AddIcon />
      </ButtonAddStyled>
    </ButtonAddWrapper>
  );
};

export default AddPetButton;
