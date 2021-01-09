import { Button, Stack } from '@assembly/common/components';
import React from 'react';

export const Actions = () => {
  //const [fadeIn, setFadeIn] = useState(false);

  return (
    <Stack
      align="center"
      gap={2}
      //   style={{
      //     opacity: fadeIn ? 1 : 0,
      //     transition: 'opacity 0.25s ease-in-out',
      //   }}
    >
      {/* <MyButton>
        Like Assembly<span>2</span>
      </MyButton>
      <MyButton>        
        Share
      </MyButton> */}

      <Button>Create App</Button>
    </Stack>
  );
};
