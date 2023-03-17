import styled from '@emotion/styled';

export const UserPageWrapper = styled.div(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.up('desktop')]: {
    flexDirection: 'row',
  },
}));
