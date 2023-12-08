import { forwardRef, memo, useCallback, useState } from "react";
import passwordShowIcon from "@tabler/icons/eye.svg";
import passwordHideIcon from "@tabler/icons/eye-off.svg";
import { useTranslation } from "next-i18next";

import { InferComponentProps } from "@/types/styled";

import SvgSprite from "../../svg/SvgSprite";
import Button from "../../button/Button";

import Input from "./Input";

const PasswordInput = forwardRef<
  HTMLInputElement,
  InferComponentProps<typeof Input>
>((props, ref) => {
  const { t } = useTranslation("common");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const onClickCallback = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  return (
    <Input
      ref={ref}
      {...props}
      type={showPassword ? "text" : "password"}
      iconAfter={
        <Button
          iconBefore={
            <SvgSprite
              src={showPassword ? passwordHideIcon : passwordShowIcon}
            />
          }
          iconOnly
          $size="base"
          $type="simple"
          onClick={onClickCallback}
        >
          {t(
            `form.passwordInput.${
              showPassword ? "revealPassword" : "hidePassword"
            }`,
          )}
        </Button>
      }
    />
  );
});

PasswordInput.displayName = "PasswordInput";

if (process.env.NODE_ENV === "development") {
  PasswordInput.displayName = "PasswordInput";
  PasswordInput.whyDidYouRender = true;
}

export default memo(PasswordInput);
