import * as React from "react";
import { SVGProps } from "react";

const NextSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M2.50667 5.58597V11.966C2.50667 13.2726 3.92667 14.0926 5.06 13.4393L7.82667 11.846L10.5933 10.246C11.7267 9.59263 11.7267 7.9593 10.5933 7.30597L7.82667 5.70597L5.06 4.11263C3.92667 3.4593 2.50667 4.27263 2.50667 5.58597Z'
      fill='white'
    />
    <path
      d='M13.4933 13.3926C13.22 13.3926 12.9933 13.166 12.9933 12.8926V4.65265C12.9933 4.37932 13.22 4.15265 13.4933 4.15265C13.7667 4.15265 13.9933 4.37932 13.9933 4.65265V12.8926C13.9933 13.166 13.7733 13.3926 13.4933 13.3926Z'
      fill='white'
    />
  </svg>
);

export default NextSVG;
