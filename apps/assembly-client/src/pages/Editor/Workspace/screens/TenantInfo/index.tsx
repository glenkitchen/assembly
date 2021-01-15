import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';
import { Button } from '@assembly/common/components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const TenantInfo = () => {
  const classes = useStyles();

  return (
    <div>
      <Accordion classes={classes} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="caption">Tenant Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* <TextField label="Tenant Name" fullWidth /> */}
          <Button>Save Tenant Name</Button>
        </AccordionDetails>
      </Accordion>
      <Accordion classes={classes} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="caption">Permissions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(28, 32, 34)',
    color: 'white',
    borderBottom: '1px solid #757575',
    // fontFamily: 'sans-serif',

    '& :hover': {
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), rgb(45, 45, 45)',
    },
  },
});
