import { Tooltip } from '@material-ui/core';
import { css } from '@styled-system/css';
import React from 'react';
import styled from 'styled-components';
import { Element } from './Element';

interface AvatarProps {
  imageUrl: string;
  userName: string;
  tooltipTitle?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  imageUrl,
  userName,
  tooltipTitle,
}) => {
  return (
    <Tooltip title={tooltipTitle} arrow>
      <span>
        <AvatarContainer>
          <AvatarImage src={imageUrl} alt={userName} />
        </AvatarContainer>
      </span>
    </Tooltip>
  );
};

const AvatarContainer = styled(Element)(
  css({
    display: 'inline-block',
    height: 8,
    width: 8,
    position: 'relative',
    color: 'transparent',
  })
);

const AvatarImage = styled.img(() =>
  css({
    height: '100%',
    width: '100%',
    boxSizing: 'border-box',
    borderRadius: 'small',
    border: '1px solid',
  })
);
