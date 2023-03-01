import { Button } from '@mui/material';

const ContainedButton = props => {
  const { children, ...otherProps } = props;
  return (
    <Button variant="contained" {...otherProps}>
      {children}
    </Button>
  );
};

export default ContainedButton;
