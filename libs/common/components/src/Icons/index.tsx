import React from 'react';
import { ElementProps } from '../Element';
import * as icons from './icons';

type IconNames = keyof typeof icons;

type IconProps = React.SVGAttributes<SVGAElement> &
  ElementProps & {
    name: IconNames;
    // For accessibility
    title?: string;
    size?: number;
  };

export const Icon: React.FC<IconProps> = ({ name, size = 16, ...props }) => {
  const SVG = icons[name];
  return <SVG width={size} height={size} {...props} />;
};
