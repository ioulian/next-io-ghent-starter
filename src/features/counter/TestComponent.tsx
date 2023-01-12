import { FC, memo } from "react";

const TestComponent: FC<{ test: number }> = ({ test }) => {
  console.log("enter");
  return <div>test {test}</div>;
};

export default memo(TestComponent);
