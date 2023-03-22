import { forwardRef, useState } from "react";
import passwordShowIcon from "@tabler/icons/eye.svg";
import passwordHideIcon from "@tabler/icons/eye-off.svg";

import { InferComponentProps } from "@/types/styled";

import SvgSprite from "../../svg/SvgSprite";

import Input from "./Input";

const PasswordInput = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof Input>
>((props, ref) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <Input
      ref={ref}
      {...props}
      type={showPassword ? "text" : "password"}
      iconAfter={
        <SvgSprite
          src={showPassword ? passwordHideIcon : passwordShowIcon}
          type="button"
          aria-label={showPassword ? "Hide password" : "Show password"}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        />
      }
    />
  );
});

PasswordInput.displayName = "PasswordInput";

if (process.env.NODE_ENV === "development") {
  PasswordInput.displayName = "PasswordInput";
  PasswordInput.whyDidYouRender = true;
}

export default PasswordInput;
