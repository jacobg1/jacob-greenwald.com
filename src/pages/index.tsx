import * as React from "react";
import { PageMeta } from "../components/page-meta";
import { Page } from "../components/page";
import { graphql, PageProps } from "gatsby";

type PageData = {
  markdownRemark: {
    html: string;
    frontmatter: {
      page: string;
    };
  };
};

const IndexPage: React.FC<PageProps<PageData>> = ({
  data: {
    markdownRemark: { html },
  },
}): JSX.Element => {
  return (
    <Page>
      <PageMeta />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};
export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { page: { eq: "homepage" } }) {
      frontmatter {
        page
      }
      html
    }
  }
`;
export default IndexPage;
