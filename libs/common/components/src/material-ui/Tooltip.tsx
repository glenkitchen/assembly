import {
  makeStyles,
  StylesProvider,
  Tooltip as MuiTooltip,
  TooltipProps,
} from '@material-ui/core';
import React from 'react';

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  const classes = useStyles();

  // Don't remove the <div>. The Tooltip needs an immediate child which can be a ref.
  // See https://stackoverflow.com/questions/57527896/material-ui-tooltip-doesnt-display-on-custom-component-despite-spreading-props
  return (
    <StylesProvider injectFirst>
      <MuiTooltip {...props} classes={classes}>
        <div>{children}</div>
      </MuiTooltip>
    </StylesProvider>
  );
};

const useStyles = makeStyles({
  tooltip: {
    fontSize: 14,
    backgroundColor: 'black',
  },
});

//Not working?
// const StyledTooltip = styled(MuiTooltip)<TooltipProps>(() => {
//   return css({
//     '& .MuiTooltip-tooltip': {
//       backgroundColor: 'black',
//       fontSize: 14,
//     },
//   });
// });
