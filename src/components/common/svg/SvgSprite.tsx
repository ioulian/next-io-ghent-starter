import { FC, HTMLProps, useId } from "react";

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

  const titleId = useId();
  return (
    <svg
      {...typedProps}
      viewBox={src.viewBox}
      role="img"
      aria-labelledby={title && titleId}
    >
      {title && <title id={titleId}>{title}</title>}
      <use xlinkHref={`#${src.id}`} />
    </svg>
  );
};
