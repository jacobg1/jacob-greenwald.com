jest.mock("gatsby", () => {
  const { createElement } = jest.requireActual("react");
  const gatsby = jest.requireActual("gatsby");

  return {
    ...gatsby,
    graphql: jest.fn(),
    useStaticQuery: jest.fn(),
    Link: jest
      .fn()
      .mockImplementation(
        ({
          activeClassName,
          activeStyle,
          getProps,
          innerRef,
          partiallyActive,
          ref,
          replace,
          to,
          ...rest
        }) => createElement("a", { ...rest, href: to })
      ),
    Slice: jest
      .fn()
      .mockImplementation(({ alias, ...rest }) =>
        createElement("div", { ...rest, "data-test-slice-alias": alias })
      ),
  };
});
