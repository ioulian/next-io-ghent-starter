import { FC, PropsWithChildren } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperProps } from "swiper/react";

import "swiper/css";

const Slider: FC<PropsWithChildren<SwiperProps>> = ({
  children,
  modules,
  ...props
}) => {
  return (
    <Swiper
      {...props}
      modules={Array.isArray(modules) ? [...modules, A11y] : [A11y]}
    >
      {children}
    </Swiper>
  );
};

export default Slider;
