import { FC } from "react";

import { ApiError } from "@/types/error";

const hasValidationErrors = (propertyPath: string, error?: ApiError) => {
  if (!error || !error.violations) {
    return false;
  }

  const violations = error.violations.filter(
    (violation) => violation.propertyPath === propertyPath
  );

  if (violations.length === 0) {
    return false;
  }

  return true;
};

const ApiFormFieldError: FC<{
  error?: ApiError;
  propertyPath: string;
}> = ({ error, propertyPath }) => {
  if (!hasValidationErrors(propertyPath, error)) {
    return null;
  }

  return (
    <>
      {error!.violations!.map((violation) => (
        <p key={violation.code}>{violation.message}</p>
      ))}
    </>
  );
};

if (process.env.NODE_ENV === "development") {
  ApiFormFieldError.whyDidYouRender = true;
}

export default ApiFormFieldError;
