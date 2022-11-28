import { FC, HTMLProps } from "react";

export const SvgSprite: FC<{ src: any } & HTMLProps<SVGElement>> = ({
  src,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}) => {
  // Remove unsupported attributes
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    crossOrigin,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
