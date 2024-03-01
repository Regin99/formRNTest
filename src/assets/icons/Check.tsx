import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Check = (props: SvgProps) => (
  <Svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.493 6.935a.75.75 0 01.072 1.058l-7.857 9a.75.75 0 01-1.13 0l-3.143-3.6a.75.75 0 011.13-.986l2.578 2.953 7.292-8.353a.75.75 0 011.058-.072z"
      fill="#1C274C"
    />
  </Svg>
);
