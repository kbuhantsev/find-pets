import { Button } from '@mui/material';

const ButtonWithIcon = props => {
  const { icon, children, ...otherProps } = props;
  return (
    <Button startIcon={icon} {...otherProps}>
      {children}
    </Button>
  );
};

export default ButtonWithIcon;
