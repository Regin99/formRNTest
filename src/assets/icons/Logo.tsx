import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

export const Logo = (props: SvgProps) => (
  <Svg height="16px" width="102px" viewBox="0 0 204 34" fill="none" {...props}>
    <Path
      d="M79 3.82l6.33 19.89h.25l6.34-19.9h6.13L89.03 30h-7.14L72.86 3.82H79zm25.52 26.55a8.19 8.19 0 01-3.35-.65 5.4 5.4 0 01-2.32-1.96 5.86 5.86 0 01-.85-3.24c0-1.1.2-2.01.6-2.75.4-.74.95-1.34 1.64-1.8.69-.44 1.47-.79 2.35-1.02.89-.23 1.82-.39 2.79-.48 1.14-.12 2.06-.23 2.76-.33.7-.11 1.2-.28 1.52-.49.32-.21.48-.53.48-.95v-.07c0-.81-.26-1.44-.77-1.88a3.15 3.15 0 00-2.15-.67 3.8 3.8 0 00-2.34.66 3 3 0 00-1.15 1.6l-5.04-.4a6.84 6.84 0 014.41-5.12 11.1 11.1 0 014.15-.71c1.09 0 2.13.13 3.13.38 1 .26 1.9.65 2.67 1.19a5.77 5.77 0 012.53 5.08V30h-5.16v-2.72h-.16a5.54 5.54 0 01-3.17 2.7c-.74.26-1.6.4-2.57.4zm1.56-3.76c.8 0 1.51-.16 2.13-.47.6-.32 1.09-.76 1.44-1.3.35-.55.52-1.17.52-1.86V20.9c-.17.1-.4.21-.7.3a12.9 12.9 0 01-2.08.44l-1 .14c-.64.1-1.2.24-1.68.45-.47.2-.84.48-1.1.83-.27.34-.4.77-.4 1.28 0 .74.26 1.3.8 1.7.55.38 1.24.57 2.07.57zm19.17-22.79V30h-5.44V3.82h5.44zm13.31 26.56c-2.02 0-3.75-.4-5.21-1.22a8.4 8.4 0 01-3.35-3.5 11.58 11.58 0 01-1.18-5.39c0-2.02.4-3.8 1.18-5.32a8.7 8.7 0 013.3-3.56 9.66 9.66 0 015.05-1.28c1.3 0 2.5.2 3.61.62a8.02 8.02 0 014.91 4.98c.47 1.24.7 2.7.7 4.37v1.5H131V18.2h11.45c0-.78-.17-1.48-.51-2.08a3.66 3.66 0 00-1.42-1.42c-.6-.35-1.3-.53-2.08-.53-.83 0-1.56.2-2.2.58-.63.37-1.13.88-1.49 1.52a4.3 4.3 0 00-.55 2.1v3.22c0 .97.18 1.8.54 2.52.37.7.88 1.25 1.55 1.63.66.39 1.45.58 2.36.58.6 0 1.16-.09 1.66-.26s.94-.42 1.3-.76c.35-.35.63-.76.81-1.26l5.04.33a6.88 6.88 0 01-1.57 3.18 7.9 7.9 0 01-3.04 2.1c-1.24.49-2.67.73-4.29.73zm23.01-20.02v4.1h-11.82v-4.1h11.82zm-9.14-4.7h5.45v18.3c0 .5.08.9.23 1.18.15.27.37.47.64.58.28.1.6.16.97.16a4.64 4.64 0 001.36-.18l.85 4.06c-.27.08-.65.18-1.15.3-.5.11-1.1.18-1.8.2a8.28 8.28 0 01-3.45-.52 4.82 4.82 0 01-2.29-1.86 5.7 5.7 0 01-.8-3.2V5.66zm18.29 24.71a8.18 8.18 0 01-3.35-.65 5.39 5.39 0 01-2.32-1.96 5.86 5.86 0 01-.85-3.24c0-1.1.2-2.01.6-2.75.4-.74.95-1.34 1.64-1.8.69-.44 1.47-.79 2.35-1.02.89-.23 1.82-.39 2.79-.48a70.3 70.3 0 002.76-.33c.7-.11 1.2-.28 1.52-.49.32-.21.47-.53.47-.95v-.07c0-.81-.25-1.44-.76-1.88a3.15 3.15 0 00-2.15-.67 3.8 3.8 0 00-2.34.66 3 3 0 00-1.15 1.6l-5.04-.4a6.85 6.85 0 014.41-5.12 11.1 11.1 0 014.14-.71c1.1 0 2.14.13 3.14.38 1 .26 1.9.65 2.67 1.19a5.78 5.78 0 012.53 5.08V30h-5.16v-2.72h-.16a5.53 5.53 0 01-3.17 2.7c-.74.26-1.6.4-2.57.4zm1.56-3.76c.8 0 1.51-.16 2.12-.47.62-.32 1.1-.76 1.45-1.3.35-.55.52-1.17.52-1.86V20.9c-.17.1-.4.21-.7.3a12.79 12.79 0 01-2.08.44l-1 .14c-.64.1-1.2.24-1.68.45-.47.2-.84.48-1.1.83-.27.34-.4.77-.4 1.28 0 .74.26 1.3.8 1.7.55.38 1.24.57 2.07.57zm18.28-16.25l3.6 6.87 3.7-6.87h5.58l-5.69 9.82L203.6 30h-5.56l-3.88-6.79-3.8 6.79h-5.63l5.83-9.82-5.63-9.82h5.63zM28.56 34L0 0h8.6l19.92 23.74 8.82-9.93 4.2 5L28.56 34zM48.8 0h8.6L45.8 13.65l-4.26-5.04L48.8 0z"
      fill="#111928"
    />
    <Path d="M45.72 34L17.16 0h8.6L54.3 34h-8.6z" fill="#1b9a6d" />
  </Svg>
);