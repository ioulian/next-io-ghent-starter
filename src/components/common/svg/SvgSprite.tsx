import { FC, HTMLProps, memo, useId } from "react";

const SvgSprite: FC<{ src: any } & HTMLProps<SVGElement>> = ({
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
      role={title ? "img" : undefined}
      aria-hidden={!title ? true : undefined}
      aria-labelledby={title ? titleId : undefined}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <use xlinkHref={`#${src.id}`} />
    </svg>
  );
};

if (process.env.NODE_ENV === "development") {
  SvgSprite.whyDidYouRender = true;
}

export default memo(SvgSprite);
