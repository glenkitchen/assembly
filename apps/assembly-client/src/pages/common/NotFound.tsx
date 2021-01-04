import React from 'react';
import { Element, Text } from '@assembly/common/components';
import { css } from '@styled-system/css';

export const NotFound: React.FC = () => {
  return (
    <Element
      css={css({
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        width: '100vw',
        fontFamily: 'Inter, sans-serif',
        backgroundColor: 'grays.900',
        color: 'white',
      })}
    >
      <Text block size={152} weight="bold" marginBottom={100}>
        404
      </Text>
      <Text
        block
        align="center"
        size={7}
        weight="bold"
        marginBottom={6}
        css={css({ maxWidth: '80%', marginX: 'auto' })}
      >
        Whoops, page not found
      </Text>
      <Text
        block
        align="center"
        size={6}
        marginBottom={12}
        css={css({ maxWidth: '80%', marginX: 'auto' })}
      >
        We can’t seem to find the page you’re looking for
      </Text>
    </Element>
  );
};
