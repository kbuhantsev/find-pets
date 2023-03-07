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
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: ${p => (p.filled === 'true' ? '#F59256' : 'none')};
`;
