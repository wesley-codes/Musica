import * as React from "react";
import { SVGProps } from "react";

const HomeSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
  width='24px'
  height='24px'
  viewBox='0 0 24 24'
  fill={props.fill}
  xmlns='http://www.w3.org/2000/svg'
  {...props}
>
  <path
    d='M13.3758 3.47015C12.5655 2.84328 11.4345 2.84328 10.6242 3.47015L3.87424 8.69205C3.32286 9.11861 3 9.77686 3 10.4745V18.7474C3 19.9915 4.00736 21 5.25 21H8.25C9.49264 21 10.5 19.9915 10.5 18.7474V16.4948C10.5 15.6655 11.1716 14.9931 12 14.9931C12.8284 14.9931 13.5 15.6655 13.5 16.4948V18.7474C13.5 19.9915 14.5074 21 15.75 21H18.75C19.9926 21 21 19.9915 21 18.7474V10.4745C21 9.77686 20.6771 9.11861 20.1258 8.69205L13.3758 3.47015Z'
    fill={props.fill}
  />
</svg>
);

export default HomeSVG;
