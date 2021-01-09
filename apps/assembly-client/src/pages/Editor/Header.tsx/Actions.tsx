import { Button, Stack } from '@assembly/common/components';
import React, { useState } from 'react';
import { css } from '@styled-system/css';
import { EmbedIcon } from './icons';

export const Actions = () => {
  //const [fadeIn, setFadeIn] = useState(false);

  return (
    <Stack
      align="center"
      gap={2}
      css={{ '> button': { width: 'auto' } }}
      //   style={{
      //     opacity: fadeIn ? 1 : 0,
      //     transition: 'opacity 0.25s ease-in-out',
      //   }}
    >
      <Button>Update available</Button>
      <Button>
        Like Assembly<span>2</span>
      </Button>
      <Button>
        {/* <EmbedIcon css={css({ height: 3, marginRight: 1 })} /> */}
        Share
      </Button>
    </Stack>
  );
};
