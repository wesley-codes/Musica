import { css, CSSObject } from "styled-components";
export const Tablet = (props: CSSObject) => {
  return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};
