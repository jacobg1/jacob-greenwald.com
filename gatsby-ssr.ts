import { GatsbySSR } from "gatsby";

export { wrapRootElement, wrapPageElement } from "./src/wrappers";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: "en" });
};
