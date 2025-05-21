import { css } from "@emotion/react";

import Test from "../../assets/Test";

const style1 = css`
  border-color: "red";
`;
const style2 = css`
  border-color: blue;
`;

interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "style1" | "style2";
}
export const Button: React.FC<ButtonProp> = ({ variant, ...props }) => {
  return (
    <button css={variant === "style1" ? style1 : style2} {...props}>
      <Test />
    </button>
  );
};
