import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const ChevronDown = (props: SvgProps) => (
  <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.43 8.512a.75.75 0 011.058-.081L12 14.012l6.512-5.581a.75.75 0 01.976 1.138l-7 6a.75.75 0 01-.976 0l-7-6a.75.75 0 01-.081-1.057z"
      fill="#1C274C"
    />
  </Svg>
);
