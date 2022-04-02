import React, { FC } from "react";

export const Icon: FC<{ fill: string }> = ({ fill }) => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="35" height="35" rx="10" fill="#F3F3F8" fillOpacity="0.3" />
    <g clipPath="url(#clip0_29_195)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 9.16667C14.7386 9.16667 12.5 11.4052 12.5 14.1667C12.5 16.9281 14.7386 19.1667 17.5 19.1667C20.2614 19.1667 22.5 16.9281 22.5 14.1667C22.5 11.4052 20.2614 9.16667 17.5 9.16667ZM10.8333 14.1667C10.8333 10.4848 13.8181 7.5 17.5 7.5C21.1819 7.5 24.1666 10.4848 24.1666 14.1667C24.1666 17.8486 21.1819 20.8333 17.5 20.8333C13.8181 20.8333 10.8333 17.8486 10.8333 14.1667Z"
        fill={fill}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5488 18.2406C21.005 18.18 21.4239 18.5008 21.4844 18.957L22.4928 26.557C22.5349 26.8742 22.3916 27.1875 22.1242 27.3632C21.8567 27.5388 21.5123 27.5458 21.2379 27.3812L17.5 25.1385L13.7621 27.3812C13.4877 27.5459 13.1433 27.5388 12.8758 27.3631C12.6084 27.1874 12.4651 26.8741 12.5073 26.5569L13.5156 18.9653C13.5762 18.509 13.9952 18.1883 14.4514 18.2489C14.9076 18.3095 15.2284 18.7285 15.1678 19.1847L14.3871 25.0626L17.0713 23.4521C17.3352 23.2937 17.6649 23.2937 17.9288 23.4521L20.6133 25.0628L19.8323 19.1762C19.7717 18.72 20.0925 18.3011 20.5488 18.2406Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_29_195">
        <rect
          width="20"
          height="20"
          fill="white"
          transform="translate(7.5 7.5)"
        />
      </clipPath>
    </defs>
  </svg>
);