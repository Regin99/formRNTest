import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ChevronUp = (props: SvgProps) => (
  <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.512 8.43a.75.75 0 01.976 0l7 6a.75.75 0 11-.976 1.14L12 9.987l-6.512 5.581a.75.75 0 11-.976-1.138l7-6z"
      fill="#1C274C"
    />
  </Svg>
);
