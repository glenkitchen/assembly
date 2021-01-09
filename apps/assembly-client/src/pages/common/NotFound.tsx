import { Fullscreen, Text } from '@assembly/common/components';
import { Typography } from '@material-ui/core';
import { css } from '@styled-system/css';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <Fullscreen
      css={css({
        backgroundColor: 'grays.900',
        color: 'white',
      })}
    >
      <Typography style={{ fontSize: '10rem', marginBottom: 100 }}>
        404
      </Typography>

      <Typography style={{ marginBottom: 24 }} variant="h4">
        Whoops, page not found
      </Typography>

      <Typography variant="h5">
        We can’t seem to find the page you’re looking for
      </Typography>
    </Fullscreen>
  );
};

export default NotFound;
