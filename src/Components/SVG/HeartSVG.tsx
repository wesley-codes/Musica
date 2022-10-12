import * as React from "react";
import { SVGProps } from "react";

const HeartSVG = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={props.width}
    height={props.height}
    viewBox='0 0 18 16'
    fill={props.fill}
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.43496 8.37182C0.540791 5.58016 1.58662 2.10933 4.51746 1.16599C6.05912 0.668493 7.96162 1.08349 9.04246 2.57433C10.0616 1.02849 12.0191 0.671826 13.5591 1.16599C16.4891 2.10933 17.5408 5.58016 16.6475 8.37182C15.2558 12.7968 10.4 15.1018 9.04246 15.1018C7.68579 15.1018 2.87329 12.8485 1.43496 8.37182Z'
      stroke='#EFEEE0'
      strokeWidth={0.625}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12.1572 4.30328C13.163 4.40662 13.7922 5.20412 13.7547 6.32162'
      stroke='#EFEEE0'
      strokeWidth={0.625}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export default HeartSVG;
