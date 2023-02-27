import styled from '@emotion/styled';
import {
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow,
} from 'styled-system';

const Box = styled.div(
  {
    display: 'flex',
    flexDirection: 'column',
  },
  space,
  color,
  typography,
  layout,
  flexbox,
  grid,
  background,
  border,
  position,
  shadow
);

export default Box;
