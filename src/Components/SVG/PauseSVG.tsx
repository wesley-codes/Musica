import * as React from "react";
import { SVGProps } from "react";
const PauseSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={9}
    height={10}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    role="img"
    fill="#EFEEE0"
    {...props}
  >
    <title>{"pause"}</title>
    <desc>{"Created with sketchtool."}</desc>
    <g
      id="media-player"
      stroke="none"
      strokeWidth={1}
      fill="#EFEEE0"
      fillRule="evenodd"
    >
      <g id="pause" fill="#000000">
        <path
          d="M10,18 C10,18.5522847 9.55228475,19 9,19 L8,19 C7.44771525,19 7,18.5522847 7,18 L7,6 C7,5.44771525 7.44771525,5 8,5 L9,5 C9.55228475,5 10,5.44771525 10,6 L10,18 Z M17,18 C17,18.5522847 16.5522847,19 16,19 L15,19 C14.4477153,19 14,18.5522847 14,18 L14,6 C14,5.44771525 14.4477153,5 15,5 L16,5 C16.5522847,5 17,5.44771525 17,6 L17,18 Z"
          id="Shape"
        />
      </g>
    </g>
  </svg>
);
export default PauseSVG;
