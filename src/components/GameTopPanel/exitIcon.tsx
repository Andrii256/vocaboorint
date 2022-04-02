import React, { FC } from "react";

export const ExitIcon: FC<Record<string, any>> = (props) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x="0.5" y="0.5" width="17" height="17" rx="8.5" stroke="#91919F" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.8169 5.15469C11.061 5.36094 11.061 5.69534 10.8169 5.90159L7.50888 8.69696L10.8169 11.4923C11.061 11.6986 11.061 12.033 10.8169 12.2392C10.5729 12.4455 10.1771 12.4455 9.93306 12.2392L6.18306 9.07041C5.93898 8.86416 5.93898 8.52976 6.18306 8.32351L9.93306 5.15469C10.1771 4.94844 10.5729 4.94844 10.8169 5.15469Z"
      fill="#91919F"
    />
  </svg>
);
