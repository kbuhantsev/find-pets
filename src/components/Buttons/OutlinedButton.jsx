import { Button } from '@mui/material';

const OutlinedButton = props => {
  const { children, ...otherProps } = props;
  return (
    <Button variant="outlined" {...otherProps}>
      {children}
    </Button>
  );
};

export default OutlinedButton;
