import styled from '@emotion/styled';

export const IconButtonWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  marginLeft: 'auto',
  [theme.breakpoints.up('tablet')]: {
    marginLeft: '0',
  },
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
}));
