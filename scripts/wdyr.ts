/// <reference types="@welldone-software/why-did-you-render" />
import React from "react";

if (
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_WDYR_ENABLE === "true"
) {
  if (typeof window !== "undefined") {
    const whyDidYouRender = require("@welldone-software/why-did-you-render");
    const ReactRedux = require("react-redux");
    whyDidYouRender(React, {
      trackAllPureComponents: true,
      trackExtraHooks: [
        [ReactRedux, "useSelector"],
        [ReactRedux, "useAppSelector"],
      ],
    });
  }
}
