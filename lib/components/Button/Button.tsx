import { css } from "@emotion/react";

import Test from "../../assets/test.svg";

const style = css`
  color: red;
`;
export const Button = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) => {
  return (
    <button css={style} {...props}>
      <img src={Test} alt="abc" />
    </button>
  );
};
