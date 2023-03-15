import styled from '@emotion/styled';

export const LoginFormStyled = styled.form(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '280px',
  position: 'absolute',
  top: '100px',
  left: '50%',
  transform: 'translateX(-50%)',
  textAlign: 'center',
  [theme.breakpoints.up('tablet')]: {
    width: '608px',
    top: 'calc((100vh - 490px) / 2)',
    backgroundColor: 'white',
    boxShadow: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    borderRadius: '40px',
    padding: '60px 80px',
  },
  [theme.breakpoints.up('desktop')]: {
    width: '618px',
  },
}));
