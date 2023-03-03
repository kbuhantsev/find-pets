import styled from '@emotion/styled';

export const LogoStyled = styled.span`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 32px;
  color: ${p =>
    p.theme.palette.mode === 'light'
      ? p.theme.palette.common.black
      : p.theme.palette.common.white};

  & > strong {
    color: ${p => p.theme.palette.primary.main};
  }
`;
