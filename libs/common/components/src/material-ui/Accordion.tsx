import {
  Accordion as MuiAccordion,
  AccordionDetails as MuiAccordionDetails,
  AccordionDetailsProps,
  AccordionProps,
  AccordionSummary as MuiAccordionSummary,
  AccordionSummaryProps,
  makeStyles,
} from '@material-ui/core';
import React from 'react';
import styled, { css } from 'styled-components';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const Accordion: React.FC<AccordionProps> = ({ children, ...props }) => {
  const classes = useAccordionStyles();

  return (
    <StyledAccordion classes={classes} {...props}>
      {children}
    </StyledAccordion>
  );
};

export const AccordionSummary: React.FC<AccordionSummaryProps> = ({
  children,
  ...props
}) => {
  const classes = useAccordionSummaryStyles();

  return (
    <StyledAccordionSummary
      classes={classes}
      expandIcon={<ExpandMoreIcon />}
      {...props}
    >
      {children}
    </StyledAccordionSummary>
  );
};

export const AccordionDetails: React.FC<AccordionDetailsProps> = ({
  children,
  ...props
}) => {
  return <StyledAccordionDetail {...props}>{children}</StyledAccordionDetail>;
};

const StyledAccordion = styled(MuiAccordion)(() =>
  css({
    '.MuiAccordion-root': {
      backgroundColor: 'rgb(28, 32, 34)',
      color: 'white',
      borderBottom: '1px solid #757575',
    },
  })
);

const StyledAccordionSummary = styled(MuiAccordionSummary)(() => css({}));

const StyledAccordionDetail = styled(MuiAccordionDetails)(() => css({}));

const useAccordionStyles = makeStyles({
  root: {
    backgroundColor: 'rgb(28, 32, 34)',
    color: 'white',
    borderBottom: '1px solid #757575',
  },
});

const useAccordionSummaryStyles = makeStyles({
  root: {
    '& :hover': {
      background:
        'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), rgb(45, 45, 45)',
    },
  },
});
