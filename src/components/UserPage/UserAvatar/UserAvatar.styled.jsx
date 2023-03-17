import styled from '@emotion/styled';
import { Avatar, IconButton } from '@mui/material';

export const UserAvatarWrapper = styled.div`
  display: flex;
  position: relative;
`;

export const AvatarStyled = styled(Avatar)`
  width: 230px;
  height: 230px;
  margin-bottom: 30px;
  filter: drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.11));
`;

export const IconButtonStyled = styled(IconButton)`
  position: absolute;
  bottom: 0;
  right: 0;
  color: ${p => p.theme.palette.primary.light};
`;
