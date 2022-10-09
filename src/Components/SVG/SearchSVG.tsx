import * as React from "react";
import { SVGProps } from "react";

const SearchSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='30px'
    height='30px'
    viewBox='0 0 50 50'
    fill= {props.fill}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path d='M23 36c-7.2 0-13-5.8-13-13s5.8-13 13-13 13 5.8 13 13-5.8 13-13 13zm0-24c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11z' />
    <path d='M32.682 31.267l8.98 8.98-1.414 1.414-8.98-8.98z' />
  </svg>
);

export default SearchSVG;
