import styled from '@emotion/styled';

export const NavListStyled = styled('ul')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  paddingLeft: '0',
  [theme.breakpoints.up('desktop')]: {
    marginTop: '0px',
    marginBottom: '0px',
    flexDirection: 'row',
  },
}));
