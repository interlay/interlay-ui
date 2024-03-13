import { ResponsiveProp } from './breakpoints';
import { Spacing } from './space';

export type Status = 'error' | 'warning' | 'success';

export type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

export type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

export type NormalAlignments = 'start' | 'center' | 'end';

export type Direction = 'row' | 'row-reverse' | 'column' | 'column-reverse';

export type Wrap = 'wrap' | 'nowrap' | 'wrap-reverse';

export type AlignSelf =
  | 'auto'
  | 'normal'
  | 'start'
  | 'end'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'self-start'
  | 'self-end'
  | 'stretch';

export type Placement = 'top' | 'right' | 'bottom' | 'left';

export interface MarginProps {
  margin?: ResponsiveProp<Spacing>;
  marginTop?: ResponsiveProp<Spacing>;
  marginBottom?: ResponsiveProp<Spacing>;
  marginLeft?: ResponsiveProp<Spacing>;
  marginRight?: ResponsiveProp<Spacing>;
  marginX?: ResponsiveProp<Spacing>;
  marginY?: ResponsiveProp<Spacing>;
}

export interface PaddingProps {
  padding?: ResponsiveProp<Spacing>;
  paddingTop?: ResponsiveProp<Spacing>;
  paddingBottom?: ResponsiveProp<Spacing>;
  paddingLeft?: ResponsiveProp<Spacing>;
  paddingRight?: ResponsiveProp<Spacing>;
  paddingX?: ResponsiveProp<Spacing>;
  paddingY?: ResponsiveProp<Spacing>;
}

export type Orientation = 'horizontal' | 'vertical';

export type Overflow = 'auto' | 'hidden' | 'scroll' | 'visible' | 'inherit';

export type ProgressBarColors = 'default' | 'red';

export type LabelPosition = 'top' | 'side';

export * from './font-size';
export * from './font-weight';
export * from './line-height';
export * from './rounded';
export * from './breakpoints';
export * from './colors';
export * from './typography';
export * from './transition';
export * from './icon';
export * from './max-width';
export * from './space';
