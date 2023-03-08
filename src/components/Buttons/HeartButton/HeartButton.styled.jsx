import styled from '@emotion/styled';
import Icon from '../../../images/svg';

export const HeartIconWrapper = styled('div')`
  position: absolute;
  right: 10px;
  top: 12px;
  width: 44px;
  height: 44px;

  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 50%;
`;

export const HeartIcon = styled(Icon.Heart)`
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${p => (p.filled === 'true' ? '#F59256' : '#fff')};

  transition: color 0.2s ease-in;

  &:hover,
  :focus {
    color: #f59256;
  }
`;
