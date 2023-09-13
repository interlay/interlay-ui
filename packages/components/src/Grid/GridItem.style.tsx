import styled from 'styled-components';

import { GridItemProps } from './GridItem';

export const GridItemContainer = styled.div<GridItemProps>`
  grid-column: ${(props) =>
    props.mobile.start ? `${props.mobile.start} / span ${props.mobile.span}` : `span ${props.mobile.span}`};
  grid-row: ${(props) => props.mobile.row || 'auto'};
  justify-self: ${(props) => props.mobile.justify || 'auto'};

  @media (min-width: 48em) {
    grid-column: ${(props) =>
      props.desktop.start ? `${props.desktop.start} / span ${props.desktop.span}` : `span ${props.desktop.span}`};
    grid-row: ${(props) => props.desktop.row || 'auto'};
    justify-self: ${(props) => props.desktop.justify || 'auto'};
  }
`;
