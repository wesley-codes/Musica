import * as React from "react";
import { SVGProps } from "react";

const PreviousSVG= (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={17}
    viewBox='0 0 16 17'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      d='M13.4933 5.58597V11.966C13.4933 13.2726 12.0733 14.0926 10.94 13.4393L8.17334 11.846L5.40667 10.246C4.27334 9.59263 4.27334 7.9593 5.40667 7.30597L8.17334 5.70597L10.94 4.11263C12.0733 3.4593 13.4933 4.27263 13.4933 5.58597Z'
      fill='white'
    />
    <path
      d='M2.50668 13.3926C2.23335 13.3926 2.00668 13.166 2.00668 12.8926V4.65265C2.00668 4.37932 2.23335 4.15265 2.50668 4.15265C2.78002 4.15265 3.00668 4.37932 3.00668 4.65265V12.8926C3.00668 13.166 2.78002 13.3926 2.50668 13.3926Z'
      fill='white'
    />
  </svg>
);

export default PreviousSVG;
