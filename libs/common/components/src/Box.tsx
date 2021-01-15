import css from '@styled-system/css';
import styled from 'styled-components';

export interface BoxProps {
  margin?: number;
  marginX?: number;
  marginY?: number;
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingX?: number;
  paddingY?: number;
  paddingBottom?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  css?: Object;
}

export const Box = styled.div<BoxProps>((props) =>
  css({
    boxSizing: 'border-box',
    margin: nullCheck(props.margin),
    marginX: nullCheck(props.marginX),
    marginY: nullCheck(props.marginY),
    marginTop: nullCheck(props.marginTop),
    marginBottom: nullCheck(props.marginBottom),
    marginLeft: nullCheck(props.marginLeft),
    marginRight: nullCheck(props.marginRight),
    padding: nullCheck(props.padding),
    paddingX: nullCheck(props.paddingX),
    paddingY: nullCheck(props.paddingY),
    paddingTop: nullCheck(props.paddingTop),
    paddingBottom: nullCheck(props.paddingBottom),
    paddingLeft: nullCheck(props.paddingLeft),
    paddingRight: nullCheck(props.paddingRight),
    ...(props.css || {}),
  })
);

const nullCheck = (value: number) => {
  // 0 is an allowed value, even though it is falsy
  if (typeof value !== 'undefined') {
    return value;
  }
  return null;
};
