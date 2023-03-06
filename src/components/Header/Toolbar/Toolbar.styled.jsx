import styled from '@emotion/styled';
import { Toolbar } from '@mui/material';

export const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-start',
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));

export const UserMenuWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 'auto',

  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '0',
  },
}));
