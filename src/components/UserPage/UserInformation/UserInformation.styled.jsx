import styled from '@emotion/styled';
import { Paper } from '@mui/material';

export const UserInformWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;

export const PaperStyled = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px 16px 10px 16px',
  [theme.breakpoints.up('tablet')]: {
    flexDirection: 'row-reverse',
  },
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'column',
    maxWidth: '410px',
  },
}));
