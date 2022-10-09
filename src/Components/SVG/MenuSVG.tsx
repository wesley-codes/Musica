import * as React from "react";
import { SVGProps } from "react";

const MenuSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g clipPath='url(#clip0_107_495)'>
      <path
        d='M4 8H20'
        stroke='#EFEEE0'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M4 16H20'
        stroke='#EFEEE0'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </g>
    <defs>
      <clipPath id='clip0_107_495'>
        <rect width={24} height={24} fill='white' />
      </clipPath>
    </defs>
  </svg>
);

export default MenuSVG;
