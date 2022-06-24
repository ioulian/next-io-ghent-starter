import { FC, HTMLProps } from "react";

export const SvgSprite: FC<{ src: any } & HTMLProps<SVGElement>> = ({
  src,
  children,
  ...props
}) => {
  // Remove unsupported attributes
  const {
    crossOrigin,
    ref,
    title,
    ...typedProps
  }: Partial<HTMLProps<SVGElement>> = props;

  return (
    <svg {...typedProps} viewBox={src.viewBox}>
      {title && <title>{title}</title>}
      <use xlinkHref={`#${src.id}`} />
    </svg>
  );
};
