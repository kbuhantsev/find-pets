import styled from '@emotion/styled';
import {
  Card,
  Chip,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

export const CardStyled = styled(Card)`
  display: flex;
  flex-direction: column;
  max-width: 345px;
  position: relative;
  height: 100%;
`;

export const ChipCategory = styled(Chip)`
  position: absolute;
  top: 20px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
`;

export const ChipFavorite = styled(Chip)`
  position: absolute;
  right: 10px;
  top: 12px;
  width: 44px;
  height: 44px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
`;

export const CardTitle = styled(Typography)`
  font-size: 28px;
  font-weight: 700;
`;

export const ListStyled = styled(List)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 0;
  padding-bottom: 0;
`;

export const ListItemStyled = styled(ListItem)`
  padding-top: 0;
  padding-bottom: 0;
`;

export const DescrTitle = styled(ListItemText)`
  font-size: 16px;
  flex-basis: 30%;
`;

export const DescrValue = styled(ListItemText)`
  font-size: 16px;
  flex-basis: 70%;
`;
