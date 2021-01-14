import {
  makeStyles,
  Tooltip as MuiTooltip,
  TooltipProps,
} from '@material-ui/core';
import React from 'react';

export const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => {
  const classes = useStyles();

  return (
    <MuiTooltip classes={classes} {...props}>
      {children}
    </MuiTooltip>
  );
};

const useStyles = makeStyles({
  tooltip: {
    fontSize: 14,
    backgroundColor: 'black',
  },
});

// const Tip = styled(Tooltip)`
//   & .MuiTooltip-tooltip {
//     background-color: black;
//     font-size: 14px;
//   }
// `;
