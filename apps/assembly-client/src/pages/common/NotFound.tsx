import { Fullscreen, Text } from '@assembly/common/components';
import { css } from '@styled-system/css';
import React from 'react';

const NotFound: React.FC = () => {
  return (
    <Fullscreen
      css={css({
        fontFamily: 'Inter, sans-serif',
        backgroundColor: 'grays.900',
        color: 'white',
      })}
    >
      <Text size={152} weight="bold" marginBottom={100}>
        404
      </Text>

      <Text size={7} weight="bold" marginBottom={6}>
        Whoops, page not found
      </Text>

      <Text size={6} marginBottom={12}>
        We can’t seem to find the page you’re looking for
      </Text>
    </Fullscreen>
  );
};

export default NotFound;
