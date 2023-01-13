import { FC, memo } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";
import isEqual from "lodash/isEqual";

import { StyledPagination } from "./Pagination.styles";

const Pagination: FC<ReactPaginateProps> = (props) => {
  return (
    <StyledPagination>
      <ReactPaginate {...props} />
    </StyledPagination>
  );
};

if (process.env.NODE_ENV === "development") {
  Pagination.whyDidYouRender = true;
}

export default memo(Pagination, isEqual);
