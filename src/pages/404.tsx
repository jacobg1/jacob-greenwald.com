import React, { JSX } from "react";

import { Link } from "gatsby";

const NotFoundPage = (): JSX.Element => {
  return (
    <>
      <title>Not found</title>
      <Link to="/">Go home</Link>.
    </>
  );
};

export default NotFoundPage;
