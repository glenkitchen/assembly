import { Element } from './Element';
import { css } from '@styled-system/css';
import React from 'react';
import styled from 'styled-components';

interface AvatarProps {
  imageUrl: string;
  userName: string;
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, userName }) => {
  return (
    <AvatarContainer>
      <AvatarImage src={imageUrl} alt={userName} />
    </AvatarContainer>
  );
};

//const AvatarContainer = styled(Element).attrs({ as: 'span' })(
const AvatarContainer = styled(Element)(() =>
  css({
    display: 'inline-block',
    height: 8, // Styled System Theme Key: sizes
    width: 8, // Styled System Theme Key: sizes
    position: 'relative',
    flexShrink: 0, // avatars should never shrink inside flex
  })
);

const AvatarImage = styled.img(() =>
  css({
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 'small', // Styled System Theme Key: radii
    border: '1px solid',
  })
);
