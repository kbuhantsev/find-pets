import styled from '@emotion/styled';
import { List } from '@mui/material';

export const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  gap: 5px;
  flex-wrap: wrap;
`;

export const CategoriesListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 30px;
  justify-content: space-between;
`;
